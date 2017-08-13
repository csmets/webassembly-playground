#!/bin/bash

if [ ! -d "dist" ]
then
    mkdir dist
else
    rm -rf dist
    mkdir dist
fi

emcc src/c/getJSONKeyValues.c src/c/cJSON.c \
    -s WASM=1 \
    -s EXPORTED_FUNCTIONS="['_getJSONKeyValues']" \
    --shell-file templates/template.html -o dist/json-out.html

cp -R public/* dist
cp -R src/js/* dist

cd dist
sed -i -e 's/async//g' json-out.html
