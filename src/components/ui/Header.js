import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';


import logo from '../../assets/logo.svg';


const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em" 
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

return (
/** 
* Disable Gutters is for taking out all paddings and margin from a container (Ej. <div>)
*/
<React.Fragment>
<AppBar position="fixed" color="primary">
 
<Toolbar disableGutters>
<img src={logo} alt="Company Logo" className={classes.logo} /> 
<Tabs className={classes.tabContainer}>
    <Tab className={classes.tab} label="Home" />
    <Tab className={classes.tab} label="Services" />
    <Tab className={classes.tab} label="The Revolution" />
    <Tab className={classes.tab} label="About Us" />
    <Tab className={classes.tab} label="Contact Us" />
</Tabs>
<Button variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>
</Toolbar>
</AppBar>
<div className={classes.toolbarMargin} />
</React.Fragment>
);
}
