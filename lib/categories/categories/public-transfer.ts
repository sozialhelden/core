import * as icons from "~/lib/categories/icons";
import { translate } from "~/lib/i18n/utils/translator";

const publicTransfer = {
  public_transfer: {
    name: () => translate("Transport"),
    icon: icons.bus,
    synonyms: [
      "400-4100-0040",
      "400-4100-0041",
      "400-4100-0042",
      "400-4100-0043",
      "400-4100-0047",
      "400-4100-0226",
      "400-4100-0326",
      "400-4100-0348",
      "400-4200-0048",
      "400-4200-0049",
      "400-4200-0240",
      "400-4200-0241",
      "400-4200-0311",
      "400-4200-0312",
      "400-4200-0313",
      "550-5510-0227",
      "800-8500-0179",
      "Bicycle Parking",
      "Border Crossing",
      "Bridge",
      "Canal Lock",
      "Canal",
      "Cargo Centre",
      "Cargo Transport",
      "Courier Service",
      "Goods Entrance",
      "Intersection",
      "Loading Bay",
      "Loading Dock",
      "Local or Regional Public Transport",
      "Motorway Exit",
      "Public Transport Access",
      "Public Transport Stop",
      "Road",
      "Ski Lift",
      "Toll Booth",
      "Toll Plaza",
      "Tollbooth",
      "Transport Service",
      "Transportation Service",
      "Tunnel",
      "Verkehr",
      "Weighbridge",
      "public_transfer",
      "public_transfer",
    ],
    priority: 30,
  },

  stop: {
    name: () => translate("Stop"),
    icon: icons.bus,
    parents: ["public_transfer"],
    synonyms: [],
  },

  station: {
    name: () => translate("Transit Station"),
    icon: icons.rail, // TODO: find proper icon
    parents: ["public_transfer"],
    synonyms: ["public_transport=station"],
  },

  boarding_area: {
    name: () => translate("Boarding Area"),
    icon: icons.circle, // TODO: find proper icon
    parents: ["public_transfer"],
    synonyms: [], // TODO: this needs synonyms
  },

  train: {
    name: () => translate("Train Stop"),
    icon: icons.rail,
    parents: ["public_transfer"],
    synonyms: [
      "railway=halt",
      "400-4100-0339",
      "400-4100-0340",
      "Aerial Tramway",
      "Cable Car",
      "Monorail",
      "halt",
      "train_station",
    ],
  },

  cablecar: {
    name: () => translate("Cable Car"),
    icon: icons.aerialway,
    parents: ["public_transfer"],
    synonyms: [
      "aerialway=station",
      "aerialway=cable_car",
      "aerialway=gondola",
      "Bergbahnen",
      "cable_car",
    ],
  },

  stop_area: {
    name: () => translate("Stop area"),
    icon: icons.circle, // TODO: find proper icon
    parents: ["public_transfer"],
    synonyms: ["stop_area", "public_transport=stop_area"],
  },

  stop_position: {
    name: () => translate("Stop Position"),
    icon: icons.circle, // TODO: find proper icon
    parents: ["public_transfer"],
    synonyms: ["stop_position", "public_transport=stop_position"],
  },

  platform: {
    name: () => translate("Platform"),
    icon: icons.circle, // TODO: find proper icon
    parents: ["public_transfer"],
    synonyms: [
      "public_transport=platform",
      "Platform",
      "Tram- oder Bushaltestelle",
      "platform",
    ],
  },

  railway_platform: {
    name: () => translate("Railway Platform"),
    icon: icons.rail, // TODO: find proper icon
    parents: ["public_transfer"],
    synonyms: ["railway=platform"],
  },

  shelter: {
    name: () => translate("Shelter"),
    icon: icons.shelter,
    parents: ["public_transfer"],
    synonyms: ["amenity=shelter"],
  },

  tram_crossing: {
    name: () => translate("Tram Crossing"),
    icon: icons.circle, // TODO: find proper icon
    parents: ["public_transfer"],
    synonyms: ["railway=tram_crossing"],
  },

  traffic_signals: {
    name: () => translate("Traffic Signals"),
    icon: icons.circle, // TODO: find proper icon
    parents: ["public_transfer"],
    synonyms: ["crossing=traffic_signals"],
  },

  parking: {
    name: () => translate("Park & Ride"),
    icon: icons.parking,
    parents: ["public_transfer"],
    synonyms: ["Park & Ride"],
  },

  parking_carports: {
    name: () => translate("Carports"),
    icon: icons.parking,
    parents: ["public_transfer"],
    synonyms: ["parking=carports"],
  },

  parking_half_on_kerb: {
    name: () => translate("Parking half on kerb"),
    icon: icons.parking,
    parents: ["public_transfer"],
    synonyms: ["parking=half_on_kerb"],
  },

  parking_layby: {
    name: () => translate("Layby Parking"),
    icon: icons.parking,
    parents: ["public_transfer"],
    synonyms: ["parking=layby"],
  },

  parking_multi_storey: {
    name: () => translate("Parking Decks"),
    icon: icons.parking,
    parents: ["public_transfer"],
    synonyms: ["parking=multi_storey"],
  },

  parking_on_kerb: {
    name: () => translate("Parking on Kerb"),
    icon: icons.parking,
    parents: ["public_transfer"],
    synonyms: ["parking=on_kerb"],
  },

  parking_rooftop: {
    name: () => translate("Rooftop Parking"),
    icon: icons.parking,
    parents: ["public_transfer"],
    synonyms: ["parking=rooftop"],
  },

  parking_street_side: {
    name: () => translate("Street-side Parking"),
    icon: icons.parking,
    parents: ["public_transfer"],
    synonyms: ["parking=street_side"],
  },

  parking_surface: {
    name: () => translate("Surface Parking"),
    icon: icons.parking,
    parents: ["public_transfer"],
    synonyms: ["parking=surface"],
  },

  parking_underground: {
    name: () => translate("Underground Parking"),
    icon: icons.parkingGarage,
    parents: ["public_transfer"],
    synonyms: ["parking=underground"],
  },

  taxi: {
    name: () => translate("Taxi"),
    icon: icons.taxi,
    parents: ["public_transfer"],
    synonyms: [
      "amenity=taxi",
      "Taxi Rank",
      "Taxi Stand",
      "Taxi",
      "taxi_service",
      "taxi_stand",
    ],
  },

  pier: {
    name: () => translate("Pier"),
    icon: icons.harbor,
    parents: ["public_transfer"],
    synonyms: ["man_made=pier", "Pier"],
  },

  charging_station: {
    name: () => translate("EV charging station"),
    icon: icons.chargingStation,
    parents: ["public_transfer"],
    synonyms: [
      "amenity=charging_station",
      "EV Charging Point",
      "EV Charging Station",
    ],
  },

  marina: {
    name: () => translate("Harbor/Marina"),
    icon: icons.harbor,
    parents: ["public_transfer"],
    synonyms: [
      "leisure=marina",
      "350-3500-0300",
      "400-4200-0051",
      "700-7400-0140",
      "900-9200-0219",
      "Bay or Harbour",
      "Boat Rental",
      "Boat or Ferry",
      "Boating Services",
      "Cruise",
      "Harbor / Marina",
      "Harbor",
      "Harbour",
      "Marina",
      "Port",
      "Seaport or Harbour",
      "Seaport",
      "boatyard",
    ],
  },

  bicycle_rental: {
    name: () => translate("Bike Rental"),
    icon: icons.bicycleShare,
    parents: ["public_transfer"],
    synonyms: [
      "amenity=bicycle_rental",
      "400-4100-0347",
      "Bicycle Sharing Docking Station",
      "Bike Rental / Bike Share",
    ],
  },

  bus_stop: {
    name: () => translate("Bus Stop"),
    icon: icons.bus,
    parents: ["public_transfer"],
    synonyms: [
      "highway=bus_stop",
      "400-4100-0036",
      "400-4100-0341",
      "Bus Rapid Transit",
      "Bus Station",
      "Bus Stop",
      "transit_station",
    ],
  },

  subway_station: {
    name: () => translate("Subway Station"),
    icon: icons.railMetro,
    parents: ["public_transfer"],
    synonyms: [
      "400-4100-0037",
      "Metro Station",
      "Underground/Metro",
      "subway_station",
    ],
  },

  fuel: {
    name: () => translate("Gas Station"),
    icon: icons.fuel,
    parents: ["public_transfer"],
    synonyms: [
      "amenity=fuel",
      "700-7600-0000",
      "700-7600-0116",
      "700-7600-0322",
      "Gas Station",
      "Petrol Station",
      "Service Station",
      "Tankstelle",
      "gas_station",
      "gas_station",
    ],
  },

  ferry: {
    name: () => translate("Ferry Terminal"),
    icon: icons.ferry,
    parents: ["public_transfer"],
    synonyms: [
      "amenity=ferry_terminal",
      "400-4100-0044",
      "400-4100-0045",
      "400-4100-0046",
      "400-4100-0338",
      "Ferry Terminal",
      "Ferry",
      "Train Ferry",
      "Water Taxi",
      "ferry_terminal",
    ],
  },

  car_rental: {
    name: () => translate("Car Rental"),
    icon: icons.carRental,
    parents: ["public_transfer"],
    synonyms: [
      "amenity=car_rental",
      "700-7851-0117",
      "Car Hire Agency",
      "Rental Car Location",
      "car_rental",
    ],
  },

  car_sharing: {
    name: () => translate("Car Sharing"),
    icon: icons.carRental,
    parents: ["public_transfer"],
    synonyms: ["amenity=car_sharing"],
  },

  tram_stop: {
    name: () => translate("Tram Station"),
    icon: icons.railLight,
    parents: ["public_transfer"],
    synonyms: [
      "railway=tram_stop",
      "400-4100-0337",
      "400-4100-0342",
      "Funicular",
      "Light Rail",
      "Tram Station",
    ],
  },

  bus_station: {
    name: () => translate("Bus station"),
    icon: icons.bus,
    parents: ["public_transfer"],
    synonyms: ["amenity=bus_station", "bus_station", "Bus Line", "Bus Station"],
  },

  train_station: {
    name: () => translate("Train Station"),
    icon: icons.rail,
    parents: ["public_transfer"],
    synonyms: [
      "railway=station",
      "400-4100-0035",
      "400-4100-0038",
      "400-4100-0039",
      "400-4200-0050",
      "Bahnhof",
      "Commuter Rail Station",
      "Commuter Train",
      "Light Rail Station",
      "Railway Station",
      "Railway Yard",
      "Train Station",
      "Train",
      "station",
    ],
  },

  airport: {
    name: () => translate("Airport"),
    icon: icons.airport,
    parents: ["public_transfer"],
    synonyms: [
      "aeroway=terminal",
      "400-4000-4580",
      "400-4000-4581",
      "400-4000-4582",
      "400-4200-0052",
      "Airport Cargo Centre",
      "Airport Food Court",
      "Airport Gate",
      "Airport Lounge",
      "Airport Service",
      "Airport Terminal",
      "Airport Tram",
      "Airport",
      "Baggage Claim",
      "Baggage Locker",
      "Heliport",
      "Plane",
      "Public Sports Airport",
      "airport",
      "terminal",
    ],
  },
} as const;

export function getPublicTransfer() {
  return publicTransfer;
}
