import React, { useState } from 'react';
import { TimerButton } from '../TimerButton/TimerButton'
export const Timer = () => {

    let [second, setSeconds] = useState<number>(0)
    let [minute, setMinute] = useState<number>(0)
    let [hour, setHour] = useState<number>(0)
    let [status, setStatus] = useState<number>(0);
    let [interv, SetInterval] = useState<any>()
    //start
    const run = () => {
        // In status we are sifting/updating the value because we want stop and start timer again 
        if (status !== 1) {
            setStatus(1)
            // we make the set interval state because we later stop and reset the  timer
            SetInterval(
                setInterval(() => {
                    start()
                }, 1000)
            )
        }

    }
    function start() {
       if(second === 60){
         ++minute
         setMinute(minute)  
         second=0
       }
       if(hour === 60){
           hour++
           setHour(hour)
           minute=0
       }
       setSeconds(++second) 
    }
    // stop
function stop(){
    if(status !== 0){
        setStatus(2)
        clearInterval(interv)
    }
}

    //reset


    return (
        <div>
            <span>{hour < 10 ? `0${hour}`: hour}</span>
            <span>{minute < 10 ? `0${minute}` : minute}</span>
            <span>{second < 10 ? `0${second}` : second}</span>
            <TimerButton
                buttonAction={run}
                buttonValue={"Start"}
            />
            <TimerButton 
             buttonAction={stop}
             buttonValue={"Stop"}
            />
        </div>
    )
}
