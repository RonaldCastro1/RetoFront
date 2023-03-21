import { createPool } from 'mysql2';
import {} from 'mysql2/promise';

export async function connect(){
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'tienda'
    });
    return connection
}