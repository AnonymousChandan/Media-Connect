import "./app.css"
import axios from "axios"
import icon from "./icon.png"
import camera from "./camera@2x.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
const Form = () => {
    const navigate=useNavigate()
    const [data, setData] = useState({
        file:null,
        author:"",
        location:"",
        desc:""
    })
    const handleSubmit = (e) => {
        e.preventDefault()

        const formData =new FormData()
        formData.append("author",data.author)
        formData.append("location",data.location)
        formData.append("desc",data.desc)
        formData.append("file",data.file)
        axios.post(
            "https://project-server-side.herokuapp.com/upload",
            formData,
            {"content-type":"multipart/form-data"}
        )
        navigate("/postview")
    }
    const handleChange=(e)=>{
        const {name,value}=e.target
        setData(prevData=>({...prevData,[name]:value}))
     
    }
    const handleUpload=(e)=>{
        const uploadedfile=e.target.files[0]
        setData(prevData=>({...prevData,file:uploadedfile}))
      
    }
    return (
        <>
            <div className="main">

                <form id="form" onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="forma">
                        <div>
                            <input id="filetype" type="file" name="file" onChange={handleUpload} />
                        </div>
                        <input type="text" placeholder="Author" name="author" id="author" onChange={handleChange} />
                        <input type="text" placeholder="Location" name="location" id="location" onChange={handleChange} />
                        <div>
                            <input type="text" placeholder="Description" name="desc" id="discription" onChange={handleChange} />
                        </div>
                   <button type="submit">Post</button>
                    </div>
                </form>
            </div>
            <div>
                <div className="nav">
                    <img className="icon" src={icon} alt="icon" />
                    <img className="camera" src={camera} alt="camera" />
                    <h1 className="clone">Instaclone</h1>
                </div>
            </div>

        </>
    )
}
export default Form