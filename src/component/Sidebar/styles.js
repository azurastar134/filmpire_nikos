import { makeStyles } from "@mui/styles";

export default makeStyles((theme) =>({
    imageLink: {
        display: 'flex',
        justifyContent: 'center',
        padding: '10% 0',
    },
    image: {
        width: '70%',
    },
    links: {
        color: theme.palette.text.primary,
        textDecoration: 'none',
    },
    gerneImage: {
        filter: theme.palette.mode === 'dark' && 'invert(1)',
    }
})); //return instantly an object