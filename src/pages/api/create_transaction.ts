import { db, Transactions } from 'astro:db';
import type { APIContext } from 'astro';

export async function POST(context: APIContext): Promise<Response> {
    try {
        const formData = await context.request.formData();

        const Transaction = {
            payee: formData.get('payee') as string,
            amount: parseFloat(formData.get('amount') as string),
            date: new Date(formData.get('date') as string),
            recurring: !!formData.get('recurring'),
            frequency: formData.get('frequency') as string || undefined,
            interval: formData.get('interval') ? parseInt(formData.get('interval') as string) : undefined,
            dayOfWeek: formData.get('dayOfWeek') ? parseInt(formData.get('dayOfWeek') as string) : undefined,
            endDate: formData.get('endDate') ? new Date(formData.get('endDate') as string) : undefined
        };

        // Validate required fields
        if (!Transaction.payee || !Transaction.amount || !Transaction.date) {
            return new Response(`Missing required fields ${Transaction.payee} ${Transaction.amount} ${Transaction.date} ${Transaction.recurring}`, { status: 400 });
        }

        await db.insert(Transactions).values(Transaction);

        return context.redirect("/");
    } catch (error) {
        console.error('Error creating Transaction:', error);
        return new Response('Error creating Transaction', { status: 500 });
    }
}