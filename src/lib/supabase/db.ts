import {drizzle} from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as dotenv from 'dotenv';
import * as schema from './schema';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

dotenv.config({path: '.env'});

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined in .env file');
}

const client = postgres(process.env.DATABASE_URL as string, {
    max: 1,}
)

const db = drizzle(client, {
    schema: schema,
});



const migrateDb = async () => {
    try {
        console.log('Migrating database...');
    await migrate(db, {
        migrationsFolder: '../../../migrations',
    });
    console.log('Database migration completed.');    
    }
    catch (error) {
        console.error('Error during database migration:', error);
    }

}
migrateDb();
export default db;