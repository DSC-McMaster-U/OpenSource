import React, { useState }from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ChoreListItem from './choreListItem';
import choreListData from './dummyData'
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import Form from './choreListForm'
import {users} from './dummyData'
import './choreListStyle.css'
import Button from '@material-ui/core/Button';




// Props for Form  
Form.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


// Main ChoreList component
function ChoreList(){

// Row variables to construct ShoppingListItem components
var Row = choreListData.map( (item, index) =>{ 
    return <div>
            <ChoreListItem items={choreListData[index]}/>
        <Divider variant="middle" />
        </div>
})
  
// State variables for open and closing form 
const [open, setOpen] = React.useState(false);
const [selectedValue, setSelectedValue] = React.useState("email");

// Function to open form
const handleClickOpen = () => {
  setOpen(true);
};


// Function to close form
const handleClose = (value) => {
  setOpen(false);
  setSelectedValue(value);
};


  // Return value for ShoppingList Component
  return (
          // Encompassing Div
          <div className="main" style={{textAlign:"center"}}>
          {/* Material-UI List component start */}
          <List
            className="choreList"
            title="Chore"
            style={{
                width:'300px',
                margin:'auto'
            }}
          >
              {/* ShoppingList Title */}              
              <h1 style={{fontSize:'30px'}}>Chore List</h1>
              {/* ShoppingListItems Components */}
              {Row}
              {/* Button that opens form */}              
              <Button onClick={handleClickOpen}>Add Chore <AddIcon /> </Button>

          </List>
          <br></br>

            {/* Form for adding items, initially hidden */}          
          <Form selectedValue={selectedValue} open={open} onClose={handleClose}/>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          </div>
    )

}
export default ChoreList;