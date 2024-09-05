// Helper function to get the total days in a month
export const getMonthDays = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
};

// Helper function to get the days from the previous month that appear in the current month's calendar
export const getPreviousMonthDays = (year: number, month: number): number[] => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const previousMonthDays = getMonthDays(year, month - 1);
    return Array.from({ length: firstDayOfMonth }, (_, i) => previousMonthDays - firstDayOfMonth + i + 1);
};

// Function to filter transactions by a given date
export const getTransactions = (date: string, transactions: any[]): any[] => {
    return transactions.filter(transaction => {
        return new Date(transaction.date).toLocaleDateString('de-DE') === date;
    });
};
