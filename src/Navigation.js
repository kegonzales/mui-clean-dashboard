import React from 'react';
import NavBar from "./NavBar";
import SideNav from "./SideNav";

export default function Navigation(props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <React.Fragment>
            <NavBar handleDrawerToggle={handleDrawerToggle}/>
            <SideNav mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
        </React.Fragment>
    );
}