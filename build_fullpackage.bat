echo "this script requires python 2.7, pip, and npm! make sure they are in the PATH"

pip install pyinstaller

# build frontend
cd blockly
python build.py
cd ..

# package backend into executable
python package\build_pyinstaller.py

# package frontend into electron app
cd package\electron
npm install
npm run release
cd ..\..

# build zip package for both components
python package\pack_ardublockly.py

echo "done! release zip in directory .\releases\"
