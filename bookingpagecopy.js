// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


function store() {
  var fname = document.getElementById("firstName").value;
  localStorage.setItem("firstName", fname);

  var lname = document.getElementById("lastName").value;
  localStorage.setItem("lastName", lname);

  var age = document.getElementById("age").value;
  localStorage.setItem("age", age);

  var email = document.getElementById("emailId").value;
  localStorage.setItem("email", email);

  var pnumber = document.getElementById("phoneNumber").value;
  localStorage.setItem("phoneNumber", pnumber);


  var gender_value;
  var gender;

  if (document.getElementById("male").checked) {
    gender_value = document.getElementById("male").value;

  }

  else if (document.getElementById("female").checked) {
    gender_value = document.getElementById("female").value;
  }

  else if (document.getElementById("other").checked) {
    gender_value = document.getElementById("other").value;
  }
  gender = localStorage.setItem("gender", gender_value);


}
//to store values of new passenger
function storeNew() {
  var fname1 = document.getElementById("firstName1").value;
  sessionStorage.setItem("firstName1", fname1);

  var lname1 = document.getElementById("lastName1").value;
  sessionStorage.setItem("lastName1", lname1);

  var age1 = document.getElementById("age1").value;
  sessionStorage.setItem("age1", age1);



  var gender_value1;
  var gender1;

  if (document.getElementById("male1").checked) {
    gender_value1 = document.getElementById("male").value;

  }

  else if (document.getElementById("female1").checked) {
    gender_value1 = document.getElementById("female").value;
  }

  else if (document.getElementById("other1").checked) {
    gender_value1 = document.getElementById("other").value;
  }
  gender1 = sessionStorage.setItem("gender1", gender_value1);


}

function showAddPassenger() {
  if (document.getElementById('addPassenger').checked) {
    document.getElementById('form1').style = "display:true";
    document.getElementById('button1').style.display = 'none';



  }
  else {
    document.getElementById('form1').style.display = 'none';
    document.getElementById('button1').style = "display:true";

  }
}
