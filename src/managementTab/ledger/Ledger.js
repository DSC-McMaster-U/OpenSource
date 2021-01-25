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
import LedgerItem from './LedgerItem';
import financesData from './dummyData'
import { FixedSizeList } from 'react-window';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import Form from './form'
import Button from '@material-ui/core/Button';






// Style Variable
const style={
  display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black',
    paddingLeft: '20px'
}


// Props for Form
Form.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


// Main ledger component
function Ledger(){

  // Row variables to construct LedgerItem components
  var Row = financesData.map( (item, index) =>{ 
    return <div>
           <LedgerItem items={financesData[index]}/>
       <Divider variant="middle" />
       </div>
  })

  // State variables for open and closing form 
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("");
  
  // Function to open form
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  // Function to close form
  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  

  // Return value for Ledger Component
  return (

    // Encompassing Div
      <div style={{textAlign: 'center'}}>
      {/* Material-UI List component start */}
      <List
        className="ledger"
        title="Ledger"
        style={{
            width:'300px',
            margin:'auto'
        }}
      >
        {/* Ledger Title */}
        <h1 style={{fontSize:'30px',textAlign: 'center'}}>Ledger</h1>
        {/* LedgerItems Components */}
        {Row}
        {/* Button that opens form */}
        <Button onClick={handleClickOpen}>Add Item  <AddIcon /> </Button>
      </List>
      <br></br>

      {/* Form for adding items, initially hidden */}
      <Form selectedValue={selectedValue} open={open} onClose={handleClose} />

      {/* Breaks */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      </div>
    )
  
}
export default Ledger;