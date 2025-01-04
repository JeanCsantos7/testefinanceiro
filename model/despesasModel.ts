import pool from '../database/database';

interface Dados {
    id: number;
    descricao: string;
    valor: number;
    categoria: string;
}

class DespesasModel {
    // Cria uma nova despesa
    async createDespesas(bodyDetail: Dados) {
        const sql =
            'INSERT INTO despesas (descricao, valor, categoria) VALUES(?,?,?)';
        try {
            const [result] = await pool.execute(sql, [
                bodyDetail.descricao,
                bodyDetail.valor,
                bodyDetail.categoria,
            ]);
            return result;
        } catch (error) {
            throw error;
        }
    }

    // Busca todas as despesas
    async findDespesas() {
        const sql = 'SELECT * FROM despesas';
        try {
            const [result] = await pool.execute(sql);
            return result;
        } catch (error) {
            throw error;
        }
    }

    // Atualiza uma despesa existente
    async updateDespesas(bodyDetail: Dados, idParams: number) {
        const sql =
            'UPDATE despesas SET descricao=?, valor=?, categoria=? WHERE id=?';
        try {
            const [result] = await pool.execute(sql, [
                bodyDetail.descricao,
                bodyDetail.valor,
                bodyDetail.categoria,
                idParams,
            ]);
            return result;
        } catch (error) {
            throw error;
        }
    }

    // Deleta uma despesa
    async deleteDespesas(idParam: number) {
        const sql = 'DELETE FROM despesas WHERE id=?';
        try {
            const [result] = await pool.execute(sql, [idParam]);
            return result;
        } catch (error) {
            throw error;
        }
    }

    // Calcula o total das despesas
    async totalDespesas() {
        const sql = 'SELECT SUM(valor) AS total FROM despesas';
        try {
            const [result] = await pool.execute(sql);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export default new DespesasModel();
