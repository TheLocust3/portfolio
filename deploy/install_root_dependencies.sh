#!/bin/bash

set -e

cd /home/ubuntu

sudo apt-get update

# install npm and updated version of nodejs
sudo apt-get install -y nodejs npm

sudo npm install --global n
sudo n 8.6.0
sudo ln -sf /usr/local/n/versions/node/8.6.0/bin/node /usr/bin/nodejs

sudo npm install --global yarn

# setup nginx + passenger
sudo apt-get install -y nginx
