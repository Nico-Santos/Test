import React from "react";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

export default function AddressForm({ setUno, setDos, setTres, setCuatro }) {
	return (
		<React.Fragment>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={12}>
					<FormLabel component="legend">
						¿Has estado en contacto con una persona que diera
						positivo de COVID-19 en los últimos 14 días?
					</FormLabel>
					<RadioGroup
						aria-label="preguntas1"
						name="pregunta1"
						onChange={(event) => setUno(event.target.value)}
						row
					>
						<FormControlLabel
							value="si"
							control={<Radio />}
							label="Si"
						/>
						<FormControlLabel
							value="no"
							control={<Radio />}
							label="No"
						/>
					</RadioGroup>
				</Grid>
				<Grid item xs={12} sm={12}>
					<FormLabel component="legend">
						¿En los últimos 14 días has tenido los siguientes
						síntomas: Dolor de garganta, Tos seca o Temperatura &gt;
						37,5 ºC?
					</FormLabel>
					<RadioGroup
						aria-label="preguntas2"
						name="pregunta2"
						onChange={(event) => setDos(event.target.value)}
						row
					>
						<FormControlLabel
							value="si"
							control={<Radio />}
							label="Si"
						/>
						<FormControlLabel
							value="no"
							control={<Radio />}
							label="No"
						/>
					</RadioGroup>
				</Grid>
				<Grid item xs={12} sm={12}>
					<FormLabel>
						¿En los últimos 14 días has tenido los siguientes
						síntomas: Dificultad para respirar, cefalea, diarrea y/o
						vómitos, pérdidad de gusto u olfato?
					</FormLabel>
					<RadioGroup
						aria-label="preguntas3"
						name="pregunta3"
						onChange={(event) => setTres(event.target.value)}
						row
					>
						<FormControlLabel
							value="si"
							control={<Radio />}
							label="Si"
						/>
						<FormControlLabel
							value="no"
							control={<Radio />}
							label="No"
						/>
					</RadioGroup>
				</Grid>
				<Grid item xs={12} sm={12}>
					<FormLabel>
						Declaro que la información brindada es verdadera y me
						comprometo a cumplir con las indicaciones medicas en
						caso que corresponda
					</FormLabel>
					<RadioGroup
						aria-label="preguntas4"
						name="pregunta4"
						onChange={(event) => setCuatro(event.target.value)}
						row
					>
						<FormControlLabel
							value="si"
							control={<Radio />}
							label="Si"
						/>
						<FormControlLabel
							value="no"
							control={<Radio />}
							label="No"
						/>
					</RadioGroup>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
