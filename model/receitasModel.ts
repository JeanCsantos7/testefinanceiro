import pool from '../database/database';

interface Dados {
    descricao: string;
    valor: number;
    categoria: string;
}

class ReceitasModel {
    // Cria uma nova entrada de receita
    async createReceitas(bodyDetail: Dados) {
        const sql =
            'INSERT INTO receitas (descricao, valor, categoria) VALUES(?, ?, ?)';
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

    // Busca todas as receitas
    async findReceitas() {
        const sql = 'SELECT * FROM receitas';
        try {
            const [result] = await pool.execute(sql);
            return result;
        } catch (error) {
            throw error;
        }
    }

    // Atualiza uma receita existente
    async updateReceitas(bodyDetail: Dados, idParams: number) {
        const sql =
            'UPDATE receitas SET descricao=?, valor=?, categoria=? WHERE id=?';
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

    // Deleta uma receita
    async deleteReceitas(idParam: number) {
        const sql = 'DELETE FROM receitas WHERE id=?';
        try {
            const [result] = await pool.execute(sql, [idParam]);
            return result;
        } catch (error) {
            throw error;
        }
    }

    // Calcula o total das receitas
    async totalReceitas() {
        const sql = 'SELECT SUM(valor) AS total FROM receitas';
        try {
            const [result] = await pool.execute(sql);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export default new ReceitasModel();
