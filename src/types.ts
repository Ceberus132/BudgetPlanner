interface Transaction {
    id: string;
    source: string;
    amount: number;
    type: 'income' | 'expense';
    date: Date;
    recurring: boolean;
    recurrence?: Recurrence;
}

interface Recurrence {
    frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
    interval: number;
    dayOfWeek?: number;
    endDate: Date;
}