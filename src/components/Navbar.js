import React, {useState} from "react"
import "../App.css"
import ReorderIcon from '@material-ui/icons/Reorder'
import SearchIcon from '@material-ui/icons/Search'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false)
    return(
        <div className="Navbar">
            <div className="leftside">
                <div className="Links" id={showLinks ? "hidden":" "}>
                    <a href="/home">Home</a>
                    <a href="/feedback">Feedback</a>
                    <a href="/aboutus">About us</a>
                    <a href="/contact">Contact</a>
                </div>
                <button onClick={()=> setShowLinks(!showLinks)}><ReorderIcon /></button>
            </div>
            <div className="rightside">
                <input type="text" placeholder="Search.."></input>
                <button><SearchIcon /></button>
            </div>
        </div>
    )
}

export default Navbar