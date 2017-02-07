## 사전작업

### 최신 Nodejs Using Ubuntu
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs

### Using Debian, as root
curl -sL https://deb.nodesource.com/setup_6.x | bash -
apt-get install -y nodejs
npm install -g angular-cli


## Build & development

Run `grunt` for building and `grunt serve` for preview.

# Testing

Running `grunt test` will run the unit tests with karma.
