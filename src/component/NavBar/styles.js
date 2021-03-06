import { hslToRgb } from "@mui/material";
import { makeStyles } from "@mui/styles";
const drawerWidth = 240;

export default makeStyles((theme) =>({
    toolbar:{
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '240px',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0',
            flexWrap: 'wrap',
        }, 
    },
    appbar: {
        backgroundImage: "light",
        color: "white",
    },
    menuButton:{
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,

        },
    },
    drawerPaper: {
       width: drawerWidth,
       overflow: 'hidden',
        '&:hover' : {
            overflowY: 'scroll',
            
            
        }
    },
    linkButton: {
        '&:hover' : {
            color: 'white !important',
            textDecoration: 'none',
        },
    },
})); //return instantly an object