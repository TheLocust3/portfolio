provider "aws" {
  region = "us-east-1"
}

resource "random_id" "random" {
  keepers = {
    password = "random string" // Using this for snapshot names
  }

  byte_length = 8
}

data "aws_acm_certificate" "certificate" {
  domain = "www.jakekinsella.com"
}

variable "key" {
  default = "portfolio"
}

data "aws_ami" "image" {
  name_regex  = "portfolio"
  most_recent = true
}

resource "aws_security_group" "security_group" {
  name        = "portfolio-ec2"
  description = "Managed by Terraform"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

// Codedeploy roles

data "aws_iam_policy_document" "ec2-role" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["ec2.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "ec2-role" {
  name               = "portfolio-ec2"
  assume_role_policy = "${data.aws_iam_policy_document.ec2-role.json}"
}

resource "aws_iam_role_policy_attachment" "ec2-role-for-codedeploy" {
  role       = "${aws_iam_role.ec2-role.name}"
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonEC2RoleforAWSCodeDeploy"
}

resource "aws_iam_instance_profile" "ec2-profile" {
  name = "portfolio_profile"
  role = "${aws_iam_role.ec2-role.name}"
}

data "aws_iam_policy_document" "codedeploy" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["codedeploy.amazonaws.com"]
    }
  }
}

resource "aws_iam_role" "deployment" {
  name = "portfolio-deployment"

  assume_role_policy = "${data.aws_iam_policy_document.codedeploy.json}"
}

resource "aws_iam_role_policy_attachment" "deployment" {
  role       = "${aws_iam_role.deployment.name}"
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSCodeDeployRole"
}

resource "aws_instance" "instance" {
  ami                    = "${data.aws_ami.image.id}"
  instance_type          = "t2.micro"
  vpc_security_group_ids = ["${aws_security_group.security_group.id}"]
  key_name               = "${var.key}"

  tags {
    Name = "portfolio"
  }
}

resource "aws_codedeploy_app" "application" {
  name = "portfolio"
}

resource "aws_codedeploy_deployment_group" "deployment" {
  app_name              = "${aws_codedeploy_app.application.name}"
  deployment_group_name = "production"
  service_role_arn      = "${aws_iam_role.deployment.arn}"

  ec2_tag_set {
    ec2_tag_filter {
      key   = "Name"
      type  = "KEY_AND_VALUE"
      value = "portfolio"
    }
  }

  deployment_style {
    deployment_option = "WITHOUT_TRAFFIC_CONTROL"
    deployment_type   = "IN_PLACE"
  }

  lifecycle {
    ignore_changes = ["*"]
  }
}
