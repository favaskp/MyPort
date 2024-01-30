
import { NavLink } from "react-router-dom";
import inst_logo from "../assets/insta_logo.png"
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";

const NavMenu = ()=>{

    const [activeIndex,setActiveIndex] = useState((localStorage.getItem("ActiveIndex")) || 0)

    const onMenuClickHandler = (Index)=>{
        console.log(Index)
        setActiveIndex(Index)
    }

    useEffect(()=>{
        localStorage.setItem("ActiveIndex",activeIndex)
    },[activeIndex])


    return(
            <> 
            <div className="main">
                <div className="nav_parent">
                    <div className="logo_section" >
                        <img src={inst_logo} alt="No Image Found"/>
                        <div className="logo_heading"> <Typography variant="h6">DEMO PROJECT</Typography></div>
                    </div>
                    <NavLink to='/dashboard' className={`nav_menus ${activeIndex == 0 ? "active_menu":""}`} onClick={()=>onMenuClickHandler(0)}>
                        <div > 
                            <div>Dashboard</div>
                        </div>
                    </NavLink>
                    <NavLink to='/userprofile' className={`nav_menus ${activeIndex == 1 ? "active_menu":""}`} onClick={()=>onMenuClickHandler(1)}>
                        <div> 
                            <div>User Profile</div>
                        </div>
                    </NavLink>
                    <NavLink to='/tablelist' className={`nav_menus ${activeIndex == 2 ? "active_menu":""}`} onClick={()=>onMenuClickHandler(2)}>
                        <div> 
                            <div>Table List</div>
                        </div>
                    </NavLink>
                    
                </div>
            </div>
            </>
    )
}
export default NavMenu