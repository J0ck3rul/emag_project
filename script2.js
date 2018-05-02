
var prev=0;
var prevYear=0;
var next=0;

function anterior()
{   
    prev++;
    var header = document.getElementById("calendar-month-year");
    header.innerHTML = " ";
    var tabl = document.getElementById("calendar-dates");
    while(tabl.firstChild)
    {
        tabl.removeChild(tabl.firstChild);
    }
    
    var d = new Date();
    var month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = d.getMonth(); 
    var year = d.getFullYear();
    if(prev>12)
    prev = prev%12;
    month = month-prev;
   
    if(month<0)
        {
           month = 12+month;
           year--;
        }

    var first_date = month_name[month] + " " + 1 + " " + year;
    var tmp = new Date(first_date).toDateString();
    var first_day = tmp.substring(0, 3);    //Mon
    var day_name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var day_no = day_name.indexOf(first_day);   //1
    var days = new Date(year, month + 1, 0).getDate();    //30


    

    var calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month] + " " + year;
    
    document.getElementById("calendar-dates").appendChild(calendar);

};

function now()
{   
    var header = document.getElementById("calendar-month-year");
    header.innerHTML = " ";
    var tabl = document.getElementById("calendar-dates");
    while(tabl.firstChild)
    {
        tabl.removeChild(tabl.firstChild);
    }
    
    var d = new Date();
    var month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = d.getMonth();   //0-11
    var year = d.getFullYear(); //2014
    var first_date = month_name[month] + " " + 1 + " " + year;
    //September 1 2014
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

function urm()
{ 
     next++;
    if(next==12)
    {
        year++;
        next=0;
    }
    var header = document.getElementById("calendar-month-year");
    header.innerHTML = " ";
    var tabl = document.getElementById("calendar-dates");
    while(tabl.firstChild)
    {
        tabl.removeChild(tabl.firstChild);
    }

    var d = new Date();
    var month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = d.getMonth();   //0-11
    var year = d.getFullYear(); //2014

month = month-prev+next;

    var first_date = month_name[month] + " " + 1 + " " + year;
    //September 1 2014
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