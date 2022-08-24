let flight_det=localStorage.getItem("flightid");
let det1=localStorage.getItem("firstName");
let det2=localStorage.getItem("lastName");
let det3=localStorage.getItem("age");
let det4=localStorage.getItem("gender");
let det5=localStorage.getItem("email");
let det6=localStorage.getItem("phoneNumber");
let det7=sessionStorage.getItem("firstName1");
let det8=sessionStorage.getItem("lastName1");
let det9=sessionStorage.getItem("age1");
let det10=sessionStorage.getItem("gender1");

flight_det-=1;
console.log(flight_det);


let content='';

function display_value(data)
{
   departure=new Date(data[flight_det].departTime);
   arrival=new Date(data[flight_det].ArrivalTime);

   content +=  `
   <div class="final_info">
    <div class="details" >
    <h2> Passenger details </h2>
    <h4> Name: ${det1} ${det2}</h4>
    <h4> Age: ${det3} </h4>
    <h4> Gender: ${det4}</h4>
    <h4> Email: ${det5}</h4>
    <h4> Phone Number: ${det6}</h4>
    </div>

    <div style="display:none;" class="details" id="newPassenger" >
    <h2> Additional Passenger details </h2>
    <h4> Name: ${det7} ${det8}</h4>
    <h4> Age: ${det9} </h4>
    <h4> Gender: ${det10}</h4>
    </div>

    <div class="details" >
    <h2> Flight details </h2>
    <h4> Flight Number: ${data[flight_det].flightNum}</h4>
    <h4>Origin: <span> ${data[flight_det].origin}</span></h4>
    <h4>Destination: <span> ${data[flight_det].destination}</span></h4>
    <h4>Departure: <span>${departure.toUTCString()} </span></h4>
    <h4>Arrival: <span>${arrival.toUTCString()} </span></h4>
    <h4>Price: <span> &#8377;${data[flight_det].price}</h4>
    </div>
    </div>

`
document.querySelector("#card-collection").innerHTML = content;

if (det7!=null){
    document.getElementById('newPassenger').style = "display:true";
}
else{
    document.getElementById('newPassenger').style.display = none;

}
}


fetch('flights.json')
.then(response => response.json())
.then(data => display_value(data));
