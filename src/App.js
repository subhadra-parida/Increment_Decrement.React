// INCREASE OR DECREASE-------
import React,{useState} from 'react';
import './App.css'
export default function Myname(){
  const [likeCounter, setLikeCounter] = useState(0);
  const [dislikeCounter, setDislikeCounter] = useState(0);
  return[
    <div>
      <h1>{likeCounter}</h1>
      <button id="button1" onClick={()=>{
        setLikeCounter(likeCounter+1)
      }}>INCREASE</button>
      <button id="button2" onClick={()=>{
        setDislikeCounter(dislikeCounter-1)
        if (dislikeCounter===0){
          setLikeCounter(0)
        }
      }}>DECREASE</button>
    </div>
  ]
}
