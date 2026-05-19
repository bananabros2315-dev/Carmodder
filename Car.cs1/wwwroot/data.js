export const CAR_SEGMENTS = [
  { id: "all", label: "All Cars", icon: "🚗" },
  { id: "muscle", label: "American Muscle", icon: "🇺🇸" },
  { id: "jdm", label: "JDM & Sport Compact", icon: "🇯🇵" },
  { id: "euro", label: "European", icon: "🇪🇺" },
  { id: "truck-suv", label: "Trucks & SUVs", icon: "🛻" },
  { id: "luxury", label: "Luxury & GT", icon: "✨" },
  { id: "ev", label: "Electric", icon: "⚡" },
];

export const CARS = [
  // American muscle
  { id: "mustang-gt", segment: "muscle", name: "Ford Mustang GT", year: 2024, engine: "5.0L Coyote V8", stockHp: 480, stockTorque: 420, stockZeroToSixty: 4.1, image: "🐎" },
  { id: "charger-hellcat", segment: "muscle", name: "Dodge Charger Hellcat", year: 2024, engine: "6.2L Supercharged HEMI", stockHp: 717, stockTorque: 650, stockZeroToSixty: 3.4, image: "😈" },
  { id: "camaro-ss", segment: "muscle", name: "Chevrolet Camaro SS", year: 2024, engine: "6.2L LT1 V8", stockHp: 455, stockTorque: 455, stockZeroToSixty: 3.9, image: "🦅" },
  { id: "challenger-scat", segment: "muscle", name: "Dodge Challenger Scat Pack", year: 2024, engine: "6.4L HEMI V8", stockHp: 485, stockTorque: 475, stockZeroToSixty: 4.2, image: "👊" },
  { id: "corvette-stingray", segment: "muscle", name: "Chevrolet Corvette Stingray", year: 2024, engine: "6.2L LT2 V8", stockHp: 495, stockTorque: 470, stockZeroToSixty: 2.9, image: "🏁" },

  // JDM & sport compact
  { id: "civic-type-r", segment: "jdm", name: "Honda Civic Type R", year: 2024, engine: "2.0L Turbo I4", stockHp: 315, stockTorque: 310, stockZeroToSixty: 4.9, image: "🔴" },
  { id: "wrx", segment: "jdm", name: "Subaru WRX", year: 2024, engine: "2.4L Turbo Boxer", stockHp: 271, stockTorque: 258, stockZeroToSixty: 5.4, image: "🌲" },
  { id: "supra", segment: "jdm", name: "Toyota GR Supra", year: 2024, engine: "3.0L Turbo I6", stockHp: 382, stockTorque: 368, stockZeroToSixty: 3.9, image: "🐉" },
  { id: "nissan-z", segment: "jdm", name: "Nissan Z", year: 2024, engine: "3.0L Twin-Turbo V6", stockHp: 400, stockTorque: 350, stockZeroToSixty: 4.5, image: "⚡" },
  { id: "miata", segment: "jdm", name: "Mazda MX-5 Miata", year: 2024, engine: "2.0L Skyactiv I4", stockHp: 181, stockTorque: 151, stockZeroToSixty: 5.7, image: "🌀" },
  { id: "brz", segment: "jdm", name: "Toyota GR86", year: 2024, engine: "2.4L Boxer", stockHp: 228, stockTorque: 184, stockZeroToSixty: 5.4, image: "🎯" },

  // European
  { id: "bmw-m3", segment: "euro", name: "BMW M3 Competition", year: 2024, engine: "3.0L Twin-Turbo I6", stockHp: 503, stockTorque: 479, stockZeroToSixty: 3.8, image: "💙" },
  { id: "gti", segment: "euro", name: "Volkswagen Golf GTI", year: 2024, engine: "2.0L Turbo I4", stockHp: 241, stockTorque: 273, stockZeroToSixty: 5.8, image: "🟢" },
  { id: "amg-c43", segment: "euro", name: "Mercedes-AMG C43", year: 2024, engine: "2.0L Turbo I4 + EQ Boost", stockHp: 402, stockTorque: 369, stockZeroToSixty: 4.5, image: "⭐" },
  { id: "rs3", segment: "euro", name: "Audi RS3", year: 2024, engine: "2.5L Turbo I5", stockHp: 401, stockTorque: 369, stockZeroToSixty: 3.6, image: "🔷" },
  { id: "911-carrera", segment: "euro", name: "Porsche 911 Carrera", year: 2024, engine: "3.0L Twin-Turbo Flat-6", stockHp: 379, stockTorque: 331, stockZeroToSixty: 3.8, image: "🐸" },
  { id: "focus-rs", segment: "euro", name: "Ford Focus RS", year: 2018, engine: "2.3L Turbo I4", stockHp: 350, stockTorque: 350, stockZeroToSixty: 4.6, image: "🔵" },

  // Trucks & SUVs
  { id: "raptor", segment: "truck-suv", name: "Ford F-150 Raptor", year: 2024, engine: "3.5L EcoBoost V6", stockHp: 450, stockTorque: 510, stockZeroToSixty: 5.2, image: "🛻" },
  { id: "wrangler-rubicon", segment: "truck-suv", name: "Jeep Wrangler Rubicon", year: 2024, engine: "3.6L Pentastar V6", stockHp: 285, stockTorque: 260, stockZeroToSixty: 6.8, image: "🪨" },
  { id: "4runner-trd", segment: "truck-suv", name: "Toyota 4Runner TRD Pro", year: 2024, engine: "4.0L V6", stockHp: 270, stockTorque: 278, stockZeroToSixty: 7.5, image: "🏔️" },
  { id: "tahoe-rst", segment: "truck-suv", name: "Chevrolet Tahoe RST", year: 2024, engine: "6.2L V8", stockHp: 420, stockTorque: 460, stockZeroToSixty: 5.8, image: "🚙" },

  // Luxury & GT
  { id: "lc500", segment: "luxury", name: "Lexus LC 500", year: 2024, engine: "5.0L V8", stockHp: 471, stockTorque: 398, stockZeroToSixty: 4.4, image: "💎" },
  { id: "ct5-v", segment: "luxury", name: "Cadillac CT5-V Blackwing", year: 2024, engine: "6.2L Supercharged V8", stockHp: 668, stockTorque: 659, stockZeroToSixty: 3.4, image: "🖤" },
  { id: "m5", segment: "luxury", name: "BMW M5 Competition", year: 2024, engine: "4.4L Twin-Turbo V8", stockHp: 617, stockTorque: 553, stockZeroToSixty: 3.1, image: "👑" },

  // Electric
  { id: "model-3-perf", segment: "ev", name: "Tesla Model 3 Performance", year: 2024, engine: "Dual Motor AWD", stockHp: 510, stockTorque: 487, stockZeroToSixty: 3.1, image: "🔋" },
  { id: "mach-e-gt", segment: "ev", name: "Ford Mustang Mach-E GT", year: 2024, engine: "Dual Motor AWD", stockHp: 480, stockTorque: 600, stockZeroToSixty: 3.5, image: "🌩️" },
  { id: "ioniq5-n", segment: "ev", name: "Hyundai Ioniq 5 N", year: 2025, engine: "Dual Motor AWD", stockHp: 601, stockTorque: 545, stockZeroToSixty: 3.2, image: "💠" },
];

export const CATEGORIES = [
  { id: "exhaust", label: "Exhaust", icon: "🔊" },
  { id: "intake", label: "Intake", icon: "💨" },
  { id: "forced", label: "Turbo / Super", icon: "⚙️" },
  { id: "wheels", label: "Wheels", icon: "🛞" },
  { id: "suspension", label: "Suspension", icon: "📐" },
  { id: "ecu", label: "ECU / Tune", icon: "💻" },
  { id: "brakes", label: "Brakes", icon: "🛑" },
  { id: "aero", label: "Aero", icon: "🪽" },
  { id: "drivetrain", label: "Drivetrain", icon: "🔗" },
  { id: "cooling", label: "Cooling", icon: "❄️" },
  { id: "interior", label: "Interior", icon: "🪑" },
  { id: "other", label: "Other", icon: "🔧" },
];

export const MODS = [
  // Exhaust
  { id: "ex-catback", category: "exhaust", name: "Cat-Back Exhaust", brand: "Borla", cost: 1899, hp: 12, torque: 10, zeroToSixty: -0.08 },
  { id: "ex-axleback", category: "exhaust", name: "Axle-Back Exhaust", brand: "MagnaFlow", cost: 899, hp: 6, torque: 5, zeroToSixty: -0.04 },
  { id: "ex-headers", category: "exhaust", name: "Long-Tube Headers", brand: "Kooks", cost: 2499, hp: 25, torque: 22, zeroToSixty: -0.12 },
  { id: "ex-downpipe", category: "exhaust", name: "High-Flow Downpipe", brand: "AWE", cost: 1299, hp: 18, torque: 15, zeroToSixty: -0.1 },
  { id: "ex-muffler-del", category: "exhaust", name: "Muffler Delete Kit", brand: "Vibrant", cost: 149, hp: 3, torque: 2, zeroToSixty: -0.02 },
  { id: "ex-titanium", category: "exhaust", name: "Titanium Full System", brand: "Akrapovič", cost: 6499, hp: 20, torque: 16, zeroToSixty: -0.15 },

  // Intake
  { id: "in-cai", category: "intake", name: "Cold Air Intake", brand: "K&N", cost: 399, hp: 8, torque: 6, zeroToSixty: -0.05 },
  { id: "in-shortram", category: "intake", name: "Short Ram Intake", brand: "Injen", cost: 299, hp: 5, torque: 4, zeroToSixty: -0.03 },
  { id: "in-throttle", category: "intake", name: "Big Bore Throttle Body", brand: "BBK", cost: 549, hp: 10, torque: 8, zeroToSixty: -0.06 },
  { id: "in-manifold", category: "intake", name: "Performance Intake Manifold", brand: "Edelbrock", cost: 1899, hp: 22, torque: 18, zeroToSixty: -0.1 },
  { id: "in-filter", category: "intake", name: "High-Flow Air Filter", brand: "aFe", cost: 79, hp: 2, torque: 2, zeroToSixty: -0.01 },

  // Forced induction
  { id: "fi-turbo-kit", category: "forced", name: "Bolt-On Turbo Kit", brand: "Garrett", cost: 8999, hp: 150, torque: 140, zeroToSixty: -0.9 },
  { id: "fi-supercharger", category: "forced", name: "Roots Supercharger Kit", brand: "Whipple", cost: 10999, hp: 180, torque: 160, zeroToSixty: -1.1 },
  { id: "fi-twin-sc", category: "forced", name: "Twin-Screw Supercharger", brand: "Roush", cost: 12499, hp: 200, torque: 175, zeroToSixty: -1.2 },
  { id: "fi-procharger", category: "forced", name: "Centrifugal Supercharger", brand: "ProCharger", cost: 7999, hp: 140, torque: 120, zeroToSixty: -0.85 },
  { id: "fi-turbo-upgrade", category: "forced", name: "Larger Turbo Upgrade", brand: "Precision", cost: 3499, hp: 80, torque: 70, zeroToSixty: -0.5 },
  { id: "fi-wastegate", category: "forced", name: "External Wastegate", brand: "Tial", cost: 599, hp: 5, torque: 5, zeroToSixty: -0.02 },
  { id: "fi-bov", category: "forced", name: "Blow-Off Valve", brand: "HKS", cost: 349, hp: 0, torque: 0, zeroToSixty: 0 },
  { id: "fi-intercooler", category: "forced", name: "Front Mount Intercooler", brand: "Mishimoto", cost: 1299, hp: 15, torque: 12, zeroToSixty: -0.08 },

  // Wheels
  { id: "wh-forged-18", category: "wheels", name: "18\" Forged Wheels", brand: "Volk TE37", cost: 3200, hp: 0, torque: 0, zeroToSixty: -0.05, weight: -8 },
  { id: "wh-forged-19", category: "wheels", name: "19\" Forged Wheels", brand: "HRE", cost: 4800, hp: 0, torque: 0, zeroToSixty: -0.04, weight: -6 },
  { id: "wh-flow-form", category: "wheels", name: "Flow-Formed Wheels", brand: "Enkei", cost: 1899, hp: 0, torque: 0, zeroToSixty: -0.03, weight: -4 },
  { id: "wh-track", category: "wheels", name: "Track Compound Wheel Set", brand: "BBS", cost: 2899, hp: 0, torque: 0, zeroToSixty: -0.06, weight: -5 },
  { id: "wh-spacers", category: "wheels", name: "Hub-Centric Spacers", brand: "Eibach", cost: 199, hp: 0, torque: 0, zeroToSixty: 0 },
  { id: "wh-lug", category: "wheels", name: "Titanium Lug Nuts", brand: "Gorilla", cost: 249, hp: 0, torque: 0, zeroToSixty: 0, weight: -1 },

  // Suspension
  { id: "su-coilovers", category: "suspension", name: "Adjustable Coilovers", brand: "KW", cost: 2899, hp: 0, torque: 0, zeroToSixty: -0.04 },
  { id: "su-lowering", category: "suspension", name: "Lowering Springs", brand: "Eibach", cost: 399, hp: 0, torque: 0, zeroToSixty: -0.02 },
  { id: "su-sway-f", category: "suspension", name: "Front Sway Bar", brand: "Whiteline", cost: 349, hp: 0, torque: 0, zeroToSixty: -0.03 },
  { id: "su-sway-r", category: "suspension", name: "Rear Sway Bar", brand: "Whiteline", cost: 299, hp: 0, torque: 0, zeroToSixty: -0.03 },
  { id: "su-camber", category: "suspension", name: "Camber Arms Kit", brand: "SPC", cost: 449, hp: 0, torque: 0, zeroToSixty: -0.02 },
  { id: "su-strut", category: "suspension", name: "Strut Tower Brace", brand: "Cusco", cost: 279, hp: 0, torque: 0, zeroToSixty: -0.01 },

  // ECU
  { id: "ecu-stage1", category: "ecu", name: "Stage 1 ECU Tune", brand: "Cobb", cost: 699, hp: 35, torque: 40, zeroToSixty: -0.2 },
  { id: "ecu-stage2", category: "ecu", name: "Stage 2 ECU Tune", brand: "APR", cost: 999, hp: 65, torque: 70, zeroToSixty: -0.35 },
  { id: "ecu-flex", category: "ecu", name: "Flex-Fuel Tune", brand: "E85 Labs", cost: 1299, hp: 90, torque: 85, zeroToSixty: -0.45 },
  { id: "ecu-piggyback", category: "ecu", name: "Piggyback Controller", brand: "JB4", cost: 479, hp: 25, torque: 28, zeroToSixty: -0.12 },
  { id: "ecu-standalone", category: "ecu", name: "Standalone ECU", brand: "Haltech", cost: 2499, hp: 50, torque: 45, zeroToSixty: -0.25 },

  // Brakes
  { id: "br-big-kit", category: "brakes", name: "Big Brake Kit", brand: "Brembo", cost: 4499, hp: 0, torque: 0, zeroToSixty: -0.08 },
  { id: "br-pads", category: "brakes", name: "Performance Brake Pads", brand: "EBC", cost: 249, hp: 0, torque: 0, zeroToSixty: -0.03 },
  { id: "br-rotors", category: "brakes", name: "Slotted Rotors", brand: "StopTech", cost: 899, hp: 0, torque: 0, zeroToSixty: -0.02 },
  { id: "br-lines", category: "brakes", name: "Stainless Brake Lines", brand: "Goodridge", cost: 189, hp: 0, torque: 0, zeroToSixty: -0.01 },

  // Aero
  { id: "ae-wing", category: "aero", name: "Carbon Rear Wing", brand: "APR", cost: 1899, hp: 0, torque: 0, zeroToSixty: 0.02, downforce: 120 },
  { id: "ae-splitter", category: "aero", name: "Front Splitter", brand: "Verus", cost: 699, hp: 0, torque: 0, zeroToSixty: -0.01, downforce: 40 },
  { id: "ae-diffuser", category: "aero", name: "Rear Diffuser", brand: "Vorsteiner", cost: 1299, hp: 0, torque: 0, zeroToSixty: -0.02, downforce: 60 },
  { id: "ae-canards", category: "aero", name: "Canard Set", brand: "Rocket Bunny", cost: 349, hp: 0, torque: 0, zeroToSixty: 0, downforce: 15 },

  // Drivetrain
  { id: "dr-clutch", category: "drivetrain", name: "Performance Clutch", brand: "ACT", cost: 1499, hp: 0, torque: 0, zeroToSixty: -0.05 },
  { id: "dr-flywheel", category: "drivetrain", name: "Lightweight Flywheel", brand: "Fidanza", cost: 599, hp: 0, torque: 0, zeroToSixty: -0.08, weight: -12 },
  { id: "dr-lsd", category: "drivetrain", name: "Limited-Slip Differential", brand: "Wavetrac", cost: 2199, hp: 0, torque: 0, zeroToSixty: -0.1 },
  { id: "dr-driveshaft", category: "drivetrain", name: "Carbon Driveshaft", brand: "Driveshaft Shop", cost: 1899, hp: 0, torque: 0, zeroToSixty: -0.04, weight: -8 },
  { id: "dr-short-shifter", category: "drivetrain", name: "Short Throw Shifter", brand: "B&M", cost: 279, hp: 0, torque: 0, zeroToSixty: -0.02 },

  // Cooling
  { id: "co-radiator", category: "cooling", name: "Aluminum Radiator", brand: "Mishimoto", cost: 699, hp: 5, torque: 3, zeroToSixty: -0.02 },
  { id: "co-oil", category: "cooling", name: "Engine Oil Cooler", brand: "Setrab", cost: 549, hp: 3, torque: 2, zeroToSixty: -0.01 },
  { id: "co-trans", category: "cooling", name: "Trans Cooler Kit", brand: "Mishimoto", cost: 449, hp: 0, torque: 0, zeroToSixty: -0.02 },

  // Interior
  { id: "in-seat", category: "interior", name: "Racing Bucket Seats", brand: "Recaro", cost: 2499, hp: 0, torque: 0, zeroToSixty: -0.02, weight: -10 },
  { id: "in-wheel", category: "interior", name: "Quick-Release Steering Wheel", brand: "NRG", cost: 399, hp: 0, torque: 0, zeroToSixty: 0 },
  { id: "in-gauge", category: "interior", name: "Boost / AFR Gauge Pack", brand: "AEM", cost: 449, hp: 0, torque: 0, zeroToSixty: 0 },

  // Other
  { id: "ot-nitrous", category: "other", name: "Wet Nitrous Kit", brand: "NOS", cost: 899, hp: 75, torque: 60, zeroToSixty: -0.4 },
  { id: "ot-meth", category: "other", name: "Methanol Injection", brand: "Snow", cost: 699, hp: 40, torque: 35, zeroToSixty: -0.2 },
  { id: "ot-fuel-pump", category: "other", name: "High-Flow Fuel Pump", brand: "Walbro", cost: 349, hp: 10, torque: 8, zeroToSixty: -0.05 },
  { id: "ot-wrap", category: "other", name: "Full Vinyl Wrap", brand: "3M", cost: 3500, hp: 0, torque: 0, zeroToSixty: 0 },
];
