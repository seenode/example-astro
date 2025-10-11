import type { APIRoute } from 'astro';

// * API endpoint that returns a simple greeting message
export const GET: APIRoute = async () => {
    return new Response('Hello World. This is Astro as a Web service on Seenode', {
        status: 200,
        headers: {
            'Content-Type': 'text/plain',
        },
    });
};
