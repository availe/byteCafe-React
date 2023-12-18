import {AppBar, Toolbar, Tabs, Tab} from "@mui/material";
import React, {useState} from "react";

const Navbar = () => {
    const [value, setValue] = useState(0)
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return(
        <AppBar position="static">
            <Toolbar style={{justifyContent: 'space-evenly'}}>
                <Tabs textColor="inherit" value={value} onChange={handleChange} indicatorColor="secondary" variant="fullWidth">
                    <Tab label = "Home"/>
                    <Tab label = "Products"/>
                    <Tab label = "About"/>
                    <Tab label = "Cart"/>
                </Tabs>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar