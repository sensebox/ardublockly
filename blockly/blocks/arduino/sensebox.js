
'use strict';

goog.provide('Blockly.Blocks.sensebox');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 "SenseBox green"
 */
 Blockly.Blocks.sensebox.HUE = 120;


Blockly.Blocks['sensebox_sensor_lux'] = {
  init: function() {
    this.setColour(Blockly.Blocks.sensebox.HUE);
    this.appendDummyInput()
        .appendField("Helligkeitssensor");
    this.setOutput(true, "Number");
    this.setTooltip('Dieser Sensor misst die Helligkeit in Lux');
    this.setHelpUrl('https://edu.books.sensebox.de/de/projekte/diy_umweltstation/experimente_mit_Licht.html');
  }
};

Blockly.Blocks['sensebox_sensor_uv'] = {
  init: function() {
    this.setColour(Blockly.Blocks.sensebox.HUE);
    this.appendDummyInput()
        .appendField("UV-Licht Sensor");
    this.setOutput(true, "Number");
    this.setTooltip('Dieser Sensor misst die UV Einstrahlung');
    this.setHelpUrl('https://edu.books.sensebox.de/de/projekte/diy_umweltstation/uv_sensor.html');
  }
};
Blockly.Blocks['sensebox_sensor_ir_dist'] = {
  init: function() {
    this.setColour(Blockly.Blocks.sensebox.HUE);
    this.appendDummyInput()
        .appendField("Infrarot-Abstandssensor")
        .appendField("PIN:")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins), "PIN")
    this.setOutput(true, "Number");
    this.setTooltip('Dieser Sensor misst die Entfernung zu Hindernissen mit infrarotem Licht');
    this.setHelpUrl('https://edu.books.sensebox.de/de/projekte/irsensor.html');
  }
};

Blockly.Blocks['sensebox_sensor_temp_hum'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Temperatur und Luftfeuchte Sensor");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Messwert:")
        .appendField(new Blockly.FieldDropdown([["Temperatur","Temp"], ["Luffeuchtigkeit","Humi"]]), "NAME");
    this.setOutput(true, "Number");
    this.setColour(Blockly.Blocks.sensebox.HUE);
    this.setTooltip('Dieser Sensor misst je nach Wahl die Temperatur oder die Luftf euchtigkeit');
    this.setHelpUrl('https://edu.books.sensebox.de/de/projekte/diy_umweltstation/temp_und_luftfeuchte.html');
  }
};

Blockly.Blocks['sensebox_sensor_pressure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Luftdruck Sensor");
       this.setOutput(true, "Number");
    this.setColour(Blockly.Blocks.sensebox.HUE);
    this.setTooltip('Dieser Sensor misst den Luftdruck');
    this.setHelpUrl('https://edu.books.sensebox.de/de/projekte/diy_umweltstation/luftdruck.html');
  }
};


Blockly.Blocks['sensebox_sensor_ultrasonic_ranger'] = {
  init: function() {
    this.setColour(Blockly.Blocks.sensebox.HUE);
    this.appendDummyInput()
	      .appendField("Ultraschall Abstandssensor")
    this.appendDummyInput()
        .appendField("PIN_RX:")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "PIN_RX")
        .appendField("PIN_TX:")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "PIN_TX")
    this.setOutput(true, 'Number');
    this.setTooltip('Dieser Sensor mist durch Ultraschall die Entfernung zu einem Objekt.');
    this.setHelpUrl('https://edu.books.sensebox.de/de/projekte/verkehrszaehler.html');
  }
};
Blockly.Blocks['sensebox_sensor_sound'] = {
  init: function() {
    this.setColour(Blockly.Blocks.sensebox.HUE);
    this.appendDummyInput()
        .appendField("Geräuschsensor")
        .appendField("PIN:")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins), "PIN")
    this.setOutput(true, "Number");
    this.setHelpUrl('https://edu.books.sensebox.de/de/projekte/mikrofon.html');
    this.setTooltip('Dieser Sensor mist den Geräuschpegel.');
  }
};
/*
----------------------------------Shields--------------------------------------------------
*/
Blockly.Blocks['sensebox_time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Zeitstempel")
        .appendField("Format:")
        .appendField(new Blockly.FieldDropdown([["jjjj.mm.tt hh:mm:ss", "jjjj.mm.tt hh:mm:ss"], ["jjjj.mm.tt", "jjjj.mm.tt"], ["hh:mm:ss", "hh:mm:ss"], ["hh:mm", "hh:mm"]]), "FORMAT");
    this.setOutput(true, null);
    this.setColour(Blockly.Blocks.sensebox.HUE);
    this.setTooltip('Gibt ein Datum aus');
    this.setHelpUrl('https://edu.books.sensebox.de/de/grundlagen/uhr.html');
  }
};

Blockly.Blocks['sensebox_shield_ethernet'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Ethernet Shield");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.sensebox.HUE);
    this.setTooltip('Dieser Block läd über ein Netzwerkkable Daten ins Internet');
    this.setHelpUrl('https://edu.books.sensebox.de/de/grundlagen/osem_upload.html');
  }
};

Blockly.Blocks['sensebox_shield_wifi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("WLAN Shield");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("Password")
        .appendField(new Blockly.FieldTextInput("PW"), "pw");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("Netzwerkid")
        .appendField(new Blockly.FieldTextInput("NET_ID"), "net_id");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.sensebox.HUE);
    this.setTooltip('Dieser Block läd über ein WLAN Daten ins Internet');
    this.setHelpUrl('https://edu.books.sensebox.de/de/grundlagen/osem_upload.html');
  }
};


/*
----------------------------------Basics--------------------------------------------------
*/

Blockly.Blocks['sensebox_poti'] = {
  init: function() {
    this.setColour(Blockly.Blocks.sensebox.HUE);
    this.appendDummyInput()
        .appendField("Potenziometer")
        .appendField("PIN:")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins), "PIN")
    this.setOutput(true, "Number");
    this.setTooltip('Mit einem Potenziometer kann man einen Widerstand beliebig einstellen.');
  }
};

Blockly.Blocks['sensebox_foto'] = {
  init: function() {
    this.setColour(Blockly.Blocks.sensebox.HUE);
    this.appendDummyInput()
        .appendField("Fotowiderstand")
        .appendField("PIN:")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.analogPins), "PIN")
    this.setOutput(true, "Number");
    this.setTooltip('Dieser Block verändert seinen Widerstand je nach Helligkeit');
    this.setHelpUrl('https://edu.books.sensebox.de/de/projekte/ldr.html');
  }
};
Blockly.Blocks['sensebox_rgb_led'] = {
  init: function() {
    this.setColour(Blockly.Blocks.sensebox.HUE);
    this.appendDummyInput()
        .appendField("RGB Led")
        .appendField("PIN:")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "PIN")
        this.appendValueInput("RED", 'Number')
            .appendField("Rot");
        this.appendValueInput("GREEN", 'Number')
              .appendField("Grün");
        this.appendValueInput("BLUE", 'Number')
              .appendField("Blau");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Jede Farbe kann einen Wert zwischen 0 und 255 annehmen.');
    this.setHelpUrl('https://edu.books.sensebox.de/de/projekte/rgb_led.html');
  }
};

Blockly.Blocks['sensebox_led'] = {
    init: function() {
    this.setColour(Blockly.Blocks.sensebox.HUE);
    this.appendDummyInput()
        .appendField("LED")
        .appendField("PIN:")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "PIN")
        .appendField("Status:")
        .appendField(new Blockly.FieldDropdown([["EIN", "HIGH"], ["AUS", "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Dieser Block steuert eine LED');
    this.setHelpUrl('https://edu.books.sensebox.de/de/projekte/ampelButton.html');
  }
};

Blockly.Blocks['sensebox_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Drucktaster")
        .appendField("PIN:")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "PIN");
    this.setOutput(true, 'Boolean');
    this.setColour(Blockly.Blocks.sensebox.HUE);
    this.setTooltip('Ein Schalter, der genutzt werden kann um LED einzuschalten');
    this.setHelpUrl('https://edu.books.sensebox.de/de/projekte/ampelButton.html');
  }
};
Blockly.Blocks['sensebox_piezo_buzzer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Piezo Piepser")
        .appendField("PIN:")
        .appendField(new Blockly.FieldDropdown(Blockly.Arduino.Boards.selected.digitalPins), "PIN")
        .appendField("Status:")
        .appendField(new Blockly.FieldDropdown([["EIN", "HIGH"], ["AUS", "LOW"]]), "STAT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.sensebox.HUE);
    this.setTooltip('Gibt einen Ton aus');
    this.setHelpUrl('https://edu.books.sensebox.de/de/projekte/summer.html');
  }
};
/*
----------------------------------Ausgabe--------------------------------------------------
*/
Blockly.Blocks['sensebox_serial_print'] = {
  init: function() {
    this.appendValueInput("TEXT")
       .setCheck(null)
       .appendField("Auf Kommandozeile ausgeben");
    this.appendDummyInput("CheckboxText")
      .appendField("Zeilenumbruch")
       .appendField(new Blockly.FieldCheckbox("TRUE"), "LINEBREAK");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.sensebox.HUE);
    this.setTooltip('Dieser Block gibt Text über den seriellen Monitor aus');
    this.setHelpUrl('https://edu.books.sensebox.de/de/grundlagen/der_serielle_monitor.html');
  }
};

Blockly.Blocks['sensebox_print_osm'] = {
  init: function() {
    this.appendDummyInput()
       .appendField("Auf OpensenseMap ausgeben");
    this.appendDummyInput()
       .appendField("(WiFi oder Ethernetshield notwendig)");
    this.appendValueInput("TEXT")
       .setCheck(null)
       .appendField("ID")
       .appendField(new Blockly.FieldTextInput("ID"), "id");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.sensebox.HUE);
    this.setTooltip('');
    this.setHelpUrl('https://edu.books.sensebox.de/de/grundlagen/osem_upload.html');
  }
};

Blockly.Blocks['sensebox_safe_to_sd'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck(null)
        .appendField("Auf SD Karte speichern");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_LEFT)
        .appendField("Dateiname:")
        .appendField(new Blockly.FieldTextInput("TXT"), "txt");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.sensebox.HUE);
    this.setTooltip('Dieser Block speichert Daten auf einer SD Karte.');
    this.setHelpUrl('https://edu.books.sensebox.de/de/grundlagen/datenlogger.html');
  }
};
