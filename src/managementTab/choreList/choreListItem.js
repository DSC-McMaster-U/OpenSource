import React, { useState }from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './choreListStyle.css'
import CachedRoundedIcon from '@material-ui/icons/CachedRounded';
import {users} from './dummyData'


// Style variable for choreList Item Components
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

// Function to force component to re-render after change in data
  function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
  }

// ShoppingList Item Component
function ChoreListItem(props){ 
  // State variables for ShoppingList Item
  const classes = useStyles();
  const [checked,setChecked]= React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("email");
  const [detailsOpen, setDetailsOpen] = React.useState(false);
  const forceUpdate = useForceUpdate();

  // Function to randomied task
  const randomizeTasks = (event) => {

    console.log(props.items)
    props.items.assigned = true
    var randomNumber = Math.floor(Math.random() * users.length)
    var userName = users[randomNumber]
    props.items.personAssignedTo = userName
    console.log("username",userName)
    forceUpdate();
    
  }

  // Function for handling the expanding of Item Description Card
  const handleClick = () => {
      setOpen(!open);
    };

  // Function for handling the checkbox
  const handleChange = (event) =>{
      setChecked(event.target.checked);
      console.log(event.target.parentNode.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)
      event.target.parentNode.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none";
      console.log(event.target.parentNode.parentElement.parentElement.parentElement.parentElement.style.display)
  }

  // Return value for main choreList item component
  return(
    // Encompassing Div
    <div>
    {/* Main ShoppingList item component */}
    <ListItem>
    <ListItemText primary={props.items.name} button onClick={handleClick} />
    {open ? <ExpandLess button onClick={handleClick}/> : <ExpandMore button onClick={handleClick}/>}
    <Button>
      {!props.items.assigned &&  <CachedRoundedIcon onClick={randomizeTasks}/>}
      {props.items.assigned &&  
      <div>
      
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
    </div>}
    </Button>
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
        {props.items.assigned &&   <p>Assigned to {props.items.personAssignedTo}</p>}
        {!props.items.assigned &&   <p>Currently Unassigned</p>}

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

export default ChoreListItem;