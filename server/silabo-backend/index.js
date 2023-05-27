import express from 'express';
import { nanoid } from 'nanoid';

// tema -> string
// descripción -> string
// contenidos -> string[]
// completado -> boolean
const SILABO_GENERAL = new Map();

SILABO_GENERAL.set(nanoid(), {
	tema: 'Animaciones',
	description:
		'El participante genera animaciones con los componentes existentes',
	contenidos: ['Animaciones por componente'],
	completado: true,
});

const app = express();

app.get('/silabo', (req, res) => {
	const datos = [];

	SILABO_GENERAL.forEach((silabo, id) => {
		datos.push({
			id,
			...silabo,
		});
	});

	return res.json(datos);
});

app.get('/silabo/:id', (req, res) => {
	const id = req.params.id;

	if (!id) {
		return res.status(400).send('No existe el silabo');
	}

	const silabo = SILABO_GENERAL.get(id);

	if (!silabo) {
		return res.status(400).send('No existe el silabo');
	}

	return res.json({
		id,
		...silabo,
	});
});

app.post('/silabo', (req, res) => {
	const { tema, description, contenidos = [], completado = false } = req.body;

	if (!tema || !description) {
		return res.status(400).send('Datos incorrectos');
	}

	const id = nanoid();

	SILABO_GENERAL.set(id, {
		tema,
		description,
		contenidos,
		completado,
	});

	return res.status(201).send('Tema del silabo agregado correctamente');
});

app.put('/silabo/:id', (req, res) => {
	const id = req.params.id;
	const { tema, description, contenidos = [], completado = false } = req.body;

	if (!id) {
		return res.status(400).send('No existe el silabo');
	}

	if (!tema || !description) {
		return res.status(400).send('Datos incorrectos');
	}

	const silabo = SILABO_GENERAL.get(id);

	if (!silabo) {
		return res.status(404).send('No existe el silabo');
	}

	SILABO_GENERAL.set(id, {
		tema,
		description,
		contenidos,
		completado,
	});

	return res.status(201).send('Silabo editado correctamente');
});

app.delete('/silabo/:id', (req, res) => {
	const id = req.params.id;

	if (!id) {
		return res.status(400).send('No existe el silabo');
	}

	const silabo = SILABO_GENERAL.get(id);

	if (!silabo) {
		return res.status(404).send('El silabo no existe');
	}

	SILABO_GENERAL.delete(id);

	return res.send('El silabo fue borrado con éxito!');
});

app.listen(3000);
console.log('Server listen on port 3000');
