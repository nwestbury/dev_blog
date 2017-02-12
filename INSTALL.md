# Based off https://chrisebert.net/installing-ghost-and-nginx-on-ubuntu-server-16-04-lts/

sudo apt-get install ufw nginx

# Configure firewall
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https
sudo ufw disable
sudo ufw enable
sudo ufw status verbose

# install latest stable version of nodejs
# install ghost
# install cert-bot (see renewal script)
# cp renew.sh to /etc/letsencrypt
# crontab -e ::: 0 0 10 Feb,May,Aug,Nov * bash /etc/letsencrypt/renew.sh