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
  


  plugin.start = function(props) {


  }



  plugin.stop = function() {
    
  }

  plugin.registerWithRouter = function(router) {
    router.gett("/vesseldata", (req, res) => {
      
        res.send("Hello World")
      
    })
  } 

  plugin.id = "minimumvesseldatarest"
  plugin.name = "Minimal vessel data provider"
  plugin.description = "Provides one endpoint for receiving a minimilistic data response containing most important vessel data"


  plugin.schema = {
    "title": "Simulator",
    "type": "object",
    "items": {
      type: "array",
      items: {
        type: "object",
        properties:
        {
          pathToValue: {
            type: "string",
            title: "Path to value",
            default: "environment.wind.angleApparent.value"
          },
          keyInResponse: {
            type: "string",
            title: "Name for key in response",
            default: "windAngleApparent"
          }
        }
      }
    }
  }

  return plugin;
}


function createStateDelta(state)
{

  var delta = {
        updates: [
          {
            "$source": "apsimulator",
            values: [
              {
                path: "steering.autopilot.state",
                value: state
              },
              {
                path: "steering.autopilot.target.windAngleApparent",
                value: 0.0
              },
              {
                path: "steering.autopilot.target.headingTrue",
                value: 0.0
              },
              {
                path: "steering.autopilot.target.headingMagnetic",
                value: 0.0
              }
            ]
          }
        ]
      }

  return delta
}
















