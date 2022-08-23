function display_cards(flight_det){
    const number_of_flights = Object.keys(flight_det).length; //number of flights in the json
    console.log(number_of_flights);
    let content = '';
    for(let count=0;count<number_of_flights;count++){
        let flight = flight_det[count];

        let flight_num = new Date(flight.flightNum)
        const departure = new Date(flight.departTime)
        const arrival = new Date(flight.ArrivalTime)
        let flight_from = new Date(flight.origin)
        let flight_to = new Date(flight.destination)
        let fare = new Date(flight.price)

        content +=  `
        <div class="card" >
            <div class="card-body">
                
                <h6>Flight Number</h5>
                <p class="Flight-number">${flight_det[count]['flightNum']}</p>
                <h6>Origin</h5>
                <p class="origin">${flight_det[count]['origin']}</p>
                <h6>Destination</h5>
                <p class="destination">${flight_det[count]['destination']}</p>
                <h6>Departure</h5>
                <p class="departure-time">${departure.toUTCString()}</p>
                <h6>Arrival</h5>
                <p class="arrival-time">${arrival.toUTCString()}</p>
                <h6>Price</h5>
                <p class="price">&#8377;${flight_det[count]['price']}</p>
                <button type="button" class="btn btn-primary" id="flight${flight_det[count]['id']}" onclick="location.href='bookingpagecopy.html'; get_flight_details(${flight_det[count]['id']});">Proceed</button>
            </div>
        </div>

    `

    }
    document.querySelector("#card-collection").innerHTML = content;
}

fetch('flights.json')
.then(response => response.json())
.then(data => display_cards(data));

function get_flight_details(flightid1){
    localStorage.setItem("flightid",flightid1);
}