import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '50vh',
        padding: '3%',
        borderRadius: 10,
        color: 'white',
        boxShadow: '5px 5px 2px #9d9d9d',
      },
    container :{
        padding:'0 3%',
        width:'100%',
        margin:'0'
    },
    infoCard:{
        display:'flex',
        flexDirection:'column',
        textAlign:'center',
    }
})
export default styles;