#!/bin/bash

# wget https://dl.eff.org/certbot-auto
# chmod a+x certbot-auto
# After running, certbot-auto certonly --standalone -d segfault.ml -d www.segfault.ml
certbot-auto renew --quiet --no-self-upgrade
cp /etc/letsencrypt/live/segfault.ml/*.pem /etc/nginx/ssl
sudo service nginx reload
