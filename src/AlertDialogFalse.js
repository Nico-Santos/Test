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
		color: "green",
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
					{"Envio exitoso"}
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						La declaración jurada ha sido enviada correctamente.
						Recuerde llevar barbijo y alcohol en gel a la
						institución.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						className={classes.root}
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
