#!/usr/bin/env sh

# abort on errors
set -e

# navigate into the build output directory
cd docs

git init
git add -A
git commit -m 'deploy documentation'

git push -f git@github.com:ChastiKey/chastikey.js.git master:gh-pages

cd -
