import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import useDebounce from "../../hooks/useDebounce";



const Navbar = ({ gHQuery }) => {

    const redirect= useLocation().pathname;
    const naviga= useNavigate();

    const debounce = useDebounce();


    // delay search value acquisition

    const handleQuery = e =>{
        debounce(() => gHQuery(e.target.value), 1000);
        
        if(redirect != "/"){
            naviga("/");
        }

    }

return (
    <div className="navbar">
        <nav>
            <Link to="/"> <h1>Cooking Ninja</h1> </Link>
            <div className="navbar--search">
                <span>Search:</span>
                <input type="text" placeholder="Search"
                    onChange={e => handleQuery(e)} />
            </div>
        </nav>
    </div>
)
}

export default Navbar

