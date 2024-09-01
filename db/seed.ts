import {db, Transactions} from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Transactions).values([
        {
            payee: 'Telekom',
            amount: 1204.50,
            type: 'income',
            date: new Date(),
            recurring: false,
        },
        {
            payee: 'Rent',
            amount: 375.13,
            type: 'expense',
            date: new Date(),
            recurring: false
        },
        {
            payee: 'Savings',
            amount: 31.4,
            type: 'expense',
            date: new Date(),
            recurring: true,
            frequency: 'daily',
            interval: 2,
            dayOfWeek: 3,
            endDate: new Date()
        }
    ])
}
