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