// Create a "close" button and append it to each list item
//  var myNodelist = document.getElementsByTagName("tr");
//  var i;
// for (i = 0; i < myNodelist.length; i++) {
//    var span = document.createElement("SPAN");
//       var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//    span.appendChild(txt);
//    myNodelist[i].appendChild(span);
//  }

// // // Click on a close button to hide the current list item
//  var close = document.getElementsByClassName("close");
//  var i;
//  for (i = 0; i < close.length; i++) {
//    close[i].onclick = function() {
//      var div = this.parentElement;
//      div.style.display = "none";
//    }
//  }

// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("Field can not be left empty");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }
var ttt = [];

function stock() {
  var previous = JSON.parse(localStorage.getItem('ttt'));

  previous != null ? ttt = previous : '';

  var e = document.getElementById('item'),
      f = document.getElementById('duedate'),
      g = document.getElementById('postdate'),
      haitch = "pending",
      whatever='<input type="checkbox" class="gogomi" /> <i class="fa fa-pencil"></i> <i class="fa fa-trash-o"></i>' 
      // date1 = new Date(),
      // date = date1.toUTCString,
      data = [e.value, f.value, g.value, haitch, whatever];

  ttt.push(data);
  localStorage.setItem('ttt', JSON.stringify(ttt));
  // window.alert("Saved");
}

function trans() {
  var array1 = JSON.parse(localStorage.getItem('ttt')),
      table1 = document.getElementById('tabula');

  for (var i = 0; i < array1.length; i++) {

      var newRow1 = table1.insertRow(table1.length);
      for (var j = 0; j < 5; j++) {

          var cell = newRow1.insertCell(j);
          cell.innerHTML = array1[i][j];
      }
  }
}


