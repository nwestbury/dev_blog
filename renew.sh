#!/bin/bash

# After running, certbot-auto certonly --standalone -d segfault.ml -d www.segfault.ml
certbot-auto renew
cp /etc/letsencrypt/live/segfault.ml/*.pem /etc/nginx/ssl
