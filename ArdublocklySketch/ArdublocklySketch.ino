#include <SenseBox.h>

HDC100X hdc;

void setup() {
  //Setup Serial Print
  Serial.begin(9600);

  hdc.begin();

}

void loop() {
  Serial.print("Temperatur:");
  Serial.println(hdc.getTemp());
  delay(200);

}