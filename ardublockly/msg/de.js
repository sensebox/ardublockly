var Ardublockly = Ardublockly || {};
Ardublockly.LOCALISED_TEXT = {
  translationLanguage: "Deutsch",
  title: "senseBox",
  blocks: "Blöcke",
  /* Menu */
  open: "Öffnen",
  save: "Speichern",
  deleteAll: "Alles Löschen",
  settings: "Einstellungen",
  documentation: "Dokumentation",
  reportBug: "Fehler melden",
  examples: "Beispiele",
  /* Settings */
  compilerLocation: "Speicherort des Arduino Compilers",
  compilerLocationDefault: "Speicherort des Arduino Compilers unbekannt.",
  sketchFolder: "Sketch Ordner",
  sketchFolderDefault: "Sketch Ordner unbekannt",
  arduinoBoard: "Arduino Board",
  arduinoBoardDefault: "Arduino Board unbekannt",
  comPort: "COM Port",
  comPortDefault: "COM Port unbekannt",
  defaultIdeButton: "Standard IDE Button",
  defaultIdeButtonDefault: "IDE Optionen unbekannt",
  language: "Sprache",
  languageDefault: "Language unbekannt",
  sketchName: "Sketch Name",
  /* Arduino console output */
  arduinoOpMainTitle: "Arduino IDE Ausgabe",
  arduinoOpWaiting: "Warte auf IDE Ausgabe...",
  arduinoOpUploadedTitle: "Sketch hochladen erfolgreich",
  arduinoOpVerifiedTitle: "Sketch überprüfen erfolgreich",
  arduinoOpOpenedTitle: "Sketch in IDE geöffnet",
  arduinoOpOpenedBody: "Der Sketch sollte in der Arduino IDE geöffnet werden.",
  arduinoOpErrorTitle: "Ein Fehler ist aufgetreten.",
  arduinoOpErrorIdContext_0: "Kein Fehler.",
  arduinoOpErrorIdContext_1: "Kompilieren oder Hochladen fehlgeschlafen.",
  arduinoOpErrorIdContext_2: "Sketch nicht gefunden.",
  arduinoOpErrorIdContext_3: "Ungültiges Kommandozeilen Argument.",
  arduinoOpErrorIdContext_4: "Preference passed to 'get-pref' flag does not exist.",
  arduinoOpErrorIdContext_5: "Not Clear, but Arduino IDE sometimes errors with this.",
  arduinoOpErrorIdContext_50: "Unerwarteter Fehler in der Arduino IDE.",
  arduinoOpErrorIdContext_51: "Sketch Datei konnte nicht erstellt werden.",
  arduinoOpErrorIdContext_52: "Invalid path to internally created sketch file",
  arduinoOpErrorIdContext_53: "Unable to find Arduino IDE<br>" +
                              "The compiler directory has not been set correctly.<br>" +
                              "Please ensure the path is correct in the Settings.",
  arduinoOpErrorIdContext_54: "What should we do with the Sketch?<br>" +
                              "The launch IDE option has not been set.<br>" +
                              "Please select an IDE option in the Settings.",
  arduinoOpErrorIdContext_55: "Auf den seriellen Port kann nicht zugegriffen werden<br>" +
                              "Auf den seriellen Port kann nicht zugegriffen werden.<br>" +
                              "Please check if the Arduino is correctly connected to the PC and select the Serial Port in the Settings.",
  arduinoOpErrorIdContext_56: "Unknown Arduino Board<br>" +
                              "The Arduino Board has not been set.<br>" +
                              "Please select the appropriate Arduino Board from the settings.",
  arduinoOpErrorIdContext_52: "Unexpected server error.",
  arduinoOpErrorIdContext_64: "Unable to parse sent JSON.",
  arduinoOpErrorUnknown: "Unerwarteter Fehler",
  /* Modals */
  noServerTitle: "SenseBox::Blockly Server läuft nicht",
  noServerTitleBody: "<p>For all the Ardublockly features to be enabled, the Ardublockly desktop application must be running locally on your computer.</p>" +
                     "<p>If you are using an online version you will not be able to configure the settings nor load the blocks code into an Arduino.</p>" +
                     "<p>Installation instruction can be found in the <a href=\"https://github.com/carlosperate/ardublockly\">Ardublockly repository</a>.</p>" +
                     "<p>If you have Ardublockly already installed, make sure the application is running correctly.</p>",
  noServerNoLangBody: "If the Ardublockly application is not running the language cannot be fully changed.",
  addBlocksTitle: "Zusätzliche Blöcke",
  /* Alerts */
  loadNewBlocksTitle: "Neue Blöcke laden?",
  loadNewBlocksBody: "Das Laden einer neuen XML Datei wird die bisheren Blöcke in der Oberfläche ersetzten.<br>" +
                     "Bist du sicher, dass du Fortfahren möchtest?",
  discardBlocksTitle: "Blöcke löschen?",
  discardBlocksBody: "Es sind %1 neue Blöcke in der Oberfläche.<br>" +
                     "Bist du sicher, dass du diese Löschen möchtest?",
  invalidXmlTitle: "Ungültige XML",
  invalidXmlBody: "Die XML Datei wurde nicht erfoglreich in Blöcke umgewandelt. Bitte überprüfe den XML Code und versuche es erneut.",
  /* Tooltips */
  uploadingSketch: "Lade Sketch auf den Arduino...",
  uploadSketch: "Lade Sketch auf den Arduino",
  verifyingSketch: "Prüfe den Sketch...",
  verifySketch: "Prüfe den Sketch",
  openingSketch: "Sketch wird in der Arduino IDE geöffnet...",
  openSketch: "Öffne Sketch in IDE",
  notImplemented: "Die Funktion wurde noch nicht implementiert",
  /* Prompts */
  ok: "OK",
  okay: "Ok",
  cancel: "Löschen",
  return: "Rückgabe",
  /* Cards */
  arduinoSourceCode: "Arduino Quellcode",
  blocksXml: "XML Blöcke",
  /* Toolbox Categories*/
  catLogic: "Logik",
  catLoops: "Schleifen",
  catMath: "Mathematik",
  catText: "Text",
  catVariables: "Variablen",
  catFunctions: "Funktionen",
  catInputOutput: "Eingang/Ausgang",
  catTime: "Zeit",
  catAudio: "Audio",
  catMotors: "Motoren",
  catComms: "Kommunikation",
  senseBox_output: "senseBox Ausgabe",
  senseBox_basics: "senseBox Grundlagen",
  senseBox_Sensor: "senseBox Sensoren",
};
