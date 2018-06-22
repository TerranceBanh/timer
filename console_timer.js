'use strict'
//Measurements of time(Variables)
let sec = 0, min = 0, hour = 0, day = 0;

//Time Conversion
const sec0  = () => {if (sec  === 60){sec  = 0;}};
const min0  = () => {if (min  === 60){min  = 0;}};
const hour0 = () => {if (hour === 24){hour = 0;}};

//Dispaly Time
const displaySecond = () => {
    if(sec === 1){console.log(`Time Elapsed: ${sec} second `);} 
    else         {console.log(`Time Elapsed: ${sec} seconds`);}
    return sec;
},
      displayMinute = () => {
    console.log(`'Time Elapsed: ${min}m:${sec}s`); 
    return min;
},
      displayHour = () => {
    console.log(`'Time Elapsed: ${hour}h:${min}m:${sec}s`);
    return hour;
},
      displayDay = () => {
    console.log(`'Time Elapsed: ${day}d:${hour}h:${min}m:${sec}s`);
    return day;
 };

//Timer Execution
let time = setInterval(() => {
    
    // Counter
    if (sec   <  60) {sec++;}
    if (sec  === 60) {min++;}
    if (min  === 60) {hour++;}
    if (hour === 24) {day++;}
    
    // Console Log Display
    
    // Display in seconds
    if (min === 0 && hour === 0 && day === 0) {
        displaySecond();
    }
    
    // Display In Minutes & Seconds    
    else if (hour === 0 && day ===0){
        sec0();//Reset seconds to zero before full minute
        displayMinute();
    }
    
    // Display In Hours & Minutes & Seconds    
    else if (day === 0) {
        sec0(); min0();//Reset minutes to zero before full hour
        displayHour();
    }
    
    // Display In Days & Hours & Minutes & Seconds
    else {
        sec0(); min0(); hour0();//Reset hours to zero before full day
        displayDay();
    }
}, 1000/*Milliseconds Per Post*/);

module.exports = {
    sec: sec,
    min: min,
    hour: hour,
    day: day
};