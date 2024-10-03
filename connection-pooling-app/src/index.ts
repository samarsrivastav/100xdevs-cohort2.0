import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

export interface Env {
  DATABASE_URL: string;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    // Initialize Prisma client with the database URL and Accelerate extension
    const prisma = new PrismaClient({
      datasources: { db: { url: env.DATABASE_URL } },
    }).$extends(withAccelerate());

    // Log the request method and URL
    await prisma.log.create({
      data: {
        level: 'Info',
        message: `Request: ${request.method} ${request.url}`,
        meta: JSON.stringify(request.headers),
      },
    });

    // Fetch some logs from the database
    const { data, info } = await prisma.log.findMany({
      take: 20,
      orderBy: { id: 'desc' },
    }).withAccelerateInfo();

    // Log the Accelerate info
    console.log(JSON.stringify(info));

    // Return the data as a response
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  },
};
