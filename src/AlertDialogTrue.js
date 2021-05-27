import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	title: {
		color: "red",
	},
}));

export default function AlertDialog({ value, setValue }) {
	const classes = useStyles();
	return (
		<div>
			<Dialog
				open={value}
				onClose={() => setValue(false)}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle className={classes.title} id="alert-dialog-title">
					{"Atención: Caso sospechoso"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Es posible que tenga COVID-19, por favor no venga a la
						institución. Es recomendable estar aislado 10 días y
						hablar con un médico cuanto antes.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() => setValue(false)}
						color="primary"
						variant="contained"
					>
						Entendido
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
