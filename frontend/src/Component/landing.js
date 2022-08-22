import landing from "../landing.png"
import { Link} from "react-router-dom"
import "./app.css"
const Landing =()=>{
    return(
        <>
        <div className="container">
        <div className="landing">
        <img src={landing} alt="Landing"/>
        </div>
        <div className="btn">
        <h1>10x Team 04</h1>
        <Link to="postview"><button>Enter</button></Link>
        </div>
        </div>
        
        
        
        </>
    )
}
export default Landing