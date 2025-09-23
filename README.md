# Deploy Astro on Seenode in seconds

This is a repo for deploying a minimal but production-ready Astro application for deployment on [Seenode](https://seenode.com).

This example demonstrates how to deploy a simple Astro app with a working static site and dev server.

### Deploy in minutes
View our [guide on deploying Astro apps](https://seenode.com/docs/services/web-services/framework-guides/javascript/astro/) on [Seenode](https://seenode.com) in seconds.

## How to Deploy on Seenode

1.  **Connect Your Repository**: Go to the [Seenode dashboard](https://cloud.seenode.com), select **New Web Service**, and choose this Git repository.
2.  **Confirm Settings**: Seenode will detect the Node.js environment and suggest the correct commands.
    *   **Build Command**: `npm install && npm run build`
    *   **Start Command**: `npm run preview`
3.  **Deploy**: Click **Create Web Service**.

That's it! Your Astro app will be deployed and available at a public URL.

### Key Features on Seenode

*   **Production-Ready**: Your Astro app runs in a managed Node.js environment with optimized performance and reliability.
*   **Port Binding**: The preview server binds to the port that Seenode assigns via the `PORT` environment variable.
*   **Seamless Scaling**: Scale your service horizontally or vertically with a few clicks from the Seenode dashboard as your traffic grows.

### Local Development

To start your Astro project locally:

*   Install dependencies: `npm install`
*   Start the dev server: `npm run dev` (default at `http://localhost:4321`)
*   Build for production: `npm run build`
*   Preview the production build: `npm run preview`

## Learn more

*   Astro Docs: https://docs.astro.build
*   Astro Discord: https://astro.build/chat
