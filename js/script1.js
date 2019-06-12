// document.getElementById("prik").addEventListener("mouseover", mouseOver);
// document.getElementById("prik").addEventListener("mouseout", mouseOut);

// function mouseOver() {
//     document.getElementById("prik").style.color = "red";
//     console.log('mouseover')
// }

// function mouseOut() {
//     document.getElementById("prik").style.color = "black";
// }





var total = [];


function storage() {
    var prevData = JSON.parse(localStorage.getItem('total'));

    prevData != null ? total = prevData : '';

    var a = document.getElementById('firstname'),
        b = document.getElementById('lastname'),
        c = document.getElementById('inputEmail'),
        d = document.getElementById('exampleFormControlTextarea1'),
        date1 = new Date(),
        date = date1.toUTCString,
        data = [a.value, b.value, c.value, d.value, date];

    total.push(data);
    localStorage.setItem('total', JSON.stringify(total));
    window.alert("Saved");
}

function transfer() {
    var array = JSON.parse(localStorage.getItem('total')),
        table = document.getElementById('table');

    for (var i = 0; i < array.length; i++) {

        var newRow = table.insertRow(table.length);
        for (var j = 0; j < 4; j++) {

            var cell = newRow.insertCell(j);
            cell.innerHTML = array[i][j];
        }
    }
}

// Name and Password from the register-form


// storing input from register-form
function store() {
    var name = document.getElementById('name').value;
    var pw = document.getElementById('inputPassword').value;

    localStorage.setItem('name', name);
    localStorage.setItem('inputPassword', pw);
    alert('Congratulations! You have been registered.');

    window.location.href = "space.html";
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('inputPassword');

    // entered data from the login-form
    var userName = document.getElementById('userName').value;
    var userPw = document.getElementById('userPw').value;

    // check if stored data from register-form is equal to data from login form
    if (userName !== storedName || userPw !== storedPw) {
        alert('ERROR');
    } else {
        // alert('You are loged in.');
        window.location.href = "space.html";
    }
}
$(document).ready(function() {
  
    $(window).scroll(function () {
        //if you hard code, then use console
        //.log to determine when you want the 
        //nav bar to stick.  
        console.log($(window).scrollTop())
      if ($(window).scrollTop() > 280) {
        $('#nav_bar').addClass('navbar-fixed');
      }
      if ($(window).scrollTop() < 281) {
        $('#nav_bar').removeClass('navbar-fixed');
      }
    });
  });