#include "SenseBox.h"
OpenSenseMap shield(true,"ingress.opensensemap.org",80);


void setup() {
  Serial.begin(9600);
  Serial.println("Test1");
  shield.beginWiFi("SSID","PASSWORD"); 
}

void loop() {
   shield.postFloatValue(34.5,"592458a651d34600119b4b99","592458a651d34600119b4b98");
   //shield.postFloatValue(lux_sensor.getLux(),"592458a651d34600119b4b9c","592458a651d34600119b4b98");
   //shield.postFloatValue(uv_sensor.getUV(),"592458a651d34600119b4b9d","592458a651d34600119b4b98");
   //shield.postFloatValue(bmp_sensor.getPressure(),"592458a651d34600119b4b9b","592458a651d34600119b4b98");
   //shield.postFloatValue(hdc.getHumi(),"592458a651d34600119b4b9a","592458a651d34600119b4b98");
 
  delay(500);
}
