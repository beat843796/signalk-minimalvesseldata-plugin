# signalk-minimalvesseldata-plugin
Provides an endpoint for retrieving vessel data in a minimalistic response to save memory for wearable devices (e.g. a garmin smartwatch)

## Endpoint

### GET plugins/minimumvesseldatarest/vesseldata

Make sure you have set a valid Authorization token ("JWT asdsadaskld.....") in http request header

Response with provided data:

```javascript
{
    "speedThroughWater": 3.21,
    "log": 17441766,
    "speedOverGround": 3.51,
    "courseOverGroundTrue": 3.4523,
    "headingTrue": 3.571,
    "magneticVariation": 0.1414,
    "waterTemperature": 313.15,
    "windSpeedApparent": 6.95,
    "windAngleApparent": 0.7683,
    "depthBelowTransducer": 20.28,
    "depthTransducerToKeel": -0.001,
    "depthBelowKeel": 20.279,
    "rudderAngle": -0.24408000000054014,
    "autopilotTargetWindAngleApparent": -0.23091999999945978,
    "autopilotTargetHeadingTrue": -0.3848666666657663,
    "autopilotTargetHeadingMagnetic": -0.30789333333261304,
    "autopilotState": "auto"
}
```
