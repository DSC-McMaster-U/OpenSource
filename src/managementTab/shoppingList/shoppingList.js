import React from 'react';
import PropTypes from 'prop-types';
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
import ShoppingListItem from './shoppingListItem';
import financesData from '../ledger/dummyData'
import { FixedSizeList } from 'react-window';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import ShoppingListForm from './shoppingForm'
import shoppingListData from  './dummyData'
import Button from '@material-ui/core/Button';

function addItemClicked(){
    alert("Add Item Clicked")
  }
  

  
  
  
  const style={
    display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid black',
      paddingLeft: '20px'
  }
  
  
  ShoppingListForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
  };
  
  
  function Example(){
    

    var Row = shoppingListData.map( (item, index) =>{ 
      return <div>
             <ShoppingListItem items={shoppingListData[index]}/>
         <Divider variant="middle" />
         </div>
    })
    
    const [open, setOpen] = React.useState(false);
      const [selectedValue, setSelectedValue] = React.useState("email");
    
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
      };
  
    
  
    const togglePop = () => {
        this.setState({
          open: this.state.open,
          seen: !this.state.seen
        });
    };
  
      return (
              <div style={{textAlign: 'center'}}>
              <List
                className="shoppingList"
                style={{
                    width:'300px',
                    margin:'auto'
                }}
              >
                <h1 style={{fontSize:'30px',textAlign: 'center'}}>Shopping List</h1>
                {Row}

                <Button onClick={handleClickOpen}>Add Item  <AddIcon /> </Button>
              </List>
              <br></br>

              <div style={{margin:'0 auto',width:'300px'}}>
          
              </div>
              <ShoppingListForm selectedValue={selectedValue} open={open} onClose={handleClose} />
              <br></br>
            <br></br>
            <br></br>
            <br></br>
              </div>
        )
    
  }
  export default Example;