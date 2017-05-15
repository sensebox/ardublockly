#include <SenseBox.h>

RV8523 rtc;
VEML6070 uv_sensor;

TSL45315 lux_sensor;

HDC100X hdc;

BMP280 bmp_sensor;

#include <Adafruit_NeoPixel.h>
 Adafruit_NeoPixel rgb_led_8 = Adafruit_NeoPixel(1,8,NEO_GRB + NEO_KHZ800);


void setup() {
  //Setup Serial Print
  Serial.begin(9600);

  rtc.set(10, 24, 8, 20, 4, 2016); // 08:24:10 20.04.2016
  rtc.begin();
  uv_sensor.begin();
  bmp_sensor.begin();
  hdc.begin();
  rgb_led_8.begin();
}

void loop() {
  Serial.print((String("" + (String) rtc.getYear() + "." + (String) rtc.getMonth() + "." + (String) rtc.getDay() + "  " + (String) rtc.getHour() + ":" + (String) rtc.getMin()+ ":" + (String) rtc.getSec()) + String("UV")));
  Serial.println(uv_sensor.getUV());
  Serial.print((String("" + (String) rtc.getHour() + ":" + (String) rtc.getMin() + ":" + (String) rtc.getSec()) + String("Lux")));
  Serial.println(lux_sensor.getLux());
  Serial.print((String("" + (String) rtc.getHour() + ":" + (String) rtc.getMin() + ":" + (String) rtc.getSec()) + String("Temperatur")));
  Serial.println(hdc.getTemp());
  Serial.print((String("" + (String) rtc.getYear() + "." + (String) rtc.getMonth() + "." + (String) rtc.getDay() + "  " + (String) rtc.getHour() + ":" + (String) rtc.getMin()+ ":" + (String) rtc.getSec()) + String("Luftfeuchte")));
  Serial.println(hdc.getHumi());
  Serial.print((String("" + (String) rtc.getYear() + "." + (String) rtc.getMonth(); + "." + (String) rtc.getDay()) + String("Luftdruck")));
  Serial.println(bmp_sensor.getPressure());
  rgb_led_8.setPixelColor(0,rgb_led_8.Color(255,0,613));
  rgb_led_8.show();
}
