#!/bin/bash

set -e

# install dependencies
command -v python >/dev/null 2>&1 || { echo "I require python but it's not installed.  Aborting." >&2; exit 1; }
command -v pyinstaller >/dev/null 2>&1 || echo "Missing pyinstaller, trying to install via pip."; pip install pyinstaller || { echo "I require pyinstaller but it's not installed.  Aborting." >&2; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "I require node.js and npm but it's not installed.  Aborting." >&2; exit 1; }


# build frontend
cd blockly
python2.7 build.py
cd ..

# package backend into executable
python2.7 package/build_pyinstaller.py

# package frontend into electron app
cd package/electron
npm install
npm run release
cd ../..

# build zip package for both components
python2.7 package/pack_ardublockly.py

echo "done! release in directory ./releases/"
