#!/bin/bash

set -e

source /home/ubuntu/server/deploy/install_root_dependencies.sh

# setup services
ls deploy/services | xargs -i sudo install -m u+rw,ugo-x,go-w,go+r deploy/services/"{}" "/lib/systemd/system/{}"
sudo systemctl daemon-reload
sudo systemctl enable rails.service

# setup nginx config
sudo rm /etc/nginx/sites-available/default
sudo cp /home/ubuntu/rails/deploy/nginx /etc/nginx/sites-available/default
sudo systemctl restart nginx

# setup server
cd /home/ubuntu/rails

# pull secrets
export $(cat /home/ubuntu/secrets.env | xargs)

bundle install
