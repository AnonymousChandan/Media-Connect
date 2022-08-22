import Landing from "./Component/landing"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Psotview from "./Component/postview"
import Form from "./Component/form"
const App=()=>{
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Landing/>}></Route>
      <Route path="/postview" element={<Psotview/>}></Route>
      <Route path="/form" element={<Form/>}></Route>
    </Routes>
    </BrowserRouter>
    
  )
}
export default App
