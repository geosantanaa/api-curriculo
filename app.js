const express = require("express");
const app = express();
const port = 8080;
require('dotenv').config();

app.use(express.json());

const { createCurriculum, updateCurriculum, getCurriculumById, deleteCurriculum, listCurriculums } = require('./controller/CurriculumController');

app.get('/', (req, res) => {
  console.log('Bem-vindo à API REST de currículos');
});

// Rota para criação do currículo
app.post('/curriculum', createCurriculum);

// Rota para atualização do currículo
app.put('/curriculum/:id', updateCurriculum);

// Rota para buscar o currículo pelo ID
app.get('/curriculum/:id', getCurriculumById);

// Rota para excluir um currículo pelo ID
app.delete('/curriculum/:id', deleteCurriculum);

// Rota para listar todos os currículos
app.get('/curriculum', listCurriculums);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
