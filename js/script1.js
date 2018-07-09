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