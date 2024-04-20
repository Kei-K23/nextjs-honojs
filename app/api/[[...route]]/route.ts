import { messages } from '@/db/schema';
import { Hono } from 'hono'
import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { env } from 'hono/adapter';
import { cors } from 'hono/cors';
import { v4 as uuid4 } from 'uuid'
import { handle } from 'hono/vercel';

export const runtime = 'edge';

type EnvConfig = {
    TURSO_CONNECTION_URL: string
    TURSO_AUTH_TOKEN: string
}

const app = new Hono().basePath('/api')

app.use('/*', cors())
app.post('/messages', async (c) => {

    const { TURSO_CONNECTION_URL, TURSO_AUTH_TOKEN } =
        env<EnvConfig>(c)

    const client = createClient({
        url: TURSO_CONNECTION_URL!,
        authToken: TURSO_AUTH_TOKEN!,
    });

    const db = drizzle(client);

    const { message } = await c.req.json<{ message: string }>();

    await db.insert(messages).values({
        id: uuid4(),
        message
    });

    return c.json({ message: message });
})

app.get('/hello', (c) => {
    return c.json({
        message: 'Hello Next.js!',
    })
})

export const GET = handle(app)
export const POST = handle(app)


