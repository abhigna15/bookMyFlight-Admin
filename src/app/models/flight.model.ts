export interface Flight {
    flightId: number;
    flightName: string;
    seatCount: number;
}

export interface Trip {
    id: number;
    routeName: string;
    sourceTime : string;
    destinationTime : string;
    passengerCount: number;
    price: number;
    flight_Id: number;
    tripRoute_Id: number;
}
