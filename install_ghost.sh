mkdir ghost
cd ghost
wget https://github.com/TryGhost/Ghost/releases/download/0.11.4/Ghost-0.11.4.zip
unzip Ghost*.zip
npm install --production
cp ../config.js .

# NODE_ENV=production forever node index.js
