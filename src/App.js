import './App.css';
import React from 'react';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	button: {
		display: 'block',
		marginTop: theme.spacing(2),
	},
	formControl: {
		margin: theme.spacing(4),
		minWidth: 360,
	},
	buttonSetting: {
		border: '2px solid black',
		width: '360px',
		margin: theme.spacing(4),

	},
	textFieldSetting: {
		minWidth: 360,
	}

}));

function App() {

	const classes = useStyles();

	const [houseName, setHouseName] = React.useState('');
	const [open, setOpen] = React.useState(false);

	const [joinHouse, setJoinHouse] = React.useState('');
	const [joinOpen, setJoinOpen] = React.useState(false);

	const [personalSettingsOpen, setPersonalSettingsOpen] = React.useState(false);


	const handleChange = (event) => {
		setHouseName(event.target.value);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleJoinHouseChange = (event) => {
		setJoinHouse(event.target.value);
	};

	const handleJoinHouseClose = () => {
		setJoinOpen(false);
	};

	const handleJoinHouseOpen = () => {
		setJoinOpen(true);
	};

	const handlePersonalSettingsClick = () => {
		setPersonalSettingsOpen(!personalSettingsOpen);
	};



	return (
		<div align="center">
			<div>
				<FormControl className={classes.formControl}>
					<InputLabel id="house-name">Choose house</InputLabel>
					<Select
						labelId="house-name"
						id="house-name-selector"
						open={open}
						onClose={handleClose}
						onOpen={handleOpen}
						value={houseName}
						onChange={handleChange}
					>

						<MenuItem value={"House 1"}>House 1</MenuItem>
						<MenuItem value={"House 2"}>House 2</MenuItem>
						<MenuItem value={"House 3"}>House 3</MenuItem>
					</Select>
				</FormControl>
			</div>

			<div>
				<FormControl className={classes.formControl}>

					<InputLabel id="join-house">Join house</InputLabel>
					<Select
						LabelId="join-house"
						id="join-house-selector"
						open={joinOpen}
						onClose={handleJoinHouseClose}
						onOpen={handleJoinHouseOpen}
						value={joinHouse}
						onChange={handleJoinHouseChange}
					>

						<MenuItem value={"Option 1"}>Option 1</MenuItem>
						<MenuItem value={"Option 2"}>Option 2</MenuItem>

					</Select>

				</FormControl>
			</div>

			<div>

				<Button className={classes.formControl} variant="outlined" style={{ justifyContent: 'flex-start' }} onClick={handlePersonalSettingsClick}> Personal Settings {personalSettingsOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}  </Button>
				{personalSettingsOpen ?
					<div>
						<p>
							<TextField className={classes.textFieldSetting} id="device-name" label="Device name" />
						</p>
						<p>
							<TextField className={classes.textFieldSetting} id="emailAddress" label="Email Address" />
						</p>



					</div>


					: <div></div>}

			</div>

			<div>
				<Button className={classes.formControl} variant="contained" color="primary">Create new house</Button>
			</div>

		</div >



	);
}

export default App;
