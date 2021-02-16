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
import './choreListStyle.css'
import ChoreListItem from './choreListItem'
import Divider from '@material-ui/core/Divider';

// Style Variable for Button
const StyledButton = withStyles({
    root: {
      '&:hover':{
        backgroundColor: '#DEDEDE',
        border: '1px solid #850044'
      },
      size: 'small',
      color: '#850044',
      border: '1px solid #850044'
    }
  })(Button);

const names = [
  "Ahmed",
  "Mo",
  "Pogba",
  "Drake",
  "Pascal",
  "Jiminy Cricket",
  "Bernie"
  ];

// Style function for form
const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));

// Style function for date picker 
const datePickerStyle={
    backgroundColor:'#DEDEDE',
    borderRadius: '3px',
    padding: '15px',
    width:'170px'
}


// Style variables
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
PaperProps: {
    style: {
    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    width: 250,
    maxWidth: 300,
    },
},
};

// Function to get props for number input customizations, (Adds a dollar sign for price)
function NumberFormatCustom(props) {
const { inputRef, onChange, ...other } = props;
NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  };
   
return (
    <NumberFormat
    {...other}
    getInputRef={inputRef}
    onValueChange={(values) => {
        onChange({
        target: {
            name: props.name,
            value: values.value,
        },
        });
    }}
    thousandSeparator
    isNumericString
    prefix="$"
    />
);
}


// Functional component for chore Form
function ChoreListForm(props) {
  // Prop constant destruction
  const { onClose, selectedValue, open} = props;

  // Style + Theme constants
  const classes = useStyles();
  const theme = useTheme();


  // State variables for form inputs
  const [personName, setPersonName] = React.useState([]);
  const [dateValue, setDateValue] = React.useState(new Date());
  const [values,setValues] = React.useState({
      numberformat: '1320',
  })
  const [nameValue, setNameValue] = React.useState("")
  const [descValue, setDescValue] = React.useState("")
  const [priceValue,setPriceValue] = React.useState()
  const [peopleNeededValue,setpeopleNeededValue] = React.useState(0)
  
  // Function to close form on outer click or submit button
  const handleClose = () => {
      onClose(selectedValue);
    };

  // Gets and sets date input
  const handleDateChange = (date) => {
      console.log(date);
      setDateValue(date);
  };

  // Gets and sets item name input
  const handleNameChange = e =>{
      setNameValue(e.target.value);
      console.log(e.target.value)

  }

  // Gets and sets description input
  const handleDescChange = e =>{
      setDescValue(e.target.value);
      console.log(e.target.value)

  }
  

  // Handles form submission + saving inputs in choreListData array
  const buttonClicked = () =>{
      handleClose()

      const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
      const month = monthNames[dateValue.getMonth()];
      const day = String(dateValue.getDate()).padStart(2, '0');
      const year = dateValue.getFullYear();
      const output = month  + '\n'+ day  + ',' + year;


      choreListData.push({
          name: nameValue,
          description: descValue,
          dueDate:output,
          peopleNeeded: peopleNeededValue,
          assigned:false,
          personAssignedTo:null
          }
      )

  }
  // Return value for Form Component
  return (
    // Dialog box
    <Dialog  onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">Add to Chore List</DialogTitle>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            {/* Form name grid component */}                
            <Grid container justify="center">
                <TextField
                id="outlined-filled-basic-static" 
                label="Name" 
                variant="filled"
                value={nameValue}
                onChange={handleNameChange}

                required="true" />

            </Grid>
            <Grid container justify="center">

            {/* Form desc grid component */}
            <Grid container justify="center">

                <TextField
                margin="normal"
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                defaultValue=""
                value={descValue}
                onChange={handleDescChange}
                variant="filled"
                
                />

            </Grid>

            {/* Form date grid component */}
            <Grid  container justify="center">

                <KeyboardDatePicker
                style={datePickerStyle}
                disableToolbar
                variant="filled"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Due Date"
                value={dateValue}
                required="true"
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
                />
            
            </Grid>



        
            {/* Form submit button grid component */}
            <Grid container justify="center">

                <br></br>
                <StyledButton variant="outlined" color="primary" onClick={buttonClicked}>
                    Submit

                </StyledButton>

            </Grid>

        </Grid>

        </MuiPickersUtilsProvider>
        </Dialog>
        )
}
    

export default ChoreListForm;
