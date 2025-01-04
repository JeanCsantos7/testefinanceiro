import { Router } from 'express';
import ControllerReceitas from './controller/receitasController';
import ControllerDespesas from './controller/despesasController';

const Routes = Router();

// Rotas para Receitas
Routes.post('/adicionarReceita', ControllerReceitas.createReceitas);
Routes.get('/receitas', ControllerReceitas.findReceitas);
Routes.get('/totalReceitas', ControllerReceitas.totalReceitas);
Routes.put('/atualizarReceita/:id', ControllerReceitas.updateReceitas);
Routes.delete('/deletarReceita/:id', ControllerReceitas.deleteReceitas);

// Rotas para Despesas
Routes.post('/adicionarDespesa', ControllerDespesas.createDespesas);
Routes.get('/despesas', ControllerDespesas.findDespesas);
Routes.get('/totalDespesas', ControllerDespesas.totalDespesas);
Routes.put('/atualizarDespesa/:id', ControllerDespesas.updateDespesas);
Routes.delete('/deletarDespesa/:id', ControllerDespesas.deleteDespesas);

export default Routes;
