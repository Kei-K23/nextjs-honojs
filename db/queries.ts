import { db } from "."
import { messages } from "./schema"

export const insertMessage = async (message: string) => {
    await db.insert(messages).values({
        id: 'hello',
        message,
    })
}