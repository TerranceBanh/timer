'use strict'
//Measurements of time (Variables)
let sec = 0, min = 0, hour = 0, day = 0;

//Time Conversion
const sec0  = () => {if (sec  === 60){sec  = 0;}};
const min0  = () => {if (min  === 60){min  = 0;}};
const hour0 = () => {if (hour === 24){hour = 0;}};

//HTML Document Variable
const timer = document.getElementById('html-timer');

//HTML Timer Controls
let onOff = false;
const timerOn = () => {
    if (onOff !== true) {
        onOff = true;
        console.log('');
        console.log(`START - onOff value is ${onOff}`);
        console.log('');
        timer.innerHTML = 'Time Elapsed: 0 seconds';
    }
};
const timerOff = () => {
    if (onOff !== false) {
        onOff = false;
        console.log('');
        console.log(`STOP - onOff value is ${onOff}`);
        console.log('');
    }
};
const timerReset = ()=> {
    if (sec > 0 || min > 0 || hour > 0 || day > 0) {
        console.log('');
        console.log(`Value Reset:`);
        console.log(`Seconds  = 0`);
        console.log(`Minuntes = 0`);
        console.log(`Hours    = 0`);
        console.log(`Days     = 0`);
        console.log('');
    }
    sec  = 0;
    min  = 0;
    hour = 0;
    day  = 0;
    timer.innerHTML = 'Time Elapsed: 0 seconds';
};

//Dispaly Time
const displaySecond = () => {
    if(sec === 1){console.log(      `Time Elapsed: ${sec} second       `);} 
    else         {console.log(      `Time Elapsed: ${sec} seconds      `);}
    if(sec === 1){timer.innerHTML = `Time Elapsed: ${sec} second &nbsp;` ;} 
    else         {timer.innerHTML = `Time Elapsed: ${sec} seconds      ` ;}
    return sec;
},
      displayMinute = () => {
    console.log(      `Time Elapsed: ${min}m:${sec}s`);
    timer.innerHTML = `Time Elapsed: ${min}m:${sec}s` ; 
    return min;
},
      displayHour = () => {
    console.log(      `Time Elapsed: ${hour}h:${min}m:${sec}s`);
    timer.innerHTML = `Time Elapsed: ${hour}h:${min}m:${sec}s` ;
    return hour;
},
      displayDay = () => {
    console.log(      `Time Elapsed: ${day}d:${hour}h:${min}m:${sec}s`);
    timer.innerHTML = `Time Elapsed: ${day}d:${hour}h:${min}m:${sec}s` ;
    return day;
 };

//Timer Execution
let time = setInterval(() => {
    if (onOff === true){
        
        // Counter
        if (sec   <  60) {sec++;}
        if (sec  === 60) {min++;}
        if (min  === 60) {hour++;}
        if (hour === 24) {day++;}

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
    }
}, 1000/*Milliseconds Per Post*/);