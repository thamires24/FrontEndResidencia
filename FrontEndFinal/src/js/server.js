const express = require('express');
const path = require('path');
const travelRoutes = require('../routes/travel');

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/css', express.static(path.join(__dirname, '..', 'css')));
app.use('/js', express.static(path.join(__dirname)));
app.use('/img', express.static(path.join(__dirname, '..', 'img')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.use('/api/travel', travelRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});