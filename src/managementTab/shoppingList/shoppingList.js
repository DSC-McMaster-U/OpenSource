import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ShoppingListItem from './shoppingListItem';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import ShoppingListForm from './shoppingForm'
import shoppingListData from  './dummyData'
import Button from '@material-ui/core/Button';

  

  
// Props for Form  
  ShoppingListForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };
  
  // Main ShoppingList component
  function ShoppingList(){
    
  // Row variables to construct ShoppingListItem components
    var Row = shoppingListData.map( (item, index) =>{ 
      return <div>
             <ShoppingListItem items={shoppingListData[index]}/>
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
              <div style={{textAlign: 'center'}}>
              {/* Material-UI List component start */}
              <List
                className="shoppingList"
                style={{
                    width:'300px',
                    margin:'auto'
                }}
              >
                {/* ShoppingList Title */}              
                <h1 style={{fontSize:'30px',textAlign: 'center'}}>Shopping List</h1>
                
                {/* ShoppingListItems Components */}
                {Row}
              
                {/* Button that opens form */}
                <Button onClick={handleClickOpen}>Add Item  <AddIcon /> </Button>
              </List>
              <br></br>
              
              {/* Form for adding items, initially hidden */}
              <ShoppingListForm selectedValue={selectedValue} open={open} onClose={handleClose} />
            
            {/* Breaks */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
              </div>
        )
    
  }
  export default ShoppingList;