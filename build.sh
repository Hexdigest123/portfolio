#!/usr/bin/bash
sudo docker stop portfolio || true
sudo docker rm portfolio || true
sudo docker compose up --build 
