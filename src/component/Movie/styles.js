import { makeStyles } from "@mui/styles";

export default makeStyles((theme) =>({
    movie: {
        padding: '10px',
        overflow: 'hidden',
    },
    links:{
        alignItems: 'center',
        fontWeight: 'bolder',
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            textDecoration: 'none',
        },
        '&:hover' : {
            cursor: 'pointer',
            textDecoration: 'none'
        },
    },
    image:{
        borderRadius: '20px',
        height: '300px',
        marginBotton: '10px',
        transition: 'all .2s ease-in-out',
        transitionDelay : '0.1s' ,
        '&:hover' : {
            transform: 'scale(1.07)'
            
        },
    },
    title: {
        color: theme.palette.text.primary,
        textOverflow: 'ellipsis',
        width: '200px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        marginTop: '10px',
        marginBottom: 0,
        textAlign: 'center',
    },

})); //return instantly an object