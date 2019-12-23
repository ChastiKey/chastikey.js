#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

# navigate into the build output directory
cd dist

git init
git add -A
git commit -m 'deploy documentation'

git push -f git@github.com:ChastiKey/chastikey.js.git master:gh-pages

cd -