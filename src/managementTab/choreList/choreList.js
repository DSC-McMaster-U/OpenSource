import React, { useState }from 'react';
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
import ChoreListItem from './choreListItem';
import choreListData from './dummyData'
import { FixedSizeList } from 'react-window';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import Form from './choreListForm'
import CachedRoundedIcon from '@material-ui/icons/CachedRounded';
import {users} from './dummyData'
import forceUpdate from 'react'
import './choreListStyle.css'
import { CardHeader } from '@material-ui/core';
import ChoreItemDetails from './choreItemDetails'
import Button from '@material-ui/core/Button';

function addItemClicked(){
  alert("Add Item Clicked")
}

// var Row = ({ index, style }) => (
// <div>
//   <ChoreListItem items={choreListData[index]}/>
//   <Divider variant="middle" />
//   </div>
// );



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

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
  }



function Example(){
    var Row = choreListData.map( (item, index) =>{ 
        return <div>
               <ChoreListItem items={choreListData[index]}/>
           <Divider variant="middle" />
           </div>
    })
    

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("email");
  
  const forceUpdate = useForceUpdate();

    const handleClickOpen = () => {
      setOpen(true);
    };

    function RowUpdate(){
        const [value, setValue] = useState(0); // integer state
        return () => setValue(value => value + 1); // update the state to force render
    }
    

    const randomizedAllTasks = () => {
        
        for (var i = 0; i<choreListData.length; i++){
            var tasks = choreListData[i]
            var randomNumber = Math.floor(Math.random() * users.length)
            var userName = users[randomNumber]
            
            var task = tasks.name
            console.log("TASKS",tasks)
            if (!tasks.assigned){
                tasks.assigned = true
                tasks.personAssignedTo = userName

        }
    }

    forceUpdate()
    console.log("Got to force Update")


    

    


    
}
const updateRow = () => {
    Row = ({ index, style }) => (
        <div>
          <ChoreListItem items={choreListData[index]}/>
          <Divider variant="middle" />
          </div>
        );

    console.log("Row Updated",Row)
}
  
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

  //STARTED HERE
    return (
            <div className="main" style={{textAlign:"center"}}>
            <List
              className="choreList"
              title="Chore"
              style={{
                  width:'300px',
                  margin:'auto'
              }}
            >
                <h1 style={{fontSize:'30px'}}>Chore List</h1>
                {Row}
                <Button onClick={handleClickOpen}>Add Chore <AddIcon /> </Button>

            </List>
            <br></br>
            <div style={{margin:'0 auto',width:'300px'}}>
            
            </div>
            <Form selectedValue={selectedValue} open={open} onClose={handleClose}/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
      )
  
}
export default Example;