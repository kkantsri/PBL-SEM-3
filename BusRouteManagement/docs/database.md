# Database Schema

The system uses a custom text-based serialization system for persistent data. Data is loaded upon system initialization and stored back to the text files upon exit.

## Delimiters
- Main field delimiter: `|`
- Sub-field (Array) delimiter: `,` (Used in Routes to separate stop IDs)

## Files and Formats

### `buses.txt`
**Format**: `busNumber|busName|capacity|seats|routeId|farePerKm`
**Example**: `101|City Express|50|50|1|5.000000`

### `stops.txt`
**Format**: `stopId|stopName|location`
**Example**: `1|Anand Vihar|Zone 1`

### `routes.txt`
This file serves a dual purpose, storing both logical routes and physical graph edges.
**Format (Route)**: `ROUTE|routeId|routeName|stopId1,stopId2,...`
**Format (Edge)**: `EDGE|sourceStopId|destinationStopId|distanceInKm`
**Example**: 
`ROUTE|R1|Express Line|1,2,3`
`EDGE|1|2|4`

### `passengers.txt`
**Format**: `userId|username|password|age|gender`
**Example**: `P10|JohnDoe|pass123|25|M`

### `bookings.txt`
**Format**: `bookingId|passengerId|busNumber|sourceId|destinationId|fare`
**Example**: `BKG101|P10|101|1|5|150.00`
