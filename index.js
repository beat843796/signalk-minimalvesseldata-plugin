/*
 * Copyright 2019 Clemens Hammerl <beat84@me.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


module.exports = function(app) {
  const plugin = {}
  var values
  var vesselData = []
  plugin.start = function(props) {

    values = props.items

    

  }



  plugin.stop = function() {
    
  }

  plugin.registerWithRouter = function(router) {
    router.get("/vesseldata", (req, res) => {


      
        var speedThroughWater = app.getSelfPath("navigation.speedThroughWater.value")
        var trip = app.getSelfPath("navigation.trip.value")
        var log = app.getSelfPath("navigation.log.value")
        var speedOverGround = app.getSelfPath("navigation.speedOverGround.value")
        var courseOverGroundTrue = app.getSelfPath("navigation.courseOverGroundTrue.value")
        var headingTrue = app.getSelfPath("navigation.headingTrue.value")
        var magneticVariation = app.getSelfPath("navigation.magneticVariation.value")
        var waterTemperature = app.getSelfPath("environment.water.temperature.value")
        var windSpeedTrue = app.getSelfPath("environment.wind.speedTrue.value")
        var windSpeedApparent = app.getSelfPath("environment.wind.speedApparent.value")
        var windAngleApparent = app.getSelfPath("environment.wind.angleApparent.value")
        var depthBelowTransducer = app.getSelfPath("environment.depth.belowTransducer.value")
        var depthTransducerToKeel = app.getSelfPath("environment.depth.transducerToKeel.value")
        var depthBelowKeel = app.getSelfPath("environment.depth.belowKeel.value")
        var rudderAngle = app.getSelfPath("steering.rudderAngle.value")
        var autopilotTargetWindAngleApparent = app.getSelfPath("steering.autopilot.target.windAngleApparent.value")
        var autopilotTargetHeadingTrue = app.getSelfPath("steering.autopilot.target.headingTrue.value")
        var autopilotTargetHeadingMagnetic = app.getSelfPath("steering.autopilot.target.headingMagnetic.value")
        var autopilotState = app.getSelfPath("steering.autopilot.state.value")

        var nothere = app.getSelfPath("steering.autopilotasdasd.state.value")

        var vesseldata = {
          "speedThroughWater" : speedThroughWater,
          "trip" : trip,
          "log" : log,
          "speedOverGround" : speedOverGround,
          "courseOverGroundTrue" : courseOverGroundTrue,
          "headingTrue" : headingTrue,
          "magneticVariation" : magneticVariation,
          "waterTemperature" : waterTemperature,
          "windSpeedApparent" : windSpeedApparent,
          "windAngleApparent" : windAngleApparent,
          "depthBelowTransducer" : depthBelowTransducer,
          "depthTransducerToKeel" : depthTransducerToKeel,
          "depthBelowKeel" : depthBelowKeel,
          "rudderAngle" : rudderAngle,
          "autopilotTargetWindAngleApparent" : autopilotTargetWindAngleApparent,
          "autopilotTargetHeadingTrue" : autopilotTargetHeadingTrue,
          "autopilotTargetHeadingMagnetic" : autopilotTargetHeadingMagnetic,
          "autopilotState" : autopilotState,
          "windSpeedTrue" : windSpeedTrue
        }


        res.send(vesseldata)
      
    })
  } 

  plugin.id = "minimumvesseldatarest"
  plugin.name = "Minimal vessel data provider"
  plugin.description = "Provides one endpoint for receiving a minimilistic data response containing most important vessel data"


  plugin.schema = {
    "title": "Provide path to value and keyname for response",
    "type": "object",
    "properties": {
      
    }
  }

  return plugin;
}


















