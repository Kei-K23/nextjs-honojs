import { sql } from 'drizzle-orm';
import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const messages = sqliteTable('messages', {
    id: text('id').primaryKey(),
    message: text('message').notNull(),
    createdAt: text('created_at')
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
});


export type InsertMessage = typeof messages.$inferInsert;