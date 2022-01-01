import { makeStyles } from "@material-ui/styles";

const styles = makeStyles({
    media: {
        height:250,
      },
      border: {
        border: 'solid',
      },
      card: {
        height:'100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
      activeCard: {
        border: '2px solid #22289a',
      },
      grid: {
        display: 'flex',
      },
      details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '5px',
      },
      title: {
        padding: '0 12px',
      },
      cardActions: {
        padding: '0 12px 4px 12px',
        display: 'flex',
        justifyContent: 'space-between',
      },
})
export default styles;