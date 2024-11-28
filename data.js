var APP_DATA = {
  "scenes": [
    {
      "id": "0-dining-area",
      "name": "dining area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.7588007991103058,
        "pitch": 0.04866171732065361,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -1.9691885600622019,
          "pitch": 0.11897928855641382,
          "rotation": 1.5707963267948966,
          "target": "3-wash-unit"
        },
        {
          "yaw": -0.19106794996413434,
          "pitch": 0.28714623944044604,
          "rotation": 0,
          "target": "1-break-fast-uit-area"
        },
        {
          "yaw": -0.37945513157480804,
          "pitch": 0.10003058271739285,
          "rotation": 5.497787143782138,
          "target": "2-kitchen-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-break-fast-uit-area",
      "name": "break fast uit area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.1965944899553378,
          "pitch": 0.25534350064210365,
          "rotation": 3.141592653589793,
          "target": "2-kitchen-area"
        },
        {
          "yaw": -2.2077385881881586,
          "pitch": 0.19068643921810136,
          "rotation": 4.71238898038469,
          "target": "0-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen-area",
      "name": "kitchen area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.07574523475769,
          "pitch": 0.1603729889141512,
          "rotation": 3.141592653589793,
          "target": "1-break-fast-uit-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-wash-unit",
      "name": "wash unit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0664108019761187,
          "pitch": 0.20262475841027694,
          "rotation": 10.210176124166829,
          "target": "0-dining-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
