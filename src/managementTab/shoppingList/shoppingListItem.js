import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './shoppingListStyle.css'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';



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


function ShoppingListItem(props){ 
    const [checked,setChecked]= React.useState(false);
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
      };

    const handleChange = (event) =>{
        setChecked(event.target.checked);
        console.log(event.target.parentNode.parentElement.parentElement.parentElement.parentElement)
        event.target.parentNode.parentElement.parentElement.parentElement.parentElement.style.display = "none";
        console.log(event.target.parentNode.parentElement.parentElement.parentElement.parentElement.style.display)
    }

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    //alert("Props Are Here")
    console.log("Props should be here",props)
    
    return(
        <div>
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
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Card className={classes.root} variant="outlined">
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
            Due on {props.items.dateAdded}
            </Typography>
            <Typography variant="h5" component="h2">
            {props.items.name}
            </Typography>
            
            <Typography variant="body2" component="p">
            {props.items.description}
            </Typography>
        </CardContent>
        <CardActions>
        
        </CardActions>
        </Card>
      </Collapse>
      </div>
    )
}

export default ShoppingListItem