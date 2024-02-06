import { ClientMySQL } from "./connection";

async function getTokenCache(token: string): Promise<string | null> {
  const connection = await ClientMySQL.getConnection();

  if (ClientMySQL.errClientMySQL) {
    throw new Error('Erro na conexão com o MySQL');
  }

  const [rows]:any = await connection.execute('SELECT value FROM seu_nome_de_tabela WHERE token = ?', [token]);

  if (!rows || rows.length === 0) {
    return null;
  }

  return (rows[0] as { value: string }).value;
}

export {
  getTokenCache
};
