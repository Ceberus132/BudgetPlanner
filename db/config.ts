import {column, defineDb, defineTable} from 'astro:db';

const Transactions = defineTable({
  columns: {
    payee: column.text(),
    amount: column.number(),
    type: column.text(),
    date: column.date(),
    recurring: column.boolean(),
    frequency: column.text({ optional: true }),
    interval: column.number({ optional: true }),
    dayOfWeek: column.number({ optional: true }),
    endDate: column.date({ optional: true })
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { Transactions }
});
