# Ardublockly
Ardublockly is a visual programming editor for Arduino. It is based on Google's [Blockly][1], which has been forked to generate [Arduino][15] code. It's made by carlosperate (https://github.com/carlosperate).
We've added blocks for the senseBox:edu (www.sensebox.de/https://sensebox.de/de/productsand) and did a german translation.

The `ArdublocklyServer` Python package initialises a local server to be able to compile and load the Arduino code using the [Arduino IDE][2].

This is all packaged in a self contained executable desktop application for Windows, Mac OS X, and Linux.


![Ardublockly desktop program screenshot][desktop_screeshot]


## Features
* Generates Arduino code with visual drag-and-drop blocks
* Uploads the code to an Arduino Board
* Useful "code block warnings"
* Compatible with a wide range of official Arduino Boards
* Works on Windows / Linux / Mac OS X
* Special blocks for the use of the senseBox:edu components.

Ardublockly is still under development and a few features are not yet implemented. Always see the issues section in this repository or in the main repository by and also in the main repository [Ardublockly by carlosperate.](https://github.com/carlosperate/ardublockly/)

Currently tested under Windows with Python 2.7 and 3.4 and in Linux and MacOS X with Python 2.7.


#### "Core version" (Python server only)
If you prefer, the core software can be used by running only the Python server, which loads the web interface on your local browser (Chrome recommended).

Full installation instructions for this version can be found in [this Github repository Wiki][5].

The quick version: Clone this repository, initialise all submodules, and execute:

```
python start.py
```

This will work on Windows, Linux (including ARM) and Mac OS X, with Python >2.7 or >3.4


## Running
1. [Install Ardublockly][5].
2. Install the [Arduino IDE][2] version 1.6.x or higher (latest version is always recommended).
3. The quick version: Clone this repository, initialise all submodules, and execute:
```
python start.py
```
4. Configure Ardublockly to locate the Arduino IDE [following these instructions][6].

## Building packaged executables
It is possible to package ardublockly, so no external dependencies (eg python, a browser) are required.
The build steps as described [here](https://github.com/carlosperate/ardublockly/wiki/Building-Ardublockly) are implemented in the scripts `build_fullpackage.sh` (linux, macos) & `build_fullpackage.bat` (windows).
These scripts require `python` and `npm` to be installed and in the `$PATH`.

To run, doubleclick the script or run `./build_fullpackage.sh` in the projects root directory.
The resulting zip-package will reside in `./releases`.
It is only possible to build for the current platform, so no windows-builds on linux.. :^/

## Credit
Thanks to [carlosperate](https://github.com/carlosperate) who used build the fantanstic interface inspired by BlocklyDuino.

This project has been inspired by [BlocklyDuino][16].

Blockly original source is Copyright of Google Inc. [https://developers.google.com/blockly/][1]. A list of changes to the Blockly fork can be found in the [Blockly subdirectory README][17] file.



## License
See original Version by carlosperate or in the [LICENSE][9] file.

Unless stated otherwise, the source code of this projects is
licensed under the Apache License, Version 2.0 (the "License");
you may not use any of the licensed files within this project
except in compliance with the License.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


[1]: https://developers.google.com/blockly/
[2]: http://www.arduino.cc/en/main/software/
[3]: TODO.md
[4]: https://github.com/senseBox/ardublockly/releases/
[5]: https://github.com/carlosperate/ardublockly/wiki/Installing-Ardublockly
[6]: https://github.com/carlosperate/ardublockly/wiki/Configure-Ardublockly
[7]: https://github.com/carlosperate/ardublockly/wiki
[8]: https://github.com/carlosperate/ardublockly/compare/blockly-original...master
[9]: https://github.com/carlosperate/ardublockly/blob/master/LICENSE
[10]: http://ardublockly.embeddedlog.com/demo/index.html
[11]: http://ardublockly.embeddedlog.com/demo/classic/index.html
[12]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=linux/
[13]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=windows/
[14]: http://ardublockly-builds.s3-website-us-west-2.amazonaws.com/index.html?prefix=mac/
[15]: http://www.arduino.cc
[16]: https://github.com/BlocklyDuino/BlocklyDuino
[17]: blockly/README.md

[desktop_screeshot]: http://carlosperate.github.io/ardublockly/images/screenshot_desktop_1.png
[web_screenshot_responsive]: http://carlosperate.github.io/ardublockly/images/screenshot_material_all_small.jpg
[web_screenshot_classic]: http://carlosperate.github.io/ardublockly/images/screenshot_1.png
