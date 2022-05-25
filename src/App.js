import {useState} from "react"
import { Board } from "./Board";
import { Score } from "./Score";
// const getImageURLs=(n)=>fetch("https://api.jikan.moe/v4/anime/21/characters").then(resp=>resp.json()).then(data=>data.data.slice(0,n).map((charObj)=>charObj.character.images.jpg.image_url))
function App() {
  const [score,setScore]=useState(0)
  const incrementScore=()=>setScore(score+1)
  const playerLost=()=>{
    setScore(0)
  }
  return (
    <div className="App">
      <Score score={score}/>
      <Board playerLost={playerLost} incrementScore={incrementScore} score={score}/>
    </div>
  );
}

export default App;
