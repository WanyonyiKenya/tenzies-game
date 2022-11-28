import React from "react";


export default function Timer (){

    const [timer, setTimer]= React.useState('00:00:00')

    const remainingTime = (e) => {
        const compTime =Date.parse(e) - Date.parse(new Date())
        console.log(compTime)
        const seconds = Math.floor((compTime / 1000 ) % 60 )
         const minutes = Math.floor((compTime / 1000 / 60 ) %60) 
        const hours = Math.floor((compTime / 1000 / 60 / 60 ) %24)

        console.log(hours,minutes,seconds)

        return{
            compTime, hours, minutes,seconds
        }
     } 


     const startTime = (e) => {
        let {compTime, hours, minutes, seconds} = remainingTime (e)
        if (compTime >= 0){
            setTimer(
                (hours > 9 ? hours : '0'+ hours) + ':' +
                (minutes > 9 ? minutes : '0'+ minutes) + ':' +
                (seconds > 9 ? seconds : '0'+ seconds)
            )

        }
     }


    const getDeadTime = () => {
        let deadline = new Date();
  
        // This is where you need to adjust if 
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + 10);
        return deadline;
    }
   

      return (
        <div>
            {timer}
        </div>
    )
}