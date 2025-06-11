const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../json/data.json');
let data = require(dataPath);

function saveData() {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

router.get('/', (req, res) => {
    res.json(data);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const travel = data.travels.find(travel => travel.id == id);

    if (!travel) return res.status(204).json();

    res.json(travel);
});

router.post('/', (req, res) => {
    const { name, email, tel, goDate, returnDate, origin, destination, childBed, preferences } = req.body;
    const newId = data.lastId + 1;

    const newTravel = {
        id: newId,
        name,
        email,
        tel,
        goDate,
        returnDate,
        origin,
        destination,
        childBed,
        preferences
    };

    data.travels.push(newTravel);
    data.lastId = newId;
    saveData();

    res.json(newTravel);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, tel, goDate, returnDate, origin, destination, childBed, preferences } = req.body;

    const travelIndex = data.travels.findIndex(travel => travel.id == id);
    if (travelIndex === -1) return res.status(404).json({ message: 'Viagem não encontrada' });

    data.travels[travelIndex] = {
        id: parseInt(id),
        name,
        email,
        tel,
        goDate,
        returnDate,
        origin,
        destination,
        childBed,
        preferences
    };

    saveData();
    res.json(data.travels[travelIndex]);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = data.travels.findIndex(travel => travel.id == id);
    if (index === -1) return res.status(404).json({ message: 'Viagem não encontrada' });

    data.travels.splice(index, 1);
    saveData();
    res.status(200).json({ message: 'Viagem removida com sucesso' });
});

module.exports = router;