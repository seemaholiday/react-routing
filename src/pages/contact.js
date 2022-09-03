import React from "react"
import Menu from "../component/menu"
import { useNavigate } from "react-router-dom"
const Contactus = () => {
    const history = useNavigate();
    const handleRedirect = () => {
        history('/aboutus')
    }
    return(
        <div style={{marginTop:'50px'}}>
            <Menu/>
            <h1>Welcome Contact Us || Seema Holiday Developer</h1>
            <input/>
            <button onClick={handleRedirect}>Submit</button>
        </div>
        
    )
}
export default Contactus