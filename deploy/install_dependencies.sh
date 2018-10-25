#!/bin/bash

set -e

source /home/ubuntu/server/deploy/install_root_dependencies.sh

# setup services
ls /home/ubuntu/server/deploy/services | xargs -i sudo install -m u+rw,ugo-x,go-w,go+r deploy/services/"{}" "/lib/systemd/system/{}"
sudo systemctl daemon-reload
sudo systemctl enable server.service

# setup nginx config
sudo rm /etc/nginx/sites-available/default
sudo cp /home/ubuntu/server/deploy/nginx /etc/nginx/sites-available/default
sudo systemctl restart nginx
