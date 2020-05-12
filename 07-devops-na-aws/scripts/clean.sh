#!/bin/bash

sudo pkill -9 node 
sudo pkill -9 npm
sudo pkill -9 /usr/bin/node
sudo pkill -9 server.js

rm -rf /etc/app/doesangue/*