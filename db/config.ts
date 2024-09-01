import {column, defineDb, defineTable} from 'astro:db';

const Transaction = defineTable({
  columns: {
    source: column.text(),
    amount: column.number(),
    type: column.text(),
    date: column.date(),
    recurring: column.boolean(),
    frequency: column.text(),
    interval: column.number(),
    dayOfWeek: column.number(),
    endDate: column.date()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { Transaction }
});
