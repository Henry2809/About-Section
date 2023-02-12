function GetCurrentTime(){
     const date = new Date();
     let current_time = date.toLocaleTimeString();
     return console.log('Current Time is: '+current_time);
 }

function GetCurrentDate(){
     const date = new Date();
     let day = date.getDate();
     let month = date.getMonth() + 1;
     let year = date.getFullYear();

     let currentDate = `${year}-${month}-${day}`;
     return console.log('Current Date: '+currentDate);
     //return currentDate;
}

let date2;

function Getdays(){
    const date1 = new Date();
    
     // let day = date.getDate();
     // let month = date.getMonth() + 1;
     // let year = date.getFullYear();

     // console.log('Current Year: '+year);
     // console.log('Current Month: '+month);
     // console.log('Current Date: '+day);

     let date2 = new Date('2/10/2023');

     // let isastring = prompt("Enter a date in the format 'month, day, year': ");
     // let parts = isastring.split(" ");
     // let month = parts[0];
     // let day = parts[1].slice(0, -1);
     // let year = parts[2];

     // let date2= new Date(year, day, month);

     //console.log(date2);



    // date2 = prompt("Enter a date in the format 'month/date/year': ");
     //var d2 = new Date(date2);

     //console.log(d2);

     let difference = date1.getTime() - date2.getTime();
     let TotalDays = Math.ceil(difference / (1000 * 3600 * 24)-1);
     return console.log(TotalDays + ' day(s) away from the current the crime');
        
}
GetCurrentTime();
GetCurrentDate();
Getdays();