import React, {useState} from 'react';
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import {Nav} from "react-bootstrap";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from "./SidebarData";
import {IconContext} from "react-icons";
import './SidebarData.css'

const Sidebar = () => {
    //STATE STUFF
    const [sidebar, setSidebar] = useState(false);
    //Sidebar Toggle
    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div>
            <IconContext.Provider value={{color: 'grey'}}>
                <div className="navbar">
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                </div>
                <Nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose/>
                            </Link>
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.className}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </Nav>
            </IconContext.Provider>
        </div>
    );
};

export default Sidebar;
