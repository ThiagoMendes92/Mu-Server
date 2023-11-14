const express = require('express');
const controllerCadastro = require('./controllers/CadastroController');

const routes = express.Router();

routes.get('/List',controllerCadastro.List);

routes.post('/Create',controllerCadastro.Create);

routes.post('/Update',controllerCadastro.Update);

routes.get('/GetOne',controllerCadastro.GetOne);

routes.post('/Delete',controllerCadastro.Delete);

module.exports = routes;