#include <SenseBox.h>

HDC100X hdc(0x43);


void setup() {
  hdc.begin();

  //Setup Serial Print
 Serial.begin(9600);

}

void loop() {
  if (0 == hdc.getTemp()) {
    Serial.println(hdc.getHum());
  }

}