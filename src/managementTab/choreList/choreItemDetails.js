import React, { useState } from 'react';
import { spacing } from '@material-ui/system';
import { makeStyles, useTheme,withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DateFnsUtils from '@date-io/date-fns';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import ListItemText from '@material-ui/core/ListItemText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import choreListData from './dummyData'
import './choreListStyle.css';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
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
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './choreListStyle.css'
import CachedRoundedIcon from '@material-ui/icons/CachedRounded';
import {users} from './dummyData'
import { CardHeader } from '@material-ui/core';


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



function ChoreItemDetails(props){
    const { onClose, selectedValue, open, items } = props;

    const handleClose = () =>{
        onClose(selectedValue);
    }

    const classes = useStyles();

    

    return (

        <Dialog open={open} onClose={handleClose}>
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
        <CardActions>
        
        </CardActions>
        </Card>
            <Button onClick={handleClose}>
                Close
            </Button>

        </Dialog>
    )


}

export default ChoreItemDetails;