// function to get the Days from the specified month and year
export const getMonthDays = (year: number, month: number): (string | null)[] => {
    // function to get the day of the week (Monday = 0, Sunday = 6)
    const getWeekday = (date: Date): number => (date.getDay() === 0 ? 6 : date.getDay() - 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = getWeekday(new Date(year, month, 1));
    // TODO: Fill with the past days instead of null
    const emptyDays = Array(firstDayOfMonth).fill(null);
    const monthDays = Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString());
    return [...emptyDays, ...monthDays];
};

type Week = { weekNumber: number, days: (string | null)[] };
// function to get am array of all the weeks in the specified month and year
export const getMonthWeeks = (year: number, month: number): Week[] => {
    const days = getMonthDays(year, month);
    const weeks: Week[] = [];
    days.reduce((currentWeek: Week, day, index) => {
        currentWeek.days.push(day);
        if (currentWeek.days.length === 7 || index === days.length - 1) {
            weeks.push(currentWeek);
            currentWeek = { weekNumber: currentWeek.weekNumber + 1, days: [] };
        }
        return currentWeek;
    }, { weekNumber: 1, days: [] });
    return weeks;
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

export const getDailySummary = (date: string, transactions: any[]): string => {
    const filterTransactions = getTransactions(date, transactions)
    const sum = filterTransactions.reduce((sum, transaction) => {
        return sum + transaction.amount;
    }, 0);
    return formatCurrency(sum)
}

export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(amount)
}