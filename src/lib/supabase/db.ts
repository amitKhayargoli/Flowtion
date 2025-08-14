import {drizzle} from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as dotenv from 'dotenv';
import * as schema from './schema';
import { migrate } from 'drizzle-orm/postgres-js/migrator';

dotenv.config({path: '.env'});

if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined in .env file');
}

console.log('Attempting to connect to database...');
const client = postgres(process.env.DATABASE_URL as string, {
    max: 1,
});

console.log('Database connection established');

const db = drizzle(client, {
    schema: schema,
});

const migrateDb = async () => {
    try {
        console.log('Starting database migration...');
        console.log('Using migrations from:', process.cwd() + '/migrations');
        await migrate(db, {
            migrationsFolder: './migrations',
        });
        console.log('Database migration completed successfully.');    
    }
    catch (error: any) {
        console.error('Error during database migration:', error);
        console.error('Error details:', error.message);
        throw error; // Re-throw to see full error stack
    }

}
// Run migration if this file is being executed directly (not imported)
if (require.main === module) {
    console.log('Running migrations...');
    migrateDb().catch(error => {
        console.error('Migration failed:', error);
        process.exit(1);
    });
} else {
    console.log('Database module imported, skipping migrations');
}

export default db;