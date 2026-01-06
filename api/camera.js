const express = require('express');

const router = express.Router();
const cameraData = [
  {
    name: "Sony Alpha 7V",
    model: "ILCE-7M5",
    price: 3000,
    buildYear: 2025,
    buildMonth: 12,
    lightSensivity: { min: 10, max: 280 },
    operatingDistance: { min: 12, max: 250 }
  },
  {
    name: "Canon EOS R5 II",
    model: "R5 Mark II",
    price: 3899,
    buildYear: 2024,
    buildMonth: 8,
    lightSensivity: { min: 20, max: 250 },
    operatingDistance: { min: 15, max: 300 }
  },
  {
    name: "Nikon Z6 III",
    model: "Z6 III",
    price: 2499,
    buildYear: 2024,
    buildMonth: 6,
    lightSensivity: { min: 15, max: 290 },
    operatingDistance: { min: 10, max: 240 }
  },
  {
    name: "Fujifilm X100VI",
    model: "X100VI",
    price: 1599,
    buildYear: 2024,
    buildMonth: 2,
    lightSensivity: { min: 25, max: 180 },
    operatingDistance: { min: 10, max: 150 }
  },
  {
    name: "Sony Alpha 1 II",
    model: "ILCE-1M2",
    price: 6500,
    buildYear: 2025,
    buildMonth: 11,
    lightSensivity: { min: 10, max: 300 },
    operatingDistance: { min: 20, max: 280 }
  },
  {
    name: "Nikon Z8",
    model: "Z8",
    price: 3999,
    buildYear: 2023,
    buildMonth: 5,
    lightSensivity: { min: 15, max: 260 },
    operatingDistance: { min: 15, max: 290 }
  },
  {
    name: "Canon EOS R1",
    model: "R1",
    price: 6299,
    buildYear: 2024,
    buildMonth: 7,
    lightSensivity: { min: 10, max: 300 },
    operatingDistance: { min: 25, max: 300 }
  },
  {
    name: "Panasonic Lumix S5 II",
    model: "S5M2",
    price: 1999,
    buildYear: 2023,
    buildMonth: 1,
    lightSensivity: { min: 30, max: 240 },
    operatingDistance: { min: 12, max: 220 }
  },
  {
    name: "Leica Q3",
    model: "Q3",
    price: 5995,
    buildYear: 2023,
    buildMonth: 5,
    lightSensivity: { min: 40, max: 210 },
    operatingDistance: { min: 10, max: 180 }
  },
  {
    name: "Sony ZV-E10 II",
    model: "ZV-E10M2",
    price: 999,
    buildYear: 2024,
    buildMonth: 7,
    lightSensivity: { min: 50, max: 190 },
    operatingDistance: { min: 18, max: 140 }
  },
  {
    name: "Nikon Z50 II",
    model: "Z50 II",
    price: 950,
    buildYear: 2025,
    buildMonth: 10,
    lightSensivity: { min: 45, max: 170 },
    operatingDistance: { min: 10, max: 130 }
  },
  {
    name: "GoPro HERO 14 Black",
    model: "CHDHX-141",
    price: 449,
    buildYear: 2025,
    buildMonth: 9,
    lightSensivity: { min: 80, max: 120 },
    operatingDistance: { min: 10, max: 80 }
  },
  {
    name: "Fujifilm X-T5",
    model: "X-T5",
    price: 1699,
    buildYear: 2022,
    buildMonth: 11,
    lightSensivity: { min: 30, max: 230 },
    operatingDistance: { min: 15, max: 210 }
  },
  {
    name: "DJI Osmo Pocket 3",
    model: "Pocket 3",
    price: 519,
    buildYear: 2023,
    buildMonth: 10,
    lightSensivity: { min: 60, max: 150 },
    operatingDistance: { min: 10, max: 60 }
  },
  {
    name: "Insta360 X4",
    model: "X4",
    price: 499,
    buildYear: 2024,
    buildMonth: 4,
    lightSensivity: { min: 70, max: 140 },
    operatingDistance: { min: 10, max: 50 }
  },
  {
    name: "Sony Alpha 9 III",
    model: "ILCE-9M3",
    price: 5999,
    buildYear: 2023,
    buildMonth: 11,
    lightSensivity: { min: 10, max: 270 },
    operatingDistance: { min: 20, max: 295 }
  },
  {
    name: "Panasonic Lumix GH7",
    model: "GH7",
    price: 2199,
    buildYear: 2024,
    buildMonth: 6,
    lightSensivity: { min: 35, max: 200 },
    operatingDistance: { min: 12, max: 190 }
  },
  {
    name: "Canon EOS R8",
    model: "R8",
    price: 1499,
    buildYear: 2023,
    buildMonth: 4,
    lightSensivity: { min: 40, max: 260 },
    operatingDistance: { min: 14, max: 230 }
  },
  {
    name: "Fujifilm GFX 100 II",
    model: "GFX 100 II",
    price: 7499,
    buildYear: 2023,
    buildMonth: 9,
    lightSensivity: { min: 15, max: 220 },
    operatingDistance: { min: 30, max: 260 }
  },
  {
    name: "Sony Alpha 6700",
    model: "ILCE-6700",
    price: 1399,
    buildYear: 2023,
    buildMonth: 7,
    lightSensivity: { min: 50, max: 210 },
    operatingDistance: { min: 15, max: 180 }
  },
  {
    name: "Nikon Z fc",
    model: "Z fc",
    price: 959,
    buildYear: 2021,
    buildMonth: 6,
    lightSensivity: { min: 60, max: 180 },
    operatingDistance: { min: 10, max: 120 }
  },
  {
    name: "Leica M11",
    model: "M11",
    price: 8995,
    buildYear: 2022,
    buildMonth: 1,
    lightSensivity: { min: 25, max: 190 },
    operatingDistance: { min: 40, max: 280 }
  },
  {
    name: "OM System OM-1 II",
    model: "OM-1 II",
    price: 2399,
    buildYear: 2024,
    buildMonth: 1,
    lightSensivity: { min: 30, max: 240 },
    operatingDistance: { min: 10, max: 200 }
  },
  {
    name: "Blackmagic Cinema 6K",
    model: "BMCC6K",
    price: 2595,
    buildYear: 2023,
    buildMonth: 9,
    lightSensivity: { min: 45, max: 250 },
    operatingDistance: { min: 35, max: 300 }
  },
  {
    name: "Sony ZV-1 II",
    model: "ZV-1M2",
    price: 899,
    buildYear: 2023,
    buildMonth: 5,
    lightSensivity: { min: 80, max: 150 },
    operatingDistance: { min: 10, max: 90 }
  },
  {
    name: "Canon EOS R100",
    model: "R100",
    price: 479,
    buildYear: 2023,
    buildMonth: 5,
    lightSensivity: { min: 100, max: 160 },
    operatingDistance: { min: 15, max: 100 }
  },
  {
    name: "Nikon Z9",
    model: "Z9",
    price: 5499,
    buildYear: 2021,
    buildMonth: 12,
    lightSensivity: { min: 10, max: 280 },
    operatingDistance: { min: 20, max: 300 }
  },
  {
    name: "Canon EOS R6 II",
    model: "R6 Mark II",
    price: 2499,
    buildYear: 2022,
    buildMonth: 11,
    lightSensivity: { min: 30, max: 270 },
    operatingDistance: { min: 15, max: 240 }
  },
  {
    name: "Fujifilm X-H2S",
    model: "X-H2S",
    price: 2499,
    buildYear: 2022,
    buildMonth: 5,
    lightSensivity: { min: 20, max: 250 },
    operatingDistance: { min: 12, max: 220 }
  },
  {
    name: "Hikvision Pro AI",
    model: "DS-2CD2T",
    price: 180,
    buildYear: 2025,
    buildMonth: 11,
    lightSensivity: { min: 100, max: 200 },
    operatingDistance: { min: 50, max: 280 }
  }
];


router.get('/', (req, res) => {
    res.send(cameraData);
});

module.exports = router;