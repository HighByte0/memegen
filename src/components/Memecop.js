import React, {  useEffect, useState } from "react";

export default function Mems() {
  const [meme,setmeme]=React.useState(
    {
      topText:"",
      bottomText:"",
      randomimg:"https://tse3.mm.bing.net/th?id=OIP.6VIGMTs6iRmLCAa044iSyQHaEK&pid=Api&P=0&h=180"

    }
  )

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json()) 
      .then(data => setallmemeimg(data.data.memes))
  }, [])
  const [allmemimg,setallmemeimg]=React.useState([])
  console.log({allmemimg})

  function getMeme() {
    const memes =allmemimg;
    const rand = Math.floor(Math.random() * memes.length);
    let randurlimg= memes[rand].url
    setmeme(
      prevmeme=>{
        return{
          ...prevmeme,
          randomimg:randurlimg
        }
      }
      
     );
  }
  function handlchancge(event){
    const {name,value}=event.target
    setmeme(
      (prevmeme)=>({
        ...prevmeme,
        [name]:value

        
      })
    )
  }



  return (
    <main>
      <div className="form">
        <label>
          <input type="text" placeholder="top text" className="form--input" name="topText"  value={meme.topText} onChange={handlchancge}  />
        </label>
 
        <label>
          <input type="text" placeholder="bottom text" className="form--input"name="bottomText" value={meme.bottomText}  onChange={handlchancge} />
        </label>

        <button className="form--button" onClick={getMeme}>
          GET A NEW MEME IMAGE
        </button>
      </div>

      <div className="meme">
      <img src={meme.randomimg} className="meme--img" />
      <h2 className="meme--text top " > {meme.topText} </h2>
      <h2 className="meme--text bottom " >  {meme.bottomText}</h2>

      </div>
   
    </main>
  );
}
