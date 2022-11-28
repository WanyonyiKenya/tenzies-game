import React from "react";
import './sty.css'
import Die from "./components/Die";
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'


function App() { 
  const [dice, setDice] = React.useState(allNewDice())
   //console.log(dice)
   const[tenzies, setTenzies] = React.useState(false)

   const[count,setCount] = React.useState(0)

  //  const [time, setTime] = React.useState(0)


  //  const x = setTime(17)
  //  const [endTime, setEndTime] = React.useState(0)


  //  const start = tenzies ?  0 : setTime(prevT => Date.now())
  //  const end =  tenzies ? setTime(prevT => Date.now()) : start


  //  function totalTime (tenzies, count){
  //   let start,end,duration = time
  //   this.start = function(){
  //     if (!tenzies)
  //     return start = new Date ()
  //   }
  //   this.end = function (){
  //     if (tenzies)
  //     return end = new Date()

  //     const timeInSeconds = (end.getTime() - start.getTime())/1000
  //     duration += timeInSeconds
  //     console.log(duration)
  //   }
  //   // Object.defineProperty(this,'duration', {
  //   //       get: function(){
  //   //         return duration
  //   //       }
  //   // })
  //   setTime(duration)
    
   

  //  const newD = new Date.now()
  //   const newD2 = setTimeout(()=>{
  //         const x = new Date.now()
  //         return(x.getTime())
  //   },3000)
  //  console.log((newD2-newD.getTime())/1000)
   
  

  // const timer = Date.now()
  // const dispTime = setTimeout( ()=>{
  //   const  newTime = Math.floor(timer/1000)
  //   console.log(newTime)
  // },60000 )
 


  function allNewDice (){
    const newDice = []
    for( let i = 0; i < 10;  i++ ){
      newDice.push({
        value: Math.floor(Math.random()* (6-1) + 1 ),
        isHeld:false,
        id: nanoid()
      })
    }
    return newDice
  }
  //console.log(allNewDice())
  function newGame (){
    setTenzies(false)
    setCount(0)
    // setTime(0)
  setDice(allNewDice())
   }

 function handleRoll (){
     setCount (count + 1) 
     setDice(oldDice => oldDice.map(die => {
      return die.isHeld ? die : { value: Math.floor(Math.random()* (6-1) + 1 ),
        isHeld:false,
        id: nanoid()}
     }))
 }

 function rollDice(id){
  console.log('clicked die to change', id)
 
   setDice(oldDice => oldDice.map(dice => {
    return dice.id === id ?
     {...dice, isHeld:!dice.isHeld} :
    { ...dice}
   }))
 }

 React.useEffect(()=>{
  const allHeld = dice.every(die => die.isHeld)
  const firstValue  = dice[0].value
  const sameValue = dice.every(die => die.value === firstValue)
   if(allHeld && sameValue) {
    setTenzies(true)
    console.log('You Won')
  } 
 }, [dice])

//  const Time = 
 


   const DisplayDice = dice.map(die => (
                  <Die
                  id ={die.id}
                  key = {die.id}
                  value = {die.value}
                  held = {die.isHeld}
                  rollDice ={rollDice}
                    />
   ))
  return (
    
    <main>
      {tenzies && <Confetti /> }
      <div className="dice-container">
       {DisplayDice}
        
      </div>

       {tenzies ? 
       <div>
        <button className="roll-dice" onClick={newGame}>New Game </button> 
        <small> time</small>
       </div>: 
       <div>
         <button  className="roll-dice" onClick={handleRoll}>Roll {count} </button> 
       </div>
       }
    </main>
  );
}

export default App;
