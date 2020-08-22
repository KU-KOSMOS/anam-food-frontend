import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SidebarData} from './SidebarData';
import './Navbar.css';

class Navbar extends Component{
   
    render(){
    const {sidebar, showSidebar} = this.props;
    return(
        <>
                <Link to='#' className="menu-bars">
                      <FaBars onClick={showSidebar}/>
                  </Link>
            <nav className= {sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar }>

                    {SidebarData.map((item, index) =>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to ={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav> 
    
        </>
    );
    }
}
export default Navbar;