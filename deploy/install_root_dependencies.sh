#!/bin/bash

set -e

sudo apt-get update

# install npm and updated version of nodejs
sudo apt-get install -y nodejs npm

sudo npm install --global n
sudo n 8.6.0
sudo ln -sf /usr/local/n/versions/node/8.6.0/bin/node /usr/bin/nodejs

sudo npm install --global yarn

# setup nginx
sudo apt-get install -y nginx

# install certbot
sudo apt-get install -y software-properties-common
sudo add-apt-repository -y universe
sudo add-apt-repository -y ppa:certbot/certbot
sudo apt-get update
sudo apt-get install -y python-certbot-nginx
