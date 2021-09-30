import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

import logo from '../../assets/logo.svg';

/*
*  Comment Test
*/

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em" 
    },
    logoContainer: {
        padding: 0
    },
    logo: {
        height: "5em"
    },
    tabContainer: {
        marginLeft: "auto",
        marginRight: "auto"
    },
    tab: {  
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginRight: "25px;",
        textTransform: "none"
    
    }
}))

export default function Header(props){
    const classes = useStyles()
    const [value, setValue] = useState(0);
    const handleChange = (e, value) => {
        setValue(value)
}

    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0 ) {
            setValue(0)
        } else if (window.location.pathname === "/services" && value !== 1 ) {
            setValue(1)
        } else if (window.location.pathname === "/revolution" && value !== 2 ) {
            setValue(2)
        }  else if (window.location.pathname === "/about" && value !== 3 ) {
            setValue(3)
        }  else if (window.location.pathname === "/contact" && value !== 4 ) {
            setValue(4)
        }  else if (window.location.pathname === "/estimate" && value !== 5 ) {
            setValue(5)
        }
        
    }, [value])

return (
/** 
* Disable Gutters is for taking out all paddings and margin from a container (Ej. <div>)
*/
<React.Fragment>
<AppBar position="fixed" color="primary">
  
<Toolbar disableGutters>
    <Button component={Link} to="/" className={classes.logoContainer} onClick={ ()=> setValue(0) }>
<img src={logo} alt="Company Logo" className={classes.logo} /> 
    </Button>
<Tabs value={value}  onChange={handleChange} className={classes.tabContainer} indicatorColor="primary"  > 
    <Tab className={classes.tab} label="Home" component={Link} to="/"  />
    <Tab className={classes.tab} label="Services" component={Link} to="/services" />
    <Tab className={classes.tab} label="The Revolution" component={Link} to="/revolution" />
    <Tab className={classes.tab} label="About Us" component={Link} to="/about" />
    <Tab className={classes.tab} label="Contact Us" component={Link} to="/contact" />
</Tabs>
<Button variant="contained" color="secondary" className={classes.button} to="/contact" >Free Estimate</Button>
</Toolbar>
</AppBar>
<div className={classes.toolbarMargin} />
</React.Fragment>
);
}

