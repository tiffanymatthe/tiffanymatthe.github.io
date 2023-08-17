#!/bin/bash
set -e

# bash compile_website.sh p

# https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported
# $env:NODE_OPTIONS = "--openssl-legacy-provider"

npm run build

npm run generate

cp dist/index.html dist/404.html

echo "tiffanymatthe.com" > dist/CNAME

echo "Finished populating dist/"

if [ ! -z $1 ]
then 
    git subtree push --prefix dist origin gh-pages
else
    echo "Push to Github Pages using 'git subtree push --prefix dist origin gh-pages'"
fi
