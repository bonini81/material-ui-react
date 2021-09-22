import { createTheme } from '@material-ui/core/styles';

//No aparece la version de MuiTheme
const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60"

export default createTheme ({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        },
        typography: {
            tab: {
         
            fontFamily: "Raleway",
            fontWeight: 900,
            fontSize: "1rem",
              
            },
            estimate: {
                fontFamily: "Pacifico",
                fontSize: "1rem", 
                color: "white" 
            }

        }
    }
});