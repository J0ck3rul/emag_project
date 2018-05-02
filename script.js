

document.getElementById("calendar").style.width="50%";
document.getElementById("calendar").style.margin="auto";
document.getElementById("calendar").style.padding="10%";
//am centrat div-ul

var center_div = document.createElement("div");
center_div.setAttribute("id", "center_div");
document.getElementById("calendar").appendChild(center_div);
// mi am creat div ul de lucru

var p1 = document.createElement("p");
p1.setAttribute("id", "p1");
var p2 = document.createElement("p");
p2.setAttribute("id", "p2");
var p3 = document.createElement("p");
p3.setAttribute("id", "p3");
document.getElementById("center_div").appendChild(p1);
document.getElementById("center_div").appendChild(p2);
document.getElementById("center_div").appendChild(p3);
// am creat dimensiunea calendarului

function calenar()
{
    var day=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var month=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Septemer', 'October', 'November', 'December'];
    var d = new Date();
    setText('p1', day[d.getDay()]);
    setText('p2', d.getDate());
    setText('p3', month[d.getMonth()] + ' ' + d.getFullYear());
};

function setText(id, val)
{
    if(val<10)
    {val='0'+val;
    }
    document.getElementById(id).innerHTML = val;
};

window.onload = calenar;