var APP_DATA = {
  "scenes": [
    {
      "id": "scene-01-overview",
      "name": "1. Toàn cảnh mặt bằng dinh thự Hoàng A Tưởng",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 1520 }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.1
      },
      "linkHotspots": [
        {
          "yaw": 2.8,
          "pitch": 0.15,
          "rotation": 0,
          "target": "scene-02-east"
        }
      ],
      "infoHotspots": []
    },

    {
      "id": "scene-02-east",
      "name": "2. Dinh thự nhìn từ hướng Đông Nam",
      "levels": [
        { "tileSize": 256, "size": 256, "fallbackOnly": true },
        { "tileSize": 512, "size": 512 },
        { "tileSize": 512, "size": 1024 },
        { "tileSize": 512, "size": 1520 }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.1
      },
      "linkHotspots": [
        {
          "yaw": -2.8,
          "pitch": 0.15,
          "rotation": 0,
          "target": "scene-01-overview"
        }
      ],
      "infoHotspots": []
    }
  ],
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
