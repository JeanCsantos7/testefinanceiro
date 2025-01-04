import { Request, Response } from 'express';
import despesasModel from '../model/despesasModel';

class ControllerDespesas {
    async createDespesas(req: Request, res: Response): Promise<void> {
        try {
            const bodyDetail = req.body;
            const createDespesas =
                await despesasModel.createDespesas(bodyDetail);
            res.status(201).json(createDespesas); // Retorna status 201 para criação
        } catch (error) {
            console.error('Erro ao criar despesa:', error);
            res.status(500).json({ error: 'Erro ao criar despesa.' });
        }
    }

    async findDespesas(req: Request, res: Response): Promise<void> {
        try {
            const findDespesas = await despesasModel.findDespesas();
            res.status(200).json(findDespesas); // Retorna status 200 por padrão
        } catch (error) {
            console.error('Erro ao buscar despesas:', error);
            res.status(500).json({ error: 'Erro ao buscar despesas.' });
        }
    }

    async updateDespesas(req: Request, res: Response): Promise<void> {
        try {
            const idParams = parseInt(req.params.id);
            const bodyDetail = req.body;

            if (isNaN(idParams)) {
                res.status(400).json({ error: 'ID inválido.' }); // Valida ID
                return;
            }

            const updateDespesas = await despesasModel.updateDespesas(
                bodyDetail,
                idParams,
            );

            if (!updateDespesas) {
                res.status(404).json({ error: 'Despesa não encontrada.' }); // Retorna 404 caso não encontre
                return;
            }

            res.status(200).json(updateDespesas);
        } catch (error) {
            console.error('Erro ao atualizar despesa:', error);
            res.status(500).json({ error: 'Erro ao atualizar despesa.' });
        }
    }

    async deleteDespesas(req: Request, res: Response): Promise<void> {
        try {
            const idParams = parseInt(req.params.id);

            if (isNaN(idParams)) {
                res.status(400).json({ error: 'ID inválido.' }); // Valida ID
                return;
            }

            const deleteDespesas = await despesasModel.deleteDespesas(idParams);

            if (!deleteDespesas) {
                res.status(404).json({ error: 'Despesa não encontrada.' }); // Retorna 404 caso não encontre
                return;
            }

            res.status(200).json({ message: 'Despesa excluída com sucesso.' });
        } catch (error) {
            console.error('Erro ao excluir despesa:', error);
            res.status(500).json({ error: 'Erro ao excluir despesa.' });
        }
    }

    async totalDespesas(req: Request, res: Response): Promise<void> {
        try {
            const totalDespesa = await despesasModel.totalDespesas();
            res.status(200).json(totalDespesa);
        } catch (error) {
            console.error('Erro ao calcular total de despesas:', error);
            res.status(500).json({
                error: 'Erro ao calcular total de despesas.',
            });
        }
    }
}

export default new ControllerDespesas();
