#!/bin/bash

git clone https://github.com/DaveGamble/cJSON.git

mv cJSON/cJSON.c src/c
mv cJSON/cJSON.h src/c

rm -rf cJSON
