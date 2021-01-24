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


Form.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


function Example(){
  var Row = financesData.map( (item, index) =>{ 
    return <div>
           <LedgerItem items={financesData[index]}/>
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
              className="ledger"
              title="Ledger"
              style={{
                  width:'300px',
                  margin:'auto'
              }}
            >
              <h1 style={{fontSize:'30px',textAlign: 'center'}}>Ledger</h1>
              {Row}
              <Button onClick={handleClickOpen}>Add Item  <AddIcon /> </Button>
            </List>
            <br></br>
            <div style={{margin:'0 auto',width:'300px'}}>
            
            </div>
            <Form selectedValue={selectedValue} open={open} onClose={handleClose} />

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            </div>
      )
  
}
export default Example;