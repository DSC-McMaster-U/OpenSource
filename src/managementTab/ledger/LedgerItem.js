import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './ledgerStyle.css'



// Style variable for List Item Components
const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


// List Item Component
function LedgerItem(props){ 
  
  const classes = useStyles();

  // State variables for List Item
  const [checked,setChecked]= React.useState(false);
  const [open, setOpen] = React.useState(false);

  // Function for handling the expanding of Item Description Card
  const handleClick = () => {
      setOpen(!open);
    };



    // Function for handling the checkbox
    const handleChange = (event) =>{
        setChecked(event.target.checked);
        var mainDivStyle = event.target.parentNode.parentElement.parentElement.parentElement.parentElement.style
        mainDivStyle.display = "none";
    }


    // Return value for main Ledger Item Component
    return(

      // Encompassing Div
      <div>
    {/* Main list item component */}
      <ListItem>
      <ListItemText primary={props.items.name} button onClick={handleClick} />
      {open ? <ExpandLess button onClick={handleClick}/> : <ExpandMore button onClick={handleClick}/>}
      <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          name="checkedB"
          color="primary"
        />
      }
      labelPlacement="start"
    />
    </ListItem>
    {/* Collapsible Card for ledger item description */}
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Card className={classes.root} variant="outlined">
      <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
          Due on {props.items.dueDate}
          </Typography>
          <Typography variant="h5" component="h2">
          {props.items.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
              CAD ${props.items.amount}
          </Typography>
          <Typography variant="body2" component="p">
          {props.items.description}
          </Typography>
      </CardContent>
      
      </Card>
    </Collapse>
    </div>
    )
}

export default LedgerItem