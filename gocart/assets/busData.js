// =============================================
// BusGo — Local Bus Route & Stop Data
// Connected to C++ Dijkstra Routing Engine
// =============================================

// --- Bus Network Stops (C++ Graph Engine Nodes) ---
export const cities = [
    {
        "id": "2",
        "name": "Clement Town",
        "zone": "South Zone (GEU Campus)",
        "location": "South"
    },
    {
        "id": "1",
        "name": "ISBT Dehradun",
        "zone": "South Zone (Inter-State Terminus)",
        "location": "South"
    },
    {
        "id": "3",
        "name": "Clock Tower",
        "zone": "Center Zone (Ghanta Ghar)",
        "location": "Center"
    },
    {
        "id": "4",
        "name": "Rajpur Road",
        "zone": "North Zone (Pacific Mall)",
        "location": "North"
    },
    {
        "id": "5",
        "name": "Sahastradhara",
        "zone": "North-East Zone (Sulphur Springs)",
        "location": "North-East"
    },
    {
        "id": "6",
        "name": "FRI",
        "zone": "West Zone (Forest Research Institute)",
        "location": "West"
    },
    {
        "id": "7",
        "name": "Prem Nagar",
        "zone": "West Zone (UPES Campus)",
        "location": "West"
    },
    {
        "id": "8",
        "name": "Robber's Cave",
        "zone": "North Zone (Guchhupani)",
        "location": "North"
    }
];

export const stops = cities;

// --- Verified Local Bus Operators ---
export const busOperators = [
    {
        "id": "operator_1",
        "userId": "user_op_1",
        "name": "Doon City Express",
        "description": "High-frequency local transit across Dehradun and university corridors.",
        "email": "care@dooncityexpress.in",
        "contact": "+91 98100 11111",
        "status": "approved",
        "isActive": true,
        "rating": 4.8,
        "totalBuses": 24,
        "routesCount": 8
    },
    {
        "id": "operator_2",
        "userId": "user_op_2",
        "name": "Graphic Era Shuttle",
        "description": "Student & commuter rapid transit connecting Clement Town with all zones.",
        "email": "shuttle@geu.ac.in",
        "contact": "+91 98100 22222",
        "status": "approved",
        "isActive": true,
        "rating": 4.9,
        "totalBuses": 16,
        "routesCount": 6
    },
    {
        "id": "operator_3",
        "userId": "user_op_3",
        "name": "Valley Rapid Link",
        "description": "Clean, eco-friendly EV low-floor buses serving Dehradun's main routes.",
        "email": "support@valleyrapid.com",
        "contact": "+91 98100 33333",
        "status": "approved",
        "isActive": true,
        "rating": 4.6,
        "totalBuses": 20,
        "routesCount": 7
    },
    {
        "id": "operator_4",
        "userId": "user_op_4",
        "name": "Hill View Transit",
        "description": "Comfortable AC tourist and express city link buses.",
        "email": "info@hillviewtransit.com",
        "contact": "+91 98100 44444",
        "status": "approved",
        "isActive": true,
        "rating": 4.7,
        "totalBuses": 18,
        "routesCount": 5
    },
    {
        "id": "operator_5",
        "userId": "user_op_5",
        "name": "Uttarakhand Parivahan Local",
        "description": "State transport corporation providing dependable city bus coverage.",
        "email": "utc@uttarakhand.gov.in",
        "contact": "+91 98100 55555",
        "status": "approved",
        "isActive": true,
        "rating": 4.5,
        "totalBuses": 35,
        "routesCount": 10
    }
];

// --- Scheduled Local Trips (Every Stop Pair Connected) ---
export const busTrips = [
    {
        "id": "trip_1",
        "operatorId": "operator_2",
        "busId": "BUS-202",
        "sourceStopId": "2",
        "destStopId": "3",
        "sourceCity": "Clement Town",
        "destCity": "Clock Tower",
        "departureDate": "2026-10-23",
        "departureTime": "07:00 AM",
        "arrivalTime": "07:35 AM",
        "duration": "35 mins",
        "price": 40,
        "mrp": 60,
        "availableSeats": 21,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "07:00 AM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "07:00 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "07:35 AM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "07:35 AM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.3,
        "reviewCount": 97,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_2",
        "operatorId": "operator_3",
        "busId": "BUS-203",
        "sourceStopId": "2",
        "destStopId": "3",
        "sourceCity": "Clement Town",
        "destCity": "Clock Tower",
        "departureDate": "2026-10-23",
        "departureTime": "09:30 AM",
        "arrivalTime": "10:10 AM",
        "duration": "40 mins",
        "price": 45,
        "mrp": 65,
        "availableSeats": 22,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "09:30 AM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "09:30 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "10:10 AM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "10:10 AM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.4,
        "reviewCount": 109,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_3",
        "operatorId": "operator_4",
        "busId": "BUS-204",
        "sourceStopId": "2",
        "destStopId": "3",
        "sourceCity": "Clement Town",
        "destCity": "Clock Tower",
        "departureDate": "2026-10-23",
        "departureTime": "02:15 PM",
        "arrivalTime": "02:55 PM",
        "duration": "40 mins",
        "price": 35,
        "mrp": 55,
        "availableSeats": 23,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "02:15 PM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "02:15 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "02:55 PM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "02:55 PM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.5,
        "reviewCount": 121,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_4",
        "operatorId": "operator_5",
        "busId": "BUS-205",
        "sourceStopId": "2",
        "destStopId": "3",
        "sourceCity": "Clement Town",
        "destCity": "Clock Tower",
        "departureDate": "2026-10-23",
        "departureTime": "05:30 PM",
        "arrivalTime": "06:10 PM",
        "duration": "40 mins",
        "price": 40,
        "mrp": 60,
        "availableSeats": 24,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "05:30 PM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "05:30 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "06:10 PM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "06:10 PM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.6,
        "reviewCount": 133,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_5",
        "operatorId": "operator_1",
        "busId": "BUS-206",
        "sourceStopId": "3",
        "destStopId": "2",
        "sourceCity": "Clock Tower",
        "destCity": "Clement Town",
        "departureDate": "2026-10-23",
        "departureTime": "07:00 AM",
        "arrivalTime": "07:35 AM",
        "duration": "35 mins",
        "price": 45,
        "mrp": 65,
        "availableSeats": 25,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "07:00 AM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "07:00 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "07:35 AM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "07:35 AM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.7,
        "reviewCount": 145,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_6",
        "operatorId": "operator_2",
        "busId": "BUS-207",
        "sourceStopId": "3",
        "destStopId": "2",
        "sourceCity": "Clock Tower",
        "destCity": "Clement Town",
        "departureDate": "2026-10-23",
        "departureTime": "09:30 AM",
        "arrivalTime": "10:10 AM",
        "duration": "40 mins",
        "price": 35,
        "mrp": 55,
        "availableSeats": 26,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "09:30 AM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "09:30 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "10:10 AM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "10:10 AM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.8,
        "reviewCount": 157,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_7",
        "operatorId": "operator_3",
        "busId": "BUS-208",
        "sourceStopId": "3",
        "destStopId": "2",
        "sourceCity": "Clock Tower",
        "destCity": "Clement Town",
        "departureDate": "2026-10-23",
        "departureTime": "02:15 PM",
        "arrivalTime": "02:55 PM",
        "duration": "40 mins",
        "price": 40,
        "mrp": 60,
        "availableSeats": 27,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "02:15 PM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "02:15 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "02:55 PM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "02:55 PM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.9,
        "reviewCount": 169,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_8",
        "operatorId": "operator_4",
        "busId": "BUS-201",
        "sourceStopId": "3",
        "destStopId": "2",
        "sourceCity": "Clock Tower",
        "destCity": "Clement Town",
        "departureDate": "2026-10-23",
        "departureTime": "05:30 PM",
        "arrivalTime": "06:10 PM",
        "duration": "40 mins",
        "price": 45,
        "mrp": 65,
        "availableSeats": 28,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "05:30 PM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "05:30 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "06:10 PM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "06:10 PM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.2,
        "reviewCount": 181,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_9",
        "operatorId": "operator_5",
        "busId": "BUS-202",
        "sourceStopId": "2",
        "destStopId": "7",
        "sourceCity": "Clement Town",
        "destCity": "Prem Nagar",
        "departureDate": "2026-10-23",
        "departureTime": "07:00 AM",
        "arrivalTime": "07:35 AM",
        "duration": "35 mins",
        "price": 45,
        "mrp": 65,
        "availableSeats": 29,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "07:00 AM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "07:00 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "07:35 AM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "07:35 AM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.3,
        "reviewCount": 193,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_10",
        "operatorId": "operator_1",
        "busId": "BUS-203",
        "sourceStopId": "2",
        "destStopId": "7",
        "sourceCity": "Clement Town",
        "destCity": "Prem Nagar",
        "departureDate": "2026-10-23",
        "departureTime": "09:30 AM",
        "arrivalTime": "10:10 AM",
        "duration": "40 mins",
        "price": 50,
        "mrp": 70,
        "availableSeats": 30,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "09:30 AM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "09:30 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "10:10 AM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "10:10 AM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.4,
        "reviewCount": 205,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_11",
        "operatorId": "operator_2",
        "busId": "BUS-204",
        "sourceStopId": "2",
        "destStopId": "7",
        "sourceCity": "Clement Town",
        "destCity": "Prem Nagar",
        "departureDate": "2026-10-23",
        "departureTime": "02:15 PM",
        "arrivalTime": "02:55 PM",
        "duration": "40 mins",
        "price": 55,
        "mrp": 75,
        "availableSeats": 31,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "02:15 PM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "02:15 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "02:55 PM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "02:55 PM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.5,
        "reviewCount": 217,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_12",
        "operatorId": "operator_3",
        "busId": "BUS-205",
        "sourceStopId": "2",
        "destStopId": "7",
        "sourceCity": "Clement Town",
        "destCity": "Prem Nagar",
        "departureDate": "2026-10-23",
        "departureTime": "05:30 PM",
        "arrivalTime": "06:10 PM",
        "duration": "40 mins",
        "price": 45,
        "mrp": 65,
        "availableSeats": 32,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "05:30 PM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "05:30 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "06:10 PM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "06:10 PM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.6,
        "reviewCount": 229,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_13",
        "operatorId": "operator_4",
        "busId": "BUS-206",
        "sourceStopId": "7",
        "destStopId": "2",
        "sourceCity": "Prem Nagar",
        "destCity": "Clement Town",
        "departureDate": "2026-10-23",
        "departureTime": "07:00 AM",
        "arrivalTime": "07:35 AM",
        "duration": "35 mins",
        "price": 50,
        "mrp": 70,
        "availableSeats": 33,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "07:00 AM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "07:00 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "07:35 AM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "07:35 AM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.7,
        "reviewCount": 241,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_14",
        "operatorId": "operator_5",
        "busId": "BUS-207",
        "sourceStopId": "7",
        "destStopId": "2",
        "sourceCity": "Prem Nagar",
        "destCity": "Clement Town",
        "departureDate": "2026-10-23",
        "departureTime": "09:30 AM",
        "arrivalTime": "10:10 AM",
        "duration": "40 mins",
        "price": 55,
        "mrp": 75,
        "availableSeats": 34,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "09:30 AM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "09:30 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "10:10 AM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "10:10 AM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.8,
        "reviewCount": 253,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_15",
        "operatorId": "operator_1",
        "busId": "BUS-208",
        "sourceStopId": "7",
        "destStopId": "2",
        "sourceCity": "Prem Nagar",
        "destCity": "Clement Town",
        "departureDate": "2026-10-23",
        "departureTime": "02:15 PM",
        "arrivalTime": "02:55 PM",
        "duration": "40 mins",
        "price": 45,
        "mrp": 65,
        "availableSeats": 20,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "02:15 PM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "02:15 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "02:55 PM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "02:55 PM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.9,
        "reviewCount": 265,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_16",
        "operatorId": "operator_2",
        "busId": "BUS-201",
        "sourceStopId": "7",
        "destStopId": "2",
        "sourceCity": "Prem Nagar",
        "destCity": "Clement Town",
        "departureDate": "2026-10-23",
        "departureTime": "05:30 PM",
        "arrivalTime": "06:10 PM",
        "duration": "40 mins",
        "price": 50,
        "mrp": 70,
        "availableSeats": 21,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "05:30 PM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "05:30 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "06:10 PM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "06:10 PM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.2,
        "reviewCount": 277,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_17",
        "operatorId": "operator_3",
        "busId": "BUS-202",
        "sourceStopId": "1",
        "destStopId": "5",
        "sourceCity": "ISBT Dehradun",
        "destCity": "Sahastradhara",
        "departureDate": "2026-10-23",
        "departureTime": "07:00 AM",
        "arrivalTime": "07:35 AM",
        "duration": "35 mins",
        "price": 60,
        "mrp": 80,
        "availableSeats": 22,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "07:00 AM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "07:00 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "07:35 AM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "07:35 AM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.3,
        "reviewCount": 289,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_18",
        "operatorId": "operator_4",
        "busId": "BUS-203",
        "sourceStopId": "1",
        "destStopId": "5",
        "sourceCity": "ISBT Dehradun",
        "destCity": "Sahastradhara",
        "departureDate": "2026-10-23",
        "departureTime": "09:30 AM",
        "arrivalTime": "10:10 AM",
        "duration": "40 mins",
        "price": 50,
        "mrp": 70,
        "availableSeats": 23,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "09:30 AM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "09:30 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "10:10 AM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "10:10 AM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.4,
        "reviewCount": 301,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_19",
        "operatorId": "operator_5",
        "busId": "BUS-204",
        "sourceStopId": "1",
        "destStopId": "5",
        "sourceCity": "ISBT Dehradun",
        "destCity": "Sahastradhara",
        "departureDate": "2026-10-23",
        "departureTime": "02:15 PM",
        "arrivalTime": "02:55 PM",
        "duration": "40 mins",
        "price": 55,
        "mrp": 75,
        "availableSeats": 24,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "02:15 PM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "02:15 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "02:55 PM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "02:55 PM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.5,
        "reviewCount": 313,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_20",
        "operatorId": "operator_1",
        "busId": "BUS-205",
        "sourceStopId": "1",
        "destStopId": "5",
        "sourceCity": "ISBT Dehradun",
        "destCity": "Sahastradhara",
        "departureDate": "2026-10-23",
        "departureTime": "05:30 PM",
        "arrivalTime": "06:10 PM",
        "duration": "40 mins",
        "price": 60,
        "mrp": 80,
        "availableSeats": 25,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "05:30 PM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "05:30 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "06:10 PM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "06:10 PM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.6,
        "reviewCount": 325,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_21",
        "operatorId": "operator_2",
        "busId": "BUS-206",
        "sourceStopId": "5",
        "destStopId": "1",
        "sourceCity": "Sahastradhara",
        "destCity": "ISBT Dehradun",
        "departureDate": "2026-10-23",
        "departureTime": "07:00 AM",
        "arrivalTime": "07:35 AM",
        "duration": "35 mins",
        "price": 50,
        "mrp": 70,
        "availableSeats": 26,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "07:00 AM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "07:00 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "07:35 AM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "07:35 AM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.7,
        "reviewCount": 337,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_22",
        "operatorId": "operator_3",
        "busId": "BUS-207",
        "sourceStopId": "5",
        "destStopId": "1",
        "sourceCity": "Sahastradhara",
        "destCity": "ISBT Dehradun",
        "departureDate": "2026-10-23",
        "departureTime": "09:30 AM",
        "arrivalTime": "10:10 AM",
        "duration": "40 mins",
        "price": 55,
        "mrp": 75,
        "availableSeats": 27,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "09:30 AM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "09:30 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "10:10 AM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "10:10 AM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.8,
        "reviewCount": 349,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_23",
        "operatorId": "operator_4",
        "busId": "BUS-208",
        "sourceStopId": "5",
        "destStopId": "1",
        "sourceCity": "Sahastradhara",
        "destCity": "ISBT Dehradun",
        "departureDate": "2026-10-23",
        "departureTime": "02:15 PM",
        "arrivalTime": "02:55 PM",
        "duration": "40 mins",
        "price": 60,
        "mrp": 80,
        "availableSeats": 28,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "02:15 PM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "02:15 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "02:55 PM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "02:55 PM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.9,
        "reviewCount": 361,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_24",
        "operatorId": "operator_5",
        "busId": "BUS-201",
        "sourceStopId": "5",
        "destStopId": "1",
        "sourceCity": "Sahastradhara",
        "destCity": "ISBT Dehradun",
        "departureDate": "2026-10-23",
        "departureTime": "05:30 PM",
        "arrivalTime": "06:10 PM",
        "duration": "40 mins",
        "price": 50,
        "mrp": 70,
        "availableSeats": 29,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "05:30 PM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "05:30 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "06:10 PM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "06:10 PM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.2,
        "reviewCount": 373,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_25",
        "operatorId": "operator_1",
        "busId": "BUS-202",
        "sourceStopId": "3",
        "destStopId": "4",
        "sourceCity": "Clock Tower",
        "destCity": "Rajpur Road",
        "departureDate": "2026-10-23",
        "departureTime": "07:00 AM",
        "arrivalTime": "07:35 AM",
        "duration": "35 mins",
        "price": 30,
        "mrp": 50,
        "availableSeats": 30,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "07:00 AM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "07:00 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "07:35 AM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "07:35 AM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.3,
        "reviewCount": 85,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_26",
        "operatorId": "operator_2",
        "busId": "BUS-203",
        "sourceStopId": "3",
        "destStopId": "4",
        "sourceCity": "Clock Tower",
        "destCity": "Rajpur Road",
        "departureDate": "2026-10-23",
        "departureTime": "09:30 AM",
        "arrivalTime": "10:10 AM",
        "duration": "40 mins",
        "price": 35,
        "mrp": 55,
        "availableSeats": 31,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "09:30 AM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "09:30 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "10:10 AM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "10:10 AM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.4,
        "reviewCount": 97,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_27",
        "operatorId": "operator_3",
        "busId": "BUS-204",
        "sourceStopId": "3",
        "destStopId": "4",
        "sourceCity": "Clock Tower",
        "destCity": "Rajpur Road",
        "departureDate": "2026-10-23",
        "departureTime": "02:15 PM",
        "arrivalTime": "02:55 PM",
        "duration": "40 mins",
        "price": 25,
        "mrp": 45,
        "availableSeats": 32,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "02:15 PM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "02:15 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "02:55 PM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "02:55 PM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.5,
        "reviewCount": 109,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_28",
        "operatorId": "operator_4",
        "busId": "BUS-205",
        "sourceStopId": "3",
        "destStopId": "4",
        "sourceCity": "Clock Tower",
        "destCity": "Rajpur Road",
        "departureDate": "2026-10-23",
        "departureTime": "05:30 PM",
        "arrivalTime": "06:10 PM",
        "duration": "40 mins",
        "price": 30,
        "mrp": 50,
        "availableSeats": 33,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "05:30 PM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "05:30 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "06:10 PM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "06:10 PM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.6,
        "reviewCount": 121,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_29",
        "operatorId": "operator_5",
        "busId": "BUS-206",
        "sourceStopId": "4",
        "destStopId": "3",
        "sourceCity": "Rajpur Road",
        "destCity": "Clock Tower",
        "departureDate": "2026-10-23",
        "departureTime": "07:00 AM",
        "arrivalTime": "07:35 AM",
        "duration": "35 mins",
        "price": 35,
        "mrp": 55,
        "availableSeats": 34,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "07:00 AM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "07:00 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "07:35 AM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "07:35 AM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.7,
        "reviewCount": 133,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_30",
        "operatorId": "operator_1",
        "busId": "BUS-207",
        "sourceStopId": "4",
        "destStopId": "3",
        "sourceCity": "Rajpur Road",
        "destCity": "Clock Tower",
        "departureDate": "2026-10-23",
        "departureTime": "09:30 AM",
        "arrivalTime": "10:10 AM",
        "duration": "40 mins",
        "price": 25,
        "mrp": 45,
        "availableSeats": 20,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "09:30 AM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "09:30 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "10:10 AM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "10:10 AM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.8,
        "reviewCount": 145,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_31",
        "operatorId": "operator_2",
        "busId": "BUS-208",
        "sourceStopId": "4",
        "destStopId": "3",
        "sourceCity": "Rajpur Road",
        "destCity": "Clock Tower",
        "departureDate": "2026-10-23",
        "departureTime": "02:15 PM",
        "arrivalTime": "02:55 PM",
        "duration": "40 mins",
        "price": 30,
        "mrp": 50,
        "availableSeats": 21,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "02:15 PM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "02:15 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "02:55 PM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "02:55 PM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.9,
        "reviewCount": 157,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_32",
        "operatorId": "operator_3",
        "busId": "BUS-201",
        "sourceStopId": "4",
        "destStopId": "3",
        "sourceCity": "Rajpur Road",
        "destCity": "Clock Tower",
        "departureDate": "2026-10-23",
        "departureTime": "05:30 PM",
        "arrivalTime": "06:10 PM",
        "duration": "40 mins",
        "price": 35,
        "mrp": 55,
        "availableSeats": 22,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "05:30 PM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "05:30 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "06:10 PM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "06:10 PM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.2,
        "reviewCount": 169,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_33",
        "operatorId": "operator_4",
        "busId": "BUS-202",
        "sourceStopId": "3",
        "destStopId": "8",
        "sourceCity": "Clock Tower",
        "destCity": "Robber's Cave",
        "departureDate": "2026-10-23",
        "departureTime": "07:00 AM",
        "arrivalTime": "07:35 AM",
        "duration": "35 mins",
        "price": 40,
        "mrp": 60,
        "availableSeats": 23,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "07:00 AM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "07:00 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "07:35 AM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "07:35 AM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.3,
        "reviewCount": 181,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_34",
        "operatorId": "operator_5",
        "busId": "BUS-203",
        "sourceStopId": "3",
        "destStopId": "8",
        "sourceCity": "Clock Tower",
        "destCity": "Robber's Cave",
        "departureDate": "2026-10-23",
        "departureTime": "09:30 AM",
        "arrivalTime": "10:10 AM",
        "duration": "40 mins",
        "price": 45,
        "mrp": 65,
        "availableSeats": 24,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "09:30 AM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "09:30 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "10:10 AM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "10:10 AM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.4,
        "reviewCount": 193,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_35",
        "operatorId": "operator_1",
        "busId": "BUS-204",
        "sourceStopId": "3",
        "destStopId": "8",
        "sourceCity": "Clock Tower",
        "destCity": "Robber's Cave",
        "departureDate": "2026-10-23",
        "departureTime": "02:15 PM",
        "arrivalTime": "02:55 PM",
        "duration": "40 mins",
        "price": 50,
        "mrp": 70,
        "availableSeats": 25,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "02:15 PM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "02:15 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "02:55 PM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "02:55 PM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.5,
        "reviewCount": 205,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_36",
        "operatorId": "operator_2",
        "busId": "BUS-205",
        "sourceStopId": "3",
        "destStopId": "8",
        "sourceCity": "Clock Tower",
        "destCity": "Robber's Cave",
        "departureDate": "2026-10-23",
        "departureTime": "05:30 PM",
        "arrivalTime": "06:10 PM",
        "duration": "40 mins",
        "price": 40,
        "mrp": 60,
        "availableSeats": 26,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "05:30 PM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "05:30 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "06:10 PM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "06:10 PM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.6,
        "reviewCount": 217,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_37",
        "operatorId": "operator_3",
        "busId": "BUS-206",
        "sourceStopId": "8",
        "destStopId": "3",
        "sourceCity": "Robber's Cave",
        "destCity": "Clock Tower",
        "departureDate": "2026-10-23",
        "departureTime": "07:00 AM",
        "arrivalTime": "07:35 AM",
        "duration": "35 mins",
        "price": 45,
        "mrp": 65,
        "availableSeats": 27,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "07:00 AM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "07:00 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "07:35 AM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "07:35 AM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.7,
        "reviewCount": 229,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_38",
        "operatorId": "operator_4",
        "busId": "BUS-207",
        "sourceStopId": "8",
        "destStopId": "3",
        "sourceCity": "Robber's Cave",
        "destCity": "Clock Tower",
        "departureDate": "2026-10-23",
        "departureTime": "09:30 AM",
        "arrivalTime": "10:10 AM",
        "duration": "40 mins",
        "price": 50,
        "mrp": 70,
        "availableSeats": 28,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "09:30 AM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "09:30 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "10:10 AM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "10:10 AM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.8,
        "reviewCount": 241,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_39",
        "operatorId": "operator_5",
        "busId": "BUS-208",
        "sourceStopId": "8",
        "destStopId": "3",
        "sourceCity": "Robber's Cave",
        "destCity": "Clock Tower",
        "departureDate": "2026-10-23",
        "departureTime": "02:15 PM",
        "arrivalTime": "02:55 PM",
        "duration": "40 mins",
        "price": 40,
        "mrp": 60,
        "availableSeats": 29,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "02:15 PM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "02:15 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "02:55 PM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "02:55 PM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.9,
        "reviewCount": 253,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_40",
        "operatorId": "operator_1",
        "busId": "BUS-201",
        "sourceStopId": "8",
        "destStopId": "3",
        "sourceCity": "Robber's Cave",
        "destCity": "Clock Tower",
        "departureDate": "2026-10-23",
        "departureTime": "05:30 PM",
        "arrivalTime": "06:10 PM",
        "duration": "40 mins",
        "price": 45,
        "mrp": 65,
        "availableSeats": 30,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "05:30 PM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "05:30 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "06:10 PM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "06:10 PM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.2,
        "reviewCount": 265,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_41",
        "operatorId": "operator_2",
        "busId": "BUS-202",
        "sourceStopId": "1",
        "destStopId": "6",
        "sourceCity": "ISBT Dehradun",
        "destCity": "FRI",
        "departureDate": "2026-10-23",
        "departureTime": "07:00 AM",
        "arrivalTime": "07:35 AM",
        "duration": "35 mins",
        "price": 45,
        "mrp": 65,
        "availableSeats": 31,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "07:00 AM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "07:00 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "07:35 AM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "07:35 AM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.3,
        "reviewCount": 277,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_42",
        "operatorId": "operator_3",
        "busId": "BUS-203",
        "sourceStopId": "1",
        "destStopId": "6",
        "sourceCity": "ISBT Dehradun",
        "destCity": "FRI",
        "departureDate": "2026-10-23",
        "departureTime": "09:30 AM",
        "arrivalTime": "10:10 AM",
        "duration": "40 mins",
        "price": 35,
        "mrp": 55,
        "availableSeats": 32,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "09:30 AM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "09:30 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "10:10 AM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "10:10 AM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.4,
        "reviewCount": 289,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_43",
        "operatorId": "operator_4",
        "busId": "BUS-204",
        "sourceStopId": "1",
        "destStopId": "6",
        "sourceCity": "ISBT Dehradun",
        "destCity": "FRI",
        "departureDate": "2026-10-23",
        "departureTime": "02:15 PM",
        "arrivalTime": "02:55 PM",
        "duration": "40 mins",
        "price": 40,
        "mrp": 60,
        "availableSeats": 33,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "02:15 PM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "02:15 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "02:55 PM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "02:55 PM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.5,
        "reviewCount": 301,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_44",
        "operatorId": "operator_5",
        "busId": "BUS-205",
        "sourceStopId": "1",
        "destStopId": "6",
        "sourceCity": "ISBT Dehradun",
        "destCity": "FRI",
        "departureDate": "2026-10-23",
        "departureTime": "05:30 PM",
        "arrivalTime": "06:10 PM",
        "duration": "40 mins",
        "price": 45,
        "mrp": 65,
        "availableSeats": 34,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "05:30 PM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "05:30 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "06:10 PM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "06:10 PM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.6,
        "reviewCount": 313,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_45",
        "operatorId": "operator_1",
        "busId": "BUS-206",
        "sourceStopId": "6",
        "destStopId": "1",
        "sourceCity": "FRI",
        "destCity": "ISBT Dehradun",
        "departureDate": "2026-10-23",
        "departureTime": "07:00 AM",
        "arrivalTime": "07:35 AM",
        "duration": "35 mins",
        "price": 35,
        "mrp": 55,
        "availableSeats": 20,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "07:00 AM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "07:00 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "07:35 AM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "07:35 AM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.7,
        "reviewCount": 325,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_46",
        "operatorId": "operator_2",
        "busId": "BUS-207",
        "sourceStopId": "6",
        "destStopId": "1",
        "sourceCity": "FRI",
        "destCity": "ISBT Dehradun",
        "departureDate": "2026-10-23",
        "departureTime": "09:30 AM",
        "arrivalTime": "10:10 AM",
        "duration": "40 mins",
        "price": 40,
        "mrp": 60,
        "availableSeats": 21,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "09:30 AM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "09:30 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "10:10 AM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "10:10 AM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.8,
        "reviewCount": 337,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_47",
        "operatorId": "operator_3",
        "busId": "BUS-208",
        "sourceStopId": "6",
        "destStopId": "1",
        "sourceCity": "FRI",
        "destCity": "ISBT Dehradun",
        "departureDate": "2026-10-23",
        "departureTime": "02:15 PM",
        "arrivalTime": "02:55 PM",
        "duration": "40 mins",
        "price": 45,
        "mrp": 65,
        "availableSeats": 22,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "02:15 PM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "02:15 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "02:55 PM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "02:55 PM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.9,
        "reviewCount": 349,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_48",
        "operatorId": "operator_4",
        "busId": "BUS-201",
        "sourceStopId": "6",
        "destStopId": "1",
        "sourceCity": "FRI",
        "destCity": "ISBT Dehradun",
        "departureDate": "2026-10-23",
        "departureTime": "05:30 PM",
        "arrivalTime": "06:10 PM",
        "duration": "40 mins",
        "price": 35,
        "mrp": 55,
        "availableSeats": 23,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "05:30 PM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "05:30 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "06:10 PM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "06:10 PM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.2,
        "reviewCount": 361,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_49",
        "operatorId": "operator_5",
        "busId": "BUS-202",
        "sourceStopId": "2",
        "destStopId": "1",
        "sourceCity": "Clement Town",
        "destCity": "ISBT Dehradun",
        "departureDate": "2026-10-23",
        "departureTime": "07:00 AM",
        "arrivalTime": "07:35 AM",
        "duration": "35 mins",
        "price": 25,
        "mrp": 45,
        "availableSeats": 24,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "07:00 AM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "07:00 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "07:35 AM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "07:35 AM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.3,
        "reviewCount": 373,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_50",
        "operatorId": "operator_1",
        "busId": "BUS-203",
        "sourceStopId": "2",
        "destStopId": "1",
        "sourceCity": "Clement Town",
        "destCity": "ISBT Dehradun",
        "departureDate": "2026-10-23",
        "departureTime": "09:30 AM",
        "arrivalTime": "10:10 AM",
        "duration": "40 mins",
        "price": 30,
        "mrp": 50,
        "availableSeats": 25,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "09:30 AM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "09:30 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "10:10 AM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "10:10 AM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.4,
        "reviewCount": 85,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_51",
        "operatorId": "operator_2",
        "busId": "BUS-204",
        "sourceStopId": "2",
        "destStopId": "1",
        "sourceCity": "Clement Town",
        "destCity": "ISBT Dehradun",
        "departureDate": "2026-10-23",
        "departureTime": "02:15 PM",
        "arrivalTime": "02:55 PM",
        "duration": "40 mins",
        "price": 20,
        "mrp": 40,
        "availableSeats": 26,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "02:15 PM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "02:15 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "02:55 PM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "02:55 PM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.5,
        "reviewCount": 97,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_52",
        "operatorId": "operator_3",
        "busId": "BUS-205",
        "sourceStopId": "2",
        "destStopId": "1",
        "sourceCity": "Clement Town",
        "destCity": "ISBT Dehradun",
        "departureDate": "2026-10-23",
        "departureTime": "05:30 PM",
        "arrivalTime": "06:10 PM",
        "duration": "40 mins",
        "price": 25,
        "mrp": 45,
        "availableSeats": 27,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "05:30 PM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "05:30 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "06:10 PM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "06:10 PM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.6,
        "reviewCount": 109,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_53",
        "operatorId": "operator_4",
        "busId": "BUS-206",
        "sourceStopId": "1",
        "destStopId": "2",
        "sourceCity": "ISBT Dehradun",
        "destCity": "Clement Town",
        "departureDate": "2026-10-23",
        "departureTime": "07:00 AM",
        "arrivalTime": "07:35 AM",
        "duration": "35 mins",
        "price": 30,
        "mrp": 50,
        "availableSeats": 28,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "07:00 AM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "07:00 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "07:35 AM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "07:35 AM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.7,
        "reviewCount": 121,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_54",
        "operatorId": "operator_5",
        "busId": "BUS-207",
        "sourceStopId": "1",
        "destStopId": "2",
        "sourceCity": "ISBT Dehradun",
        "destCity": "Clement Town",
        "departureDate": "2026-10-23",
        "departureTime": "09:30 AM",
        "arrivalTime": "10:10 AM",
        "duration": "40 mins",
        "price": 20,
        "mrp": 40,
        "availableSeats": 29,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "09:30 AM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "09:30 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "10:10 AM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "10:10 AM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.8,
        "reviewCount": 133,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_55",
        "operatorId": "operator_1",
        "busId": "BUS-208",
        "sourceStopId": "1",
        "destStopId": "2",
        "sourceCity": "ISBT Dehradun",
        "destCity": "Clement Town",
        "departureDate": "2026-10-23",
        "departureTime": "02:15 PM",
        "arrivalTime": "02:55 PM",
        "duration": "40 mins",
        "price": 25,
        "mrp": 45,
        "availableSeats": 30,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "02:15 PM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "02:15 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "02:55 PM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "02:55 PM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.9,
        "reviewCount": 145,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_56",
        "operatorId": "operator_2",
        "busId": "BUS-201",
        "sourceStopId": "1",
        "destStopId": "2",
        "sourceCity": "ISBT Dehradun",
        "destCity": "Clement Town",
        "departureDate": "2026-10-23",
        "departureTime": "05:30 PM",
        "arrivalTime": "06:10 PM",
        "duration": "40 mins",
        "price": 30,
        "mrp": 50,
        "availableSeats": 31,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "05:30 PM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "05:30 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "06:10 PM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "06:10 PM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.2,
        "reviewCount": 157,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_57",
        "operatorId": "operator_3",
        "busId": "BUS-202",
        "sourceStopId": "4",
        "destStopId": "5",
        "sourceCity": "Rajpur Road",
        "destCity": "Sahastradhara",
        "departureDate": "2026-10-23",
        "departureTime": "07:00 AM",
        "arrivalTime": "07:35 AM",
        "duration": "35 mins",
        "price": 45,
        "mrp": 65,
        "availableSeats": 32,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "07:00 AM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "07:00 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "07:35 AM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "07:35 AM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.3,
        "reviewCount": 169,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_58",
        "operatorId": "operator_4",
        "busId": "BUS-203",
        "sourceStopId": "4",
        "destStopId": "5",
        "sourceCity": "Rajpur Road",
        "destCity": "Sahastradhara",
        "departureDate": "2026-10-23",
        "departureTime": "09:30 AM",
        "arrivalTime": "10:10 AM",
        "duration": "40 mins",
        "price": 50,
        "mrp": 70,
        "availableSeats": 33,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "09:30 AM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "09:30 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "10:10 AM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "10:10 AM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.4,
        "reviewCount": 181,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_59",
        "operatorId": "operator_5",
        "busId": "BUS-204",
        "sourceStopId": "4",
        "destStopId": "5",
        "sourceCity": "Rajpur Road",
        "destCity": "Sahastradhara",
        "departureDate": "2026-10-23",
        "departureTime": "02:15 PM",
        "arrivalTime": "02:55 PM",
        "duration": "40 mins",
        "price": 55,
        "mrp": 75,
        "availableSeats": 34,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "02:15 PM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "02:15 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "02:55 PM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "02:55 PM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.5,
        "reviewCount": 193,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_60",
        "operatorId": "operator_1",
        "busId": "BUS-205",
        "sourceStopId": "4",
        "destStopId": "5",
        "sourceCity": "Rajpur Road",
        "destCity": "Sahastradhara",
        "departureDate": "2026-10-23",
        "departureTime": "05:30 PM",
        "arrivalTime": "06:10 PM",
        "duration": "40 mins",
        "price": 45,
        "mrp": 65,
        "availableSeats": 20,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "05:30 PM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "05:30 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "06:10 PM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "06:10 PM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.6,
        "reviewCount": 205,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_61",
        "operatorId": "operator_2",
        "busId": "BUS-206",
        "sourceStopId": "5",
        "destStopId": "4",
        "sourceCity": "Sahastradhara",
        "destCity": "Rajpur Road",
        "departureDate": "2026-10-23",
        "departureTime": "07:00 AM",
        "arrivalTime": "07:35 AM",
        "duration": "35 mins",
        "price": 50,
        "mrp": 70,
        "availableSeats": 21,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "07:00 AM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "07:00 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "07:35 AM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "07:35 AM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.7,
        "reviewCount": 217,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_62",
        "operatorId": "operator_3",
        "busId": "BUS-207",
        "sourceStopId": "5",
        "destStopId": "4",
        "sourceCity": "Sahastradhara",
        "destCity": "Rajpur Road",
        "departureDate": "2026-10-23",
        "departureTime": "09:30 AM",
        "arrivalTime": "10:10 AM",
        "duration": "40 mins",
        "price": 55,
        "mrp": 75,
        "availableSeats": 22,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "09:30 AM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "09:30 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "10:10 AM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "10:10 AM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.8,
        "reviewCount": 229,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_63",
        "operatorId": "operator_4",
        "busId": "BUS-208",
        "sourceStopId": "5",
        "destStopId": "4",
        "sourceCity": "Sahastradhara",
        "destCity": "Rajpur Road",
        "departureDate": "2026-10-23",
        "departureTime": "02:15 PM",
        "arrivalTime": "02:55 PM",
        "duration": "40 mins",
        "price": 45,
        "mrp": 65,
        "availableSeats": 23,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "02:15 PM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "02:15 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "02:55 PM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "02:55 PM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.9,
        "reviewCount": 241,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_64",
        "operatorId": "operator_5",
        "busId": "BUS-201",
        "sourceStopId": "5",
        "destStopId": "4",
        "sourceCity": "Sahastradhara",
        "destCity": "Rajpur Road",
        "departureDate": "2026-10-23",
        "departureTime": "05:30 PM",
        "arrivalTime": "06:10 PM",
        "duration": "40 mins",
        "price": 50,
        "mrp": 70,
        "availableSeats": 24,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "05:30 PM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "05:30 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "06:10 PM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "06:10 PM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.2,
        "reviewCount": 253,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_65",
        "operatorId": "operator_1",
        "busId": "BUS-202",
        "sourceStopId": "2",
        "destStopId": "4",
        "sourceCity": "Clement Town",
        "destCity": "Rajpur Road",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 43,
        "mrp": 58,
        "availableSeats": 19,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "08:15 AM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "08:50 AM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "08:50 AM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.5,
        "reviewCount": 145,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_66",
        "operatorId": "operator_2",
        "busId": "BUS-203",
        "sourceStopId": "2",
        "destStopId": "4",
        "sourceCity": "Clement Town",
        "destCity": "Rajpur Road",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 43,
        "mrp": 58,
        "availableSeats": 20,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "04:00 PM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "04:40 PM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "04:40 PM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.6,
        "reviewCount": 154,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_67",
        "operatorId": "operator_3",
        "busId": "BUS-204",
        "sourceStopId": "2",
        "destStopId": "5",
        "sourceCity": "Clement Town",
        "destCity": "Sahastradhara",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 50,
        "mrp": 65,
        "availableSeats": 21,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "08:15 AM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "08:50 AM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "08:50 AM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.7,
        "reviewCount": 163,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_68",
        "operatorId": "operator_4",
        "busId": "BUS-205",
        "sourceStopId": "2",
        "destStopId": "5",
        "sourceCity": "Clement Town",
        "destCity": "Sahastradhara",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 50,
        "mrp": 65,
        "availableSeats": 22,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "04:00 PM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "04:40 PM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "04:40 PM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.8,
        "reviewCount": 172,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_69",
        "operatorId": "operator_5",
        "busId": "BUS-206",
        "sourceStopId": "2",
        "destStopId": "6",
        "sourceCity": "Clement Town",
        "destCity": "FRI",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 57,
        "mrp": 72,
        "availableSeats": 23,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "08:15 AM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "08:50 AM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "08:50 AM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.9,
        "reviewCount": 181,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_70",
        "operatorId": "operator_1",
        "busId": "BUS-207",
        "sourceStopId": "2",
        "destStopId": "6",
        "sourceCity": "Clement Town",
        "destCity": "FRI",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 57,
        "mrp": 72,
        "availableSeats": 24,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "04:00 PM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "04:40 PM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "04:40 PM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.3,
        "reviewCount": 190,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_71",
        "operatorId": "operator_2",
        "busId": "BUS-208",
        "sourceStopId": "2",
        "destStopId": "8",
        "sourceCity": "Clement Town",
        "destCity": "Robber's Cave",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 41,
        "mrp": 56,
        "availableSeats": 25,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "08:15 AM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "08:50 AM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "08:50 AM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.4,
        "reviewCount": 199,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_72",
        "operatorId": "operator_3",
        "busId": "BUS-201",
        "sourceStopId": "2",
        "destStopId": "8",
        "sourceCity": "Clement Town",
        "destCity": "Robber's Cave",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 41,
        "mrp": 56,
        "availableSeats": 26,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "04:00 PM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "04:40 PM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "04:40 PM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.5,
        "reviewCount": 208,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_73",
        "operatorId": "operator_4",
        "busId": "BUS-202",
        "sourceStopId": "1",
        "destStopId": "3",
        "sourceCity": "ISBT Dehradun",
        "destCity": "Clock Tower",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 61,
        "mrp": 76,
        "availableSeats": 27,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "08:15 AM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "08:50 AM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "08:50 AM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.6,
        "reviewCount": 217,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_74",
        "operatorId": "operator_5",
        "busId": "BUS-203",
        "sourceStopId": "1",
        "destStopId": "3",
        "sourceCity": "ISBT Dehradun",
        "destCity": "Clock Tower",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 61,
        "mrp": 76,
        "availableSeats": 28,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "04:00 PM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "04:40 PM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "04:40 PM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.7,
        "reviewCount": 226,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_75",
        "operatorId": "operator_1",
        "busId": "BUS-204",
        "sourceStopId": "1",
        "destStopId": "4",
        "sourceCity": "ISBT Dehradun",
        "destCity": "Rajpur Road",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 38,
        "mrp": 53,
        "availableSeats": 29,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "08:15 AM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "08:50 AM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "08:50 AM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.8,
        "reviewCount": 235,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_76",
        "operatorId": "operator_2",
        "busId": "BUS-205",
        "sourceStopId": "1",
        "destStopId": "4",
        "sourceCity": "ISBT Dehradun",
        "destCity": "Rajpur Road",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 38,
        "mrp": 53,
        "availableSeats": 30,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "04:00 PM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "04:40 PM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "04:40 PM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.9,
        "reviewCount": 244,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_77",
        "operatorId": "operator_3",
        "busId": "BUS-206",
        "sourceStopId": "1",
        "destStopId": "7",
        "sourceCity": "ISBT Dehradun",
        "destCity": "Prem Nagar",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 59,
        "mrp": 74,
        "availableSeats": 31,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "08:15 AM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "08:50 AM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "08:50 AM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.3,
        "reviewCount": 253,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_78",
        "operatorId": "operator_4",
        "busId": "BUS-207",
        "sourceStopId": "1",
        "destStopId": "7",
        "sourceCity": "ISBT Dehradun",
        "destCity": "Prem Nagar",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 59,
        "mrp": 74,
        "availableSeats": 32,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "04:00 PM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "04:40 PM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "04:40 PM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.4,
        "reviewCount": 262,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_79",
        "operatorId": "operator_5",
        "busId": "BUS-208",
        "sourceStopId": "1",
        "destStopId": "8",
        "sourceCity": "ISBT Dehradun",
        "destCity": "Robber's Cave",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 36,
        "mrp": 51,
        "availableSeats": 33,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "08:15 AM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "08:50 AM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "08:50 AM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.5,
        "reviewCount": 271,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_80",
        "operatorId": "operator_1",
        "busId": "BUS-201",
        "sourceStopId": "1",
        "destStopId": "8",
        "sourceCity": "ISBT Dehradun",
        "destCity": "Robber's Cave",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 36,
        "mrp": 51,
        "availableSeats": 18,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "04:00 PM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "04:40 PM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "04:40 PM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.6,
        "reviewCount": 280,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_81",
        "operatorId": "operator_2",
        "busId": "BUS-202",
        "sourceStopId": "3",
        "destStopId": "1",
        "sourceCity": "Clock Tower",
        "destCity": "ISBT Dehradun",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 57,
        "mrp": 72,
        "availableSeats": 19,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "08:15 AM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "08:50 AM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "08:50 AM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.7,
        "reviewCount": 289,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_82",
        "operatorId": "operator_3",
        "busId": "BUS-203",
        "sourceStopId": "3",
        "destStopId": "1",
        "sourceCity": "Clock Tower",
        "destCity": "ISBT Dehradun",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 57,
        "mrp": 72,
        "availableSeats": 20,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "04:00 PM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "04:40 PM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "04:40 PM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.8,
        "reviewCount": 298,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_83",
        "operatorId": "operator_4",
        "busId": "BUS-204",
        "sourceStopId": "3",
        "destStopId": "5",
        "sourceCity": "Clock Tower",
        "destCity": "Sahastradhara",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 55,
        "mrp": 70,
        "availableSeats": 21,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "08:15 AM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "08:50 AM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "08:50 AM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.9,
        "reviewCount": 307,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_84",
        "operatorId": "operator_5",
        "busId": "BUS-205",
        "sourceStopId": "3",
        "destStopId": "5",
        "sourceCity": "Clock Tower",
        "destCity": "Sahastradhara",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 55,
        "mrp": 70,
        "availableSeats": 22,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "04:00 PM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "04:40 PM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "04:40 PM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.3,
        "reviewCount": 66,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_85",
        "operatorId": "operator_1",
        "busId": "BUS-206",
        "sourceStopId": "3",
        "destStopId": "6",
        "sourceCity": "Clock Tower",
        "destCity": "FRI",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 62,
        "mrp": 77,
        "availableSeats": 23,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "08:15 AM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "08:50 AM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "08:50 AM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.4,
        "reviewCount": 75,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_86",
        "operatorId": "operator_2",
        "busId": "BUS-207",
        "sourceStopId": "3",
        "destStopId": "6",
        "sourceCity": "Clock Tower",
        "destCity": "FRI",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 62,
        "mrp": 77,
        "availableSeats": 24,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "04:00 PM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "04:40 PM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "04:40 PM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.5,
        "reviewCount": 84,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_87",
        "operatorId": "operator_3",
        "busId": "BUS-208",
        "sourceStopId": "3",
        "destStopId": "7",
        "sourceCity": "Clock Tower",
        "destCity": "Prem Nagar",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 39,
        "mrp": 54,
        "availableSeats": 25,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "08:15 AM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "08:50 AM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "08:50 AM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.6,
        "reviewCount": 93,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_88",
        "operatorId": "operator_4",
        "busId": "BUS-201",
        "sourceStopId": "3",
        "destStopId": "7",
        "sourceCity": "Clock Tower",
        "destCity": "Prem Nagar",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 39,
        "mrp": 54,
        "availableSeats": 26,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "04:00 PM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "04:40 PM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "04:40 PM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.7,
        "reviewCount": 102,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_89",
        "operatorId": "operator_5",
        "busId": "BUS-202",
        "sourceStopId": "4",
        "destStopId": "2",
        "sourceCity": "Rajpur Road",
        "destCity": "Clement Town",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 39,
        "mrp": 54,
        "availableSeats": 27,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "08:15 AM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "08:50 AM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "08:50 AM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.8,
        "reviewCount": 111,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_90",
        "operatorId": "operator_1",
        "busId": "BUS-203",
        "sourceStopId": "4",
        "destStopId": "2",
        "sourceCity": "Rajpur Road",
        "destCity": "Clement Town",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 39,
        "mrp": 54,
        "availableSeats": 28,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "04:00 PM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "04:40 PM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "04:40 PM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.9,
        "reviewCount": 120,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_91",
        "operatorId": "operator_2",
        "busId": "BUS-204",
        "sourceStopId": "4",
        "destStopId": "1",
        "sourceCity": "Rajpur Road",
        "destCity": "ISBT Dehradun",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 62,
        "mrp": 77,
        "availableSeats": 29,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "08:15 AM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "08:50 AM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "08:50 AM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.3,
        "reviewCount": 129,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_92",
        "operatorId": "operator_3",
        "busId": "BUS-205",
        "sourceStopId": "4",
        "destStopId": "1",
        "sourceCity": "Rajpur Road",
        "destCity": "ISBT Dehradun",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 62,
        "mrp": 77,
        "availableSeats": 30,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "04:00 PM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "04:40 PM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "04:40 PM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.4,
        "reviewCount": 138,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_93",
        "operatorId": "operator_4",
        "busId": "BUS-206",
        "sourceStopId": "4",
        "destStopId": "6",
        "sourceCity": "Rajpur Road",
        "destCity": "FRI",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 37,
        "mrp": 52,
        "availableSeats": 31,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "08:15 AM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "08:50 AM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "08:50 AM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.5,
        "reviewCount": 147,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_94",
        "operatorId": "operator_5",
        "busId": "BUS-207",
        "sourceStopId": "4",
        "destStopId": "6",
        "sourceCity": "Rajpur Road",
        "destCity": "FRI",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 37,
        "mrp": 52,
        "availableSeats": 32,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "04:00 PM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "04:40 PM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "04:40 PM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.6,
        "reviewCount": 156,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_95",
        "operatorId": "operator_1",
        "busId": "BUS-208",
        "sourceStopId": "4",
        "destStopId": "7",
        "sourceCity": "Rajpur Road",
        "destCity": "Prem Nagar",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 44,
        "mrp": 59,
        "availableSeats": 33,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "08:15 AM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "08:50 AM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "08:50 AM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.7,
        "reviewCount": 165,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_96",
        "operatorId": "operator_2",
        "busId": "BUS-201",
        "sourceStopId": "4",
        "destStopId": "7",
        "sourceCity": "Rajpur Road",
        "destCity": "Prem Nagar",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 44,
        "mrp": 59,
        "availableSeats": 18,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "04:00 PM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "04:40 PM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "04:40 PM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.8,
        "reviewCount": 174,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_97",
        "operatorId": "operator_3",
        "busId": "BUS-202",
        "sourceStopId": "4",
        "destStopId": "8",
        "sourceCity": "Rajpur Road",
        "destCity": "Robber's Cave",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 51,
        "mrp": 66,
        "availableSeats": 19,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "08:15 AM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "08:50 AM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "08:50 AM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.9,
        "reviewCount": 183,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_98",
        "operatorId": "operator_4",
        "busId": "BUS-203",
        "sourceStopId": "4",
        "destStopId": "8",
        "sourceCity": "Rajpur Road",
        "destCity": "Robber's Cave",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 51,
        "mrp": 66,
        "availableSeats": 20,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "04:00 PM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "04:40 PM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "04:40 PM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.3,
        "reviewCount": 192,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_99",
        "operatorId": "operator_5",
        "busId": "BUS-204",
        "sourceStopId": "5",
        "destStopId": "2",
        "sourceCity": "Sahastradhara",
        "destCity": "Clement Town",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 44,
        "mrp": 59,
        "availableSeats": 21,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "08:15 AM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "08:50 AM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "08:50 AM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.4,
        "reviewCount": 201,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_100",
        "operatorId": "operator_1",
        "busId": "BUS-205",
        "sourceStopId": "5",
        "destStopId": "2",
        "sourceCity": "Sahastradhara",
        "destCity": "Clement Town",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 44,
        "mrp": 59,
        "availableSeats": 22,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "04:00 PM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "04:40 PM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "04:40 PM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.5,
        "reviewCount": 210,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_101",
        "operatorId": "operator_2",
        "busId": "BUS-206",
        "sourceStopId": "5",
        "destStopId": "3",
        "sourceCity": "Sahastradhara",
        "destCity": "Clock Tower",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 51,
        "mrp": 66,
        "availableSeats": 23,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "08:15 AM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "08:50 AM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "08:50 AM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.6,
        "reviewCount": 219,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_102",
        "operatorId": "operator_3",
        "busId": "BUS-207",
        "sourceStopId": "5",
        "destStopId": "3",
        "sourceCity": "Sahastradhara",
        "destCity": "Clock Tower",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 51,
        "mrp": 66,
        "availableSeats": 24,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "04:00 PM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "04:40 PM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "04:40 PM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.7,
        "reviewCount": 228,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_103",
        "operatorId": "operator_4",
        "busId": "BUS-208",
        "sourceStopId": "5",
        "destStopId": "6",
        "sourceCity": "Sahastradhara",
        "destCity": "FRI",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 42,
        "mrp": 57,
        "availableSeats": 25,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "08:15 AM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "08:50 AM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "08:50 AM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.8,
        "reviewCount": 237,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_104",
        "operatorId": "operator_5",
        "busId": "BUS-201",
        "sourceStopId": "5",
        "destStopId": "6",
        "sourceCity": "Sahastradhara",
        "destCity": "FRI",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 42,
        "mrp": 57,
        "availableSeats": 26,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "04:00 PM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "04:40 PM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "04:40 PM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.9,
        "reviewCount": 246,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_105",
        "operatorId": "operator_1",
        "busId": "BUS-202",
        "sourceStopId": "5",
        "destStopId": "7",
        "sourceCity": "Sahastradhara",
        "destCity": "Prem Nagar",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 49,
        "mrp": 64,
        "availableSeats": 27,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "08:15 AM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "08:50 AM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "08:50 AM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.3,
        "reviewCount": 255,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_106",
        "operatorId": "operator_2",
        "busId": "BUS-203",
        "sourceStopId": "5",
        "destStopId": "7",
        "sourceCity": "Sahastradhara",
        "destCity": "Prem Nagar",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 49,
        "mrp": 64,
        "availableSeats": 28,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "04:00 PM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "04:40 PM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "04:40 PM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.4,
        "reviewCount": 264,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_107",
        "operatorId": "operator_3",
        "busId": "BUS-204",
        "sourceStopId": "5",
        "destStopId": "8",
        "sourceCity": "Sahastradhara",
        "destCity": "Robber's Cave",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 56,
        "mrp": 71,
        "availableSeats": 29,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "08:15 AM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "08:50 AM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "08:50 AM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.5,
        "reviewCount": 273,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_108",
        "operatorId": "operator_4",
        "busId": "BUS-205",
        "sourceStopId": "5",
        "destStopId": "8",
        "sourceCity": "Sahastradhara",
        "destCity": "Robber's Cave",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 56,
        "mrp": 71,
        "availableSeats": 30,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "04:00 PM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "04:40 PM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "04:40 PM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.6,
        "reviewCount": 282,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_109",
        "operatorId": "operator_5",
        "busId": "BUS-206",
        "sourceStopId": "6",
        "destStopId": "2",
        "sourceCity": "FRI",
        "destCity": "Clement Town",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 49,
        "mrp": 64,
        "availableSeats": 31,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "08:15 AM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "08:50 AM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "08:50 AM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.7,
        "reviewCount": 291,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_110",
        "operatorId": "operator_1",
        "busId": "BUS-207",
        "sourceStopId": "6",
        "destStopId": "2",
        "sourceCity": "FRI",
        "destCity": "Clement Town",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 49,
        "mrp": 64,
        "availableSeats": 32,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "04:00 PM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "04:40 PM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "04:40 PM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.8,
        "reviewCount": 300,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_111",
        "operatorId": "operator_2",
        "busId": "BUS-208",
        "sourceStopId": "6",
        "destStopId": "3",
        "sourceCity": "FRI",
        "destCity": "Clock Tower",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 56,
        "mrp": 71,
        "availableSeats": 33,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "08:15 AM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "08:50 AM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "08:50 AM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.9,
        "reviewCount": 309,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_112",
        "operatorId": "operator_3",
        "busId": "BUS-201",
        "sourceStopId": "6",
        "destStopId": "3",
        "sourceCity": "FRI",
        "destCity": "Clock Tower",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 56,
        "mrp": 71,
        "availableSeats": 18,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "04:00 PM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "04:40 PM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "04:40 PM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.3,
        "reviewCount": 68,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_113",
        "operatorId": "operator_4",
        "busId": "BUS-202",
        "sourceStopId": "6",
        "destStopId": "4",
        "sourceCity": "FRI",
        "destCity": "Rajpur Road",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 63,
        "mrp": 78,
        "availableSeats": 19,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "08:15 AM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "08:50 AM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "08:50 AM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.4,
        "reviewCount": 77,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_114",
        "operatorId": "operator_5",
        "busId": "BUS-203",
        "sourceStopId": "6",
        "destStopId": "4",
        "sourceCity": "FRI",
        "destCity": "Rajpur Road",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 63,
        "mrp": 78,
        "availableSeats": 20,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "04:00 PM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "04:40 PM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "04:40 PM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.5,
        "reviewCount": 86,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_115",
        "operatorId": "operator_1",
        "busId": "BUS-204",
        "sourceStopId": "6",
        "destStopId": "5",
        "sourceCity": "FRI",
        "destCity": "Sahastradhara",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 40,
        "mrp": 55,
        "availableSeats": 21,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "08:15 AM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "08:50 AM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "08:50 AM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.6,
        "reviewCount": 95,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_116",
        "operatorId": "operator_2",
        "busId": "BUS-205",
        "sourceStopId": "6",
        "destStopId": "5",
        "sourceCity": "FRI",
        "destCity": "Sahastradhara",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 40,
        "mrp": 55,
        "availableSeats": 22,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "04:00 PM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "04:40 PM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "04:40 PM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.7,
        "reviewCount": 104,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_117",
        "operatorId": "operator_3",
        "busId": "BUS-206",
        "sourceStopId": "6",
        "destStopId": "7",
        "sourceCity": "FRI",
        "destCity": "Prem Nagar",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 54,
        "mrp": 69,
        "availableSeats": 23,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "08:15 AM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "08:50 AM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "08:50 AM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.8,
        "reviewCount": 113,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_118",
        "operatorId": "operator_4",
        "busId": "BUS-207",
        "sourceStopId": "6",
        "destStopId": "7",
        "sourceCity": "FRI",
        "destCity": "Prem Nagar",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 54,
        "mrp": 69,
        "availableSeats": 24,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "04:00 PM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "04:40 PM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "04:40 PM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.9,
        "reviewCount": 122,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_119",
        "operatorId": "operator_5",
        "busId": "BUS-208",
        "sourceStopId": "6",
        "destStopId": "8",
        "sourceCity": "FRI",
        "destCity": "Robber's Cave",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 61,
        "mrp": 76,
        "availableSeats": 25,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "08:15 AM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "08:50 AM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "08:50 AM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.3,
        "reviewCount": 131,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_120",
        "operatorId": "operator_1",
        "busId": "BUS-201",
        "sourceStopId": "6",
        "destStopId": "8",
        "sourceCity": "FRI",
        "destCity": "Robber's Cave",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 61,
        "mrp": 76,
        "availableSeats": 26,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "04:00 PM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "04:40 PM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "04:40 PM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.4,
        "reviewCount": 140,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_121",
        "operatorId": "operator_2",
        "busId": "BUS-202",
        "sourceStopId": "7",
        "destStopId": "1",
        "sourceCity": "Prem Nagar",
        "destCity": "ISBT Dehradun",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 47,
        "mrp": 62,
        "availableSeats": 27,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "08:15 AM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "08:50 AM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "08:50 AM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.5,
        "reviewCount": 149,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_122",
        "operatorId": "operator_3",
        "busId": "BUS-203",
        "sourceStopId": "7",
        "destStopId": "1",
        "sourceCity": "Prem Nagar",
        "destCity": "ISBT Dehradun",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 47,
        "mrp": 62,
        "availableSeats": 28,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "04:00 PM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "04:40 PM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "04:40 PM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.6,
        "reviewCount": 158,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_123",
        "operatorId": "operator_4",
        "busId": "BUS-204",
        "sourceStopId": "7",
        "destStopId": "3",
        "sourceCity": "Prem Nagar",
        "destCity": "Clock Tower",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 61,
        "mrp": 76,
        "availableSeats": 29,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "08:15 AM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "08:50 AM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "08:50 AM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.7,
        "reviewCount": 167,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_124",
        "operatorId": "operator_5",
        "busId": "BUS-205",
        "sourceStopId": "7",
        "destStopId": "3",
        "sourceCity": "Prem Nagar",
        "destCity": "Clock Tower",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 61,
        "mrp": 76,
        "availableSeats": 30,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "04:00 PM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Ghanta Ghar Main Stand",
                "address": "Paltan Bazaar, City Center",
                "time": "04:40 PM"
            },
            {
                "name": "Gandhi Park Gate",
                "address": "Rajpur Road Entrance",
                "time": "04:40 PM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.8,
        "reviewCount": 176,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_125",
        "operatorId": "operator_1",
        "busId": "BUS-206",
        "sourceStopId": "7",
        "destStopId": "4",
        "sourceCity": "Prem Nagar",
        "destCity": "Rajpur Road",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 38,
        "mrp": 53,
        "availableSeats": 31,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "08:15 AM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "08:50 AM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "08:50 AM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.9,
        "reviewCount": 185,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_126",
        "operatorId": "operator_2",
        "busId": "BUS-207",
        "sourceStopId": "7",
        "destStopId": "4",
        "sourceCity": "Prem Nagar",
        "destCity": "Rajpur Road",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 38,
        "mrp": 53,
        "availableSeats": 32,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "04:00 PM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "04:40 PM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "04:40 PM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.3,
        "reviewCount": 194,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_127",
        "operatorId": "operator_3",
        "busId": "BUS-208",
        "sourceStopId": "7",
        "destStopId": "5",
        "sourceCity": "Prem Nagar",
        "destCity": "Sahastradhara",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 45,
        "mrp": 60,
        "availableSeats": 33,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "08:15 AM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "08:50 AM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "08:50 AM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.4,
        "reviewCount": 203,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_128",
        "operatorId": "operator_4",
        "busId": "BUS-201",
        "sourceStopId": "7",
        "destStopId": "5",
        "sourceCity": "Prem Nagar",
        "destCity": "Sahastradhara",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 45,
        "mrp": 60,
        "availableSeats": 18,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "04:00 PM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "04:40 PM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "04:40 PM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.5,
        "reviewCount": 212,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_129",
        "operatorId": "operator_5",
        "busId": "BUS-202",
        "sourceStopId": "7",
        "destStopId": "6",
        "sourceCity": "Prem Nagar",
        "destCity": "FRI",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 52,
        "mrp": 67,
        "availableSeats": 19,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "08:15 AM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "08:50 AM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "08:50 AM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.6,
        "reviewCount": 221,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_130",
        "operatorId": "operator_1",
        "busId": "BUS-203",
        "sourceStopId": "7",
        "destStopId": "6",
        "sourceCity": "Prem Nagar",
        "destCity": "FRI",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 52,
        "mrp": 67,
        "availableSeats": 20,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "04:00 PM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "04:40 PM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "04:40 PM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.7,
        "reviewCount": 230,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_131",
        "operatorId": "operator_2",
        "busId": "BUS-204",
        "sourceStopId": "7",
        "destStopId": "8",
        "sourceCity": "Prem Nagar",
        "destCity": "Robber's Cave",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 36,
        "mrp": 51,
        "availableSeats": 21,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "08:15 AM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "08:50 AM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "08:50 AM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.8,
        "reviewCount": 239,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_132",
        "operatorId": "operator_3",
        "busId": "BUS-205",
        "sourceStopId": "7",
        "destStopId": "8",
        "sourceCity": "Prem Nagar",
        "destCity": "Robber's Cave",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 36,
        "mrp": 51,
        "availableSeats": 22,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "04:00 PM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "04:40 PM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "04:40 PM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.9,
        "reviewCount": 248,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_133",
        "operatorId": "operator_4",
        "busId": "BUS-206",
        "sourceStopId": "8",
        "destStopId": "2",
        "sourceCity": "Robber's Cave",
        "destCity": "Clement Town",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 59,
        "mrp": 74,
        "availableSeats": 23,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "08:15 AM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "08:50 AM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "08:50 AM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.3,
        "reviewCount": 257,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_134",
        "operatorId": "operator_5",
        "busId": "BUS-207",
        "sourceStopId": "8",
        "destStopId": "2",
        "sourceCity": "Robber's Cave",
        "destCity": "Clement Town",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 59,
        "mrp": 74,
        "availableSeats": 24,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "04:00 PM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Graphic Era University (Gate 1)",
                "address": "Turner Road, Clement Town",
                "time": "04:40 PM"
            },
            {
                "name": "Clement Town Post Office",
                "address": "Subhash Nagar Road",
                "time": "04:40 PM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.4,
        "reviewCount": 266,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_135",
        "operatorId": "operator_1",
        "busId": "BUS-208",
        "sourceStopId": "8",
        "destStopId": "1",
        "sourceCity": "Robber's Cave",
        "destCity": "ISBT Dehradun",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 52,
        "mrp": 67,
        "availableSeats": 25,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "08:15 AM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "08:50 AM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "08:50 AM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.5,
        "reviewCount": 275,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_136",
        "operatorId": "operator_2",
        "busId": "BUS-201",
        "sourceStopId": "8",
        "destStopId": "1",
        "sourceCity": "Robber's Cave",
        "destCity": "ISBT Dehradun",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 52,
        "mrp": 67,
        "availableSeats": 26,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "04:00 PM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "ISBT Platform 3 & 4",
                "address": "Haridwar Bypass Road",
                "time": "04:40 PM"
            },
            {
                "name": "Transport Nagar Chowk",
                "address": "Near ISBT Flyover",
                "time": "04:40 PM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.6,
        "reviewCount": 284,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_137",
        "operatorId": "operator_3",
        "busId": "BUS-202",
        "sourceStopId": "8",
        "destStopId": "4",
        "sourceCity": "Robber's Cave",
        "destCity": "Rajpur Road",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 43,
        "mrp": 58,
        "availableSeats": 27,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "08:15 AM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "08:50 AM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "08:50 AM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.7,
        "reviewCount": 293,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_138",
        "operatorId": "operator_4",
        "busId": "BUS-203",
        "sourceStopId": "8",
        "destStopId": "4",
        "sourceCity": "Robber's Cave",
        "destCity": "Rajpur Road",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 43,
        "mrp": 58,
        "availableSeats": 28,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "04:00 PM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Jakhan Chowk",
                "address": "Rajpur Road, Dehradun",
                "time": "04:40 PM"
            },
            {
                "name": "Pacific Mall Stand",
                "address": "Main Rajpur Road",
                "time": "04:40 PM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.8,
        "reviewCount": 302,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_139",
        "operatorId": "operator_5",
        "busId": "BUS-204",
        "sourceStopId": "8",
        "destStopId": "5",
        "sourceCity": "Robber's Cave",
        "destCity": "Sahastradhara",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 50,
        "mrp": 65,
        "availableSeats": 29,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "08:15 AM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "08:50 AM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "08:50 AM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.9,
        "reviewCount": 61,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_140",
        "operatorId": "operator_1",
        "busId": "BUS-205",
        "sourceStopId": "8",
        "destStopId": "5",
        "sourceCity": "Robber's Cave",
        "destCity": "Sahastradhara",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 50,
        "mrp": 65,
        "availableSeats": 30,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "04:00 PM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Sahastradhara Springs Terminus",
                "address": "Sulphur Springs Road",
                "time": "04:40 PM"
            },
            {
                "name": "Helipad Crossing",
                "address": "Sahastradhara Road",
                "time": "04:40 PM"
            }
        ],
        "busType": "AC Seater Express",
        "operatorName": "Doon City Express",
        "rating": 4.3,
        "reviewCount": 70,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_141",
        "operatorId": "operator_2",
        "busId": "BUS-206",
        "sourceStopId": "8",
        "destStopId": "6",
        "sourceCity": "Robber's Cave",
        "destCity": "FRI",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 57,
        "mrp": 72,
        "availableSeats": 31,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "08:15 AM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "08:50 AM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "08:50 AM"
            }
        ],
        "busType": "City Link EV Low-Floor",
        "operatorName": "Graphic Era Shuttle",
        "rating": 4.4,
        "reviewCount": 79,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_142",
        "operatorId": "operator_3",
        "busId": "BUS-207",
        "sourceStopId": "8",
        "destStopId": "6",
        "sourceCity": "Robber's Cave",
        "destCity": "FRI",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 57,
        "mrp": 72,
        "availableSeats": 32,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "04:00 PM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "FRI Main Arch Gate",
                "address": "Chakrata Road, Dehradun",
                "time": "04:40 PM"
            },
            {
                "name": "Officers Colony Stand",
                "address": "Kaulagarh Road",
                "time": "04:40 PM"
            }
        ],
        "busType": "Valley Shuttle",
        "operatorName": "Valley Rapid Link",
        "rating": 4.5,
        "reviewCount": 88,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_143",
        "operatorId": "operator_4",
        "busId": "BUS-208",
        "sourceStopId": "8",
        "destStopId": "7",
        "sourceCity": "Robber's Cave",
        "destCity": "Prem Nagar",
        "departureDate": "2026-10-23",
        "departureTime": "08:15 AM",
        "arrivalTime": "08:50 AM",
        "duration": "35 mins",
        "price": 64,
        "mrp": 79,
        "availableSeats": 33,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "08:15 AM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "08:15 AM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "08:50 AM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "08:50 AM"
            }
        ],
        "busType": "Doon Express Deluxe",
        "operatorName": "Hill View Transit",
        "rating": 4.6,
        "reviewCount": 97,
        "backendType": "CPP_SYSTEM"
    },
    {
        "id": "trip_144",
        "operatorId": "operator_5",
        "busId": "BUS-201",
        "sourceStopId": "8",
        "destStopId": "7",
        "sourceCity": "Robber's Cave",
        "destCity": "Prem Nagar",
        "departureDate": "2026-10-23",
        "departureTime": "04:00 PM",
        "arrivalTime": "04:40 PM",
        "duration": "40 mins",
        "price": 64,
        "mrp": 79,
        "availableSeats": 18,
        "status": "SCHEDULED",
        "boardingPoints": [
            {
                "name": "Guchhupani Main Gate",
                "address": "Anarwala, Dehradun",
                "time": "04:00 PM"
            },
            {
                "name": "Johri Road Stand",
                "address": "Near Robber's Cave Parking",
                "time": "04:00 PM"
            }
        ],
        "droppingPoints": [
            {
                "name": "Prem Nagar Main Chowk",
                "address": "Chakrata Road, Prem Nagar",
                "time": "04:40 PM"
            },
            {
                "name": "Nanda Ki Chowki",
                "address": "UPES Shuttle Point",
                "time": "04:40 PM"
            }
        ],
        "busType": "Campus Rapid Transit",
        "operatorName": "Uttarakhand Parivahan Local",
        "rating": 4.7,
        "reviewCount": 106,
        "backendType": "CPP_SYSTEM"
    }
];

// --- Standard Seat Layouts ---
export const seatLayouts = {
    SEATER_2x2: {
        rows: 10,
        seatsPerRow: 4,
        seats: [
            { id: "s_1", number: "1A", type: "WINDOW", deck: "lower", row: 1, col: 1, isBooked: false },
            { id: "s_2", number: "1B", type: "AISLE", deck: "lower", row: 1, col: 2, isBooked: false },
            { id: "s_3", number: "1C", type: "AISLE", deck: "lower", row: 1, col: 3, isBooked: false },
            { id: "s_4", number: "1D", type: "WINDOW", deck: "lower", row: 1, col: 4, isBooked: false },
            { id: "s_5", number: "2A", type: "WINDOW", deck: "lower", row: 2, col: 1, isBooked: false },
            { id: "s_6", number: "2B", type: "AISLE", deck: "lower", row: 2, col: 2, isBooked: true },
            { id: "s_7", number: "2C", type: "AISLE", deck: "lower", row: 2, col: 3, isBooked: false },
            { id: "s_8", number: "2D", type: "WINDOW", deck: "lower", row: 2, col: 4, isBooked: false },
            { id: "s_9", number: "3A", type: "WINDOW", deck: "lower", row: 3, col: 1, isBooked: false },
            { id: "s_10", number: "3B", type: "AISLE", deck: "lower", row: 3, col: 2, isBooked: false },
            { id: "s_11", number: "3C", type: "AISLE", deck: "lower", row: 3, col: 3, isBooked: true },
            { id: "s_12", number: "3D", type: "WINDOW", deck: "lower", row: 3, col: 4, isBooked: false },
            { id: "s_13", number: "4A", type: "WINDOW", deck: "lower", row: 4, col: 1, isBooked: false },
            { id: "s_14", number: "4B", type: "AISLE", deck: "lower", row: 4, col: 2, isBooked: false },
            { id: "s_15", number: "4C", type: "AISLE", deck: "lower", row: 4, col: 3, isBooked: false },
            { id: "s_16", number: "4D", type: "WINDOW", deck: "lower", row: 4, col: 4, isBooked: false },
            { id: "s_17", number: "5A", type: "WINDOW", deck: "lower", row: 5, col: 1, isBooked: true },
            { id: "s_18", number: "5B", type: "AISLE", deck: "lower", row: 5, col: 2, isBooked: false },
            { id: "s_19", number: "5C", type: "AISLE", deck: "lower", row: 5, col: 3, isBooked: false },
            { id: "s_20", number: "5D", type: "WINDOW", deck: "lower", row: 5, col: 4, isBooked: false },
            { id: "s_21", number: "6A", type: "WINDOW", deck: "lower", row: 6, col: 1, isBooked: false },
            { id: "s_22", number: "6B", type: "AISLE", deck: "lower", row: 6, col: 2, isBooked: false },
            { id: "s_23", number: "6C", type: "AISLE", deck: "lower", row: 6, col: 3, isBooked: false },
            { id: "s_24", number: "6D", type: "WINDOW", deck: "lower", row: 6, col: 4, isBooked: false },
            { id: "s_25", number: "7A", type: "WINDOW", deck: "lower", row: 7, col: 1, isBooked: false },
            { id: "s_26", number: "7B", type: "AISLE", deck: "lower", row: 7, col: 2, isBooked: false },
            { id: "s_27", number: "7C", type: "AISLE", deck: "lower", row: 7, col: 3, isBooked: false },
            { id: "s_28", number: "7D", type: "WINDOW", deck: "lower", row: 7, col: 4, isBooked: false },
            { id: "s_29", number: "8A", type: "WINDOW", deck: "lower", row: 8, col: 1, isBooked: false },
            { id: "s_30", number: "8B", type: "AISLE", deck: "lower", row: 8, col: 2, isBooked: false },
            { id: "s_31", number: "8C", type: "AISLE", deck: "lower", row: 8, col: 3, isBooked: false },
            { id: "s_32", number: "8D", type: "WINDOW", deck: "lower", row: 8, col: 4, isBooked: false },
            { id: "s_33", number: "9A", type: "WINDOW", deck: "lower", row: 9, col: 1, isBooked: false },
            { id: "s_34", number: "9B", type: "AISLE", deck: "lower", row: 9, col: 2, isBooked: false },
            { id: "s_35", number: "9C", type: "AISLE", deck: "lower", row: 9, col: 3, isBooked: false },
            { id: "s_36", number: "9D", type: "WINDOW", deck: "lower", row: 9, col: 4, isBooked: false },
            { id: "s_37", number: "10A", type: "WINDOW", deck: "lower", row: 10, col: 1, isBooked: false },
            { id: "s_38", number: "10B", type: "AISLE", deck: "lower", row: 10, col: 2, isBooked: false },
            { id: "s_39", number: "10C", type: "AISLE", deck: "lower", row: 10, col: 3, isBooked: false },
            { id: "s_40", number: "10D", type: "WINDOW", deck: "lower", row: 10, col: 4, isBooked: false },
        ]
    },
    SLEEPER_2x1: {
        rows: 6,
        seatsPerRow: 3,
        seats: [
            { id: "sl_1", number: "L1", type: "WINDOW", deck: "lower", row: 1, col: 1, isBooked: false },
            { id: "sl_2", number: "L2", type: "AISLE", deck: "lower", row: 1, col: 2, isBooked: false },
            { id: "sl_3", number: "L3", type: "WINDOW", deck: "lower", row: 1, col: 3, isBooked: false },
            { id: "sl_4", number: "L4", type: "WINDOW", deck: "lower", row: 2, col: 1, isBooked: true },
            { id: "sl_5", number: "L5", type: "AISLE", deck: "lower", row: 2, col: 2, isBooked: false },
            { id: "sl_6", number: "L6", type: "WINDOW", deck: "lower", row: 2, col: 3, isBooked: false },
            { id: "sl_7", number: "L7", type: "WINDOW", deck: "lower", row: 3, col: 1, isBooked: false },
            { id: "sl_8", number: "L8", type: "AISLE", deck: "lower", row: 3, col: 2, isBooked: false },
            { id: "sl_9", number: "L9", type: "WINDOW", deck: "lower", row: 3, col: 3, isBooked: false },
            { id: "sl_10", number: "U1", type: "WINDOW", deck: "upper", row: 1, col: 1, isBooked: false },
            { id: "sl_11", number: "U2", type: "AISLE", deck: "upper", row: 1, col: 2, isBooked: false },
            { id: "sl_12", number: "U3", type: "WINDOW", deck: "upper", row: 1, col: 3, isBooked: false },
            { id: "sl_13", number: "U4", type: "WINDOW", deck: "upper", row: 2, col: 1, isBooked: false },
            { id: "sl_14", number: "U5", type: "AISLE", deck: "upper", row: 2, col: 2, isBooked: false },
            { id: "sl_15", number: "U6", type: "WINDOW", deck: "upper", row: 2, col: 3, isBooked: false },
        ]
    }
};

// --- Sample Bookings ---
export const sampleBookings = [
    {
        "id": "booking_1",
        "pnr": "BUSGO12345",
        "userId": "user_1",
        "tripId": "trip_1",
        "totalAmount": 70,
        "status": "CONFIRMED",
        "paymentMethod": "UPI",
        "isPaid": true,
        "boardingPoint": "Graphic Era University (Gate 1) (07:00 AM)",
        "droppingPoint": "Ghanta Ghar Main Stand (07:35 AM)",
        "passengers": [
            {
                "name": "Agrima Mishra",
                "age": 22,
                "gender": "Female",
                "seatNo": "1A"
            },
            {
                "name": "Krishna Kant",
                "age": 22,
                "gender": "Male",
                "seatNo": "1B"
            }
        ],
        "createdAt": "2026-10-21T18:00:00.000Z"
    },
    {
        "id": "booking_2",
        "pnr": "BUSGO12346",
        "userId": "user_1",
        "tripId": "trip_2",
        "totalAmount": 50,
        "status": "CONFIRMED",
        "paymentMethod": "UPI",
        "isPaid": true,
        "boardingPoint": "ISBT Platform 3 & 4 (08:15 AM)",
        "droppingPoint": "Sahastradhara Springs Terminus (08:50 AM)",
        "passengers": [
            {
                "name": "Aditi Singh",
                "age": 21,
                "gender": "Female",
                "seatNo": "3A"
            }
        ],
        "createdAt": "2026-10-19T14:00:00.000Z"
    },
    {
        "id": "booking_3",
        "pnr": "BUSGO12347",
        "userId": "user_2",
        "tripId": "trip_5",
        "totalAmount": 45,
        "status": "CONFIRMED",
        "paymentMethod": "UPI",
        "isPaid": true,
        "boardingPoint": "Graphic Era University (Gate 1) (09:30 AM)",
        "droppingPoint": "Prem Nagar Main Chowk (10:10 AM)",
        "passengers": [
            {
                "name": "Akhil Gahlawat",
                "age": 22,
                "gender": "Male",
                "seatNo": "5A"
            }
        ],
        "createdAt": "2026-10-18T09:00:00.000Z"
    },
    {
        "id": "booking_4",
        "pnr": "BUSGO12348",
        "userId": "user_1",
        "tripId": "trip_7",
        "totalAmount": 25,
        "status": "CANCELLED",
        "paymentMethod": "COD",
        "isPaid": false,
        "boardingPoint": "Ghanta Ghar Main Stand (11:00 AM)",
        "droppingPoint": "Jakhan Chowk (11:35 AM)",
        "passengers": [
            {
                "name": "Agrima Mishra",
                "age": 22,
                "gender": "Female",
                "seatNo": "2C"
            }
        ],
        "createdAt": "2026-10-17T16:30:00.000Z"
    }
];

// --- Sample Reviews ---
export const sampleReviews = [
    { id: "rev_1", rating: 5, review: "Very punctual shuttle from Graphic Era to Clock Tower! Clean bus.", userId: "user_1", userName: "Agrima Mishra", createdAt: "2026-10-21" },
    { id: "rev_2", rating: 5, review: "Direct connectivity from ISBT to Sahastradhara made travel seamless.", userId: "user_2", userName: "Krishna Kant", createdAt: "2026-10-20" },
    { id: "rev_3", rating: 4, review: "Great AC bus service to Prem Nagar campus. Highly recommended.", userId: "user_3", userName: "Aditi Singh", createdAt: "2026-10-19" },
    { id: "rev_4", rating: 5, review: "Comfortable seating, accurate timings, and easy online ticket booking.", userId: "user_4", userName: "Akhil Gahlawat", createdAt: "2026-10-18" },
];

export const dummyUserData = {
    id: "user_1",
    name: "Agrima",
    email: "agrima@geu.ac.in",
    phone: "+91 98765 43210",
    image: "/profile_pic1.jpg",
};

export const dummyAdminDashboardData = {
    totalBookings: 184,
    totalRevenue: 34800,
    activeOperators: 5,
    totalTripsToday: 64,
    bookingsPerDay: [
        { date: "2026-10-15", bookings: 18 },
        { date: "2026-10-16", bookings: 22 },
        { date: "2026-10-17", bookings: 25 },
        { date: "2026-10-18", bookings: 28 },
        { date: "2026-10-19", bookings: 32 },
        { date: "2026-10-20", bookings: 35 },
        { date: "2026-10-21", bookings: 24 },
    ],
};

export const dummyOperatorDashboardData = {
    todayBookings: 24,
    totalRevenue: 12500,
    avgRating: 4.8,
    totalTrips: 48,
    recentBookings: [
        { pnr: "BUSGO12345", passenger: "Agrima Mishra", route: "Clement Town → Clock Tower", amount: 70, status: "CONFIRMED", date: "2026-10-21" },
        { pnr: "BUSGO12346", passenger: "Aditi Singh", route: "ISBT Dehradun → Sahastradhara", amount: 50, status: "CONFIRMED", date: "2026-10-20" },
        { pnr: "BUSGO12347", passenger: "Akhil Gahlawat", route: "Clement Town → Prem Nagar", amount: 45, status: "CONFIRMED", date: "2026-10-19" },
        { pnr: "BUSGO12348", passenger: "Krishna Kant", route: "Clock Tower → Rajpur Road", amount: 25, status: "CONFIRMED", date: "2026-10-19" },
    ],
};

export const couponDummyData = [
    { code: "CAMPUS20", description: "20% off for Graphic Era students & staff", discount: 20, forNewUser: false },
    { code: "FIRSTBUS", description: "25% off on your first bus booking", discount: 25, forNewUser: true },
    { code: "DOON10", description: "10% off on all local city routes", discount: 10, forNewUser: false },
];

export const storesDummyData = busOperators;

export const popularRoutes = [
    {
        "from": "Clement Town",
        "to": "Clock Tower",
        "trips": 45,
        "startingPrice": 35,
        "image": "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600&auto=format&fit=crop&q=80"
    },
    {
        "from": "ISBT Dehradun",
        "to": "Sahastradhara",
        "trips": 38,
        "startingPrice": 50,
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80"
    },
    {
        "from": "Clement Town",
        "to": "Prem Nagar",
        "trips": 32,
        "startingPrice": 45,
        "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=600&auto=format&fit=crop&q=80"
    },
    {
        "from": "Clock Tower",
        "to": "Rajpur Road",
        "trips": 55,
        "startingPrice": 25,
        "image": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&auto=format&fit=crop&q=80"
    },
    {
        "from": "Clock Tower",
        "to": "Robber's Cave",
        "trips": 28,
        "startingPrice": 40,
        "image": "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&auto=format&fit=crop&q=80"
    },
    {
        "from": "ISBT Dehradun",
        "to": "FRI",
        "trips": 30,
        "startingPrice": 35,
        "image": "https://images.unsplash.com/photo-1600100397608-f010f443b71a?w=600&auto=format&fit=crop&q=80"
    },
    {
        "from": "Clement Town",
        "to": "ISBT Dehradun",
        "trips": 60,
        "startingPrice": 20,
        "image": "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&auto=format&fit=crop&q=80"
    },
    {
        "from": "Rajpur Road",
        "to": "Sahastradhara",
        "trips": 25,
        "startingPrice": 45,
        "image": "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&auto=format&fit=crop&q=80"
    }
];

export const busTypes = ["All", "AC Seater", "City Link", "Valley Shuttle", "Doon Express"];

export const dummyStoreData = {
    id: busOperators[0]?.id || "op_1",
    userId: busOperators[0]?.userId || "user_op_1",
    name: busOperators[0]?.name || "Doon City Express",
    username: "doonexpress",
    description: busOperators[0]?.description || "Premier city transport service.",
    address: "ISBT Terminal, Haridwar Bypass, Dehradun",
    contact: busOperators[0]?.contact || "+91 98100 11111",
    email: busOperators[0]?.email || "info@dooncityexpress.in",
    status: "approved",
    isActive: true,
};
