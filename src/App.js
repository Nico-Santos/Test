import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./AddressForm";
import AlertDialogTrue from "./AlertDialogTrue";
import AlertDialogFalse from "./AlertDialogFalse";

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: "relative",
	},
	layout: {
		width: "auto",
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
			width: 600,
			marginLeft: "auto",
			marginRight: "auto",
		},
	},
	paper: {
		marginTop: theme.spacing(3),
		marginBottom: theme.spacing(3),
		padding: theme.spacing(2),
		[theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
			marginTop: theme.spacing(6),
			marginBottom: theme.spacing(6),
			padding: theme.spacing(3),
		},
	},
	stepper: {
		padding: theme.spacing(3, 0, 5),
	},
	buttons: {
		display: "flex",
		justifyContent: "flex-end",
	},
	button: {
		marginTop: theme.spacing(3),
		marginLeft: theme.spacing(1),
	},
}));

export default function Checkout() {
	const classes = useStyles();
	const [value1, setValue1] = useState();
	const [value2, setValue2] = useState();
	const [value3, setValue3] = useState();
	const [value4, setValue4] = useState();
	const [open1, setOpen1] = useState(false);
	const [open2, setOpen2] = useState(false);

	const recibeAlerta = () => {
		if (value1 === "si" || value2 === "si" || value3 === "si") return true;
		else return false;
	};

	const submit = () => {
		if (value1 && value2 && value3 && value4) {
			if (recibeAlerta()) {
				setOpen1(true);
			} else setOpen2(true);
		} else alert("complete todo");
	};

	return (
		<React.Fragment>
			{/* <CssBaseline /> */}
			{/* <AppBar
				position="absolute"
				color="default"
				className={classes.appBar}
			>
				<Toolbar>
					<Typography variant="h6" color="inherit" noWrap>
						Declaración Jurada - {new Date().getDay()}/
						{new Date().getMonth()}/{new Date().getFullYear()}
					</Typography>
				</Toolbar>
			</AppBar> */}
			<main className={classes.layout}>
				<Paper className={classes.paper}>
					<Typography component="h1" variant="h4" align="center">
						Declaración Jurada
					</Typography>
					<React.Fragment>
						<AddressForm
							setUno={setValue1}
							valUno={value1}
							setDos={setValue2}
							valDos={value2}
							setTres={setValue3}
							valTres={value3}
							setCuatro={setValue4}
							valCuatro={value4}
						/>
						<div className={classes.buttons}>
							<Button
								variant="contained"
								color="primary"
								onClick={submit}
								className={classes.button}
							>
								Enviar
							</Button>
						</div>
					</React.Fragment>
					<div>
						<AlertDialogTrue value={open1} setValue={setOpen1} />
					</div>
					<div>
						<AlertDialogFalse value={open2} setValue={setOpen2} />
					</div>
				</Paper>
			</main>
		</React.Fragment>
	);
}
