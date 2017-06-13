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


## Installing
The desktop application is available for Windows and Mac and runs as a stand-alone executable that can be downloaded from the [Repository releases page][4].

You will also need the [Arduino IDE version 1.6.x or higher][2].

| Windows build       | Mac OS X build       |
|:-------------------:|:-------------------:|
| [![Windows Build status](https://ci.appveyor.com/api/projects/status/t877g920hdiifc2i?svg=true)](https://ci.appveyor.com/project/carlosperate/ardublockly) | [![Mac Build Status](https://travis-ci.org/carlosperate/ardublockly.svg?branch=master)](https://travis-ci.org/carlosperate/ardublockly) |
| [Download Link][13] | [Download Link][14]  |

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
3. Run Ardublockly as defined in your installation method.
3. Configure Ardublockly to locate the Arduino IDE [following these instructions][6].


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
