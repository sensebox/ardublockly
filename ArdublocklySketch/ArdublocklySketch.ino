#include <SenseBox.h>

RV8523 rtc;
HDC100X hdc;
VEML6070 uv_sensor;
TSL45315 lux_sensor;

void setup() {
  //Setup Serial Print
  Serial.begin(9600);

   rtc.begin();
 rtc.setTime(__DATE__,__TIME__);
  hdc.begin();

  uv_sensor.begin();
  lux_sensor.begin();
}

void loop() {
  Serial.print("Messung vom:  ");
  Serial.println("" + (String) rtc.getYear() + "." + (String) rtc.getMonth() + "." + (String) rtc.getDay() + "  " + (String) rtc.getHour() + ":" + (String) rtc.getMin()+ ":" + (String) rtc.getSec());
  Serial.print("Temperatur:  ");
  Serial.println(hdc.getTemp());
  Serial.print("Uv Wert:  ");
  Serial.println(uv_sensor.getUV());
  Serial.print("Helligkeit:  ");
  Serial.println(lux_sensor.getLux());
  delay(1000);

}