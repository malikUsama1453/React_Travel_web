import React, { Component } from "react";
import "./Navbar.css";
import Menulist from "./Menulist";

class Navbar extends Component {
    state={clicked: false };
    handleClick=()=>{
        this.setState({clicked: !this.state.clicked})
    }
render() {
    return (
    <nav className='NavbarItems'> 
        <h1 className="navbar-logo">Travalers</h1>
        
        <div className="menu-icons"
        onClick={this.handleClick}>
            <i className={this.state.clicked ? 
            "fas fa-times": "fas fa-bars"}></i>
        </div>


        <ul className={this.state.clicked ? 
        "nav-menu active": "nav-menu"}>
        {Menulist.map((item, index) => {
            return(
            <li key={index}>
            <a className={item.cname} 
            href={item.url}><i className={item.icon}>
            </i>{item.title}</a>
            </li>
            );
        })}
        <button>Sign Up</button>
        </ul>
    </nav>
    );
}
}
export default Navbar;
