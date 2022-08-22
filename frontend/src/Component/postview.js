import "./app.css"
import icone from "./icon.png"
import camera  from "./camera@2x.png"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import moreIcon from "./more_icon.png"
import heart from "./heart.png"
import share from "./share.png"
const Psotview=()=>{
  const [result,setData]=useState([])
  useEffect(()=>{
    fetch("https://project-server-side.herokuapp.com/posts").then((data)=>data.json()).then((result)=>{
      setData(result)
    })
  },[])
  const [like,SetLike]=useState(0)
  const HandleLike=()=>{
    SetLike(like+1)
  }
    return(
    <>

    <div className="body">
    <div className="nav">
      <img className="icon" src={icone} alt="icon" />
     <Link to="/form"><img className="camera" src={camera} alt="camera" /></Link> 
      <h1 className="clone">Instaclone</h1>
    </div>
    {
    result.map((user)=>{
        return (
          <div className="mainData">
          <div className="autor">{user.author}</div>
          <div className="locate">{user.location}</div>
          <div className="dots"><img src={moreIcon} alt="Moreicon"/></div>
          <img className="selfie" src={`https://project-server-side.herokuapp.com/${user.path}`} alt="sahithi" />
          <div className="heart"><img className="hea" src={heart} onClick={HandleLike} alt="heart"/>
          <p>{like} likes</p>
          <img className="share" src={share} alt="heart"/>
          </div>
          <div className="disc" >{user.description}</div>
          <div className="date">{user.date}</div>
          
          </div>
        )
      })
    }
    </div>
    

    </>
    )
}
export default Psotview