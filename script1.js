window.onload = function () {
    var d = new Date();
    var month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = d.getMonth();   //0-11
    var year = d.getFullYear(); //2014
    var first_date = month_name[month] + " " + 1 + " " + year;
    //September 1 2018
    var tmp = new Date(first_date).toDateString();
    //Mon Sep 01 2014 ...
    var first_day = tmp.substring(0, 3);    //Mon
    var day_name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var day_no = day_name.indexOf(first_day);   //1
    var days = new Date(year, month + 1, 0).getDate();    //30
    //Tue Sep 30 2014 ...
    var calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month] + " " + year;
    
    document.getElementById("calendar-dates").appendChild(calendar);
}

function get_calendar(day_nr, days) {
    var table = document.createElement('table');
    var tr = document.createElement('tr');

    for (var i = 0; i < 7; i++) {
        var td = document.createElement('td');
        if (i == 0)
            td.innerHTML = "D";
        if (i == 1)
            td.innerHTML = "L";
        if (i == 2)
            td.innerHTML = "M";
        if (i == 3)
            td.innerHTML = "M";
        if (i == 4)
            td.innerHTML = "J";
        if (i == 5)
            td.innerHTML = "V";
        if (i == 6)
            td.innerHTML = "S";

        tr.appendChild(td);

    }
    table.appendChild(tr);
     
    

    tr = document.createElement('tr');
    var i;
    for (i = 0; i < 7; i++) {
        if (i == day_nr) {
            break;
        }
        td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }
    var zile = 1;
    for (; i < 7; i++) {
        td = document.createElement('td');
        td.innerHTML = zile;
        zile++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
    // gata primele 2 randuri

    //randul 3
    for (var c = 3; c < 7; c++) {

        tr = document.createElement('tr');
        for (i = 0; i < 7; i++) {

            if (zile > days) {
                table.appendChild(tr);
                return table;
            }

            td = document.createElement('td');
            td.innerHTML = zile;
            zile++;
            tr.appendChild(td);
        }
        table.appendChild(tr);

    }
    return table;


}
