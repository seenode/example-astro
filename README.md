# Deploy Astro on Seenode in seconds

This is a minimal and production-ready Astro application configured for deployment on [Seenode](https://seenode.com).

This example demonstrates how to deploy an Astro web service with both a web page and API endpoint.

### Deploy in minutes
View our [guide on deploying Astro apps](https://seenode.com/docs/services/web-services/framework-guides/javascript/astro/) on [Seenode](https://seenode.com) in seconds.

## How to Deploy on Seenode

1. **Connect Your Repository**: Go to the [Seenode dashboard](https://cloud.seenode.com), select **New Web Service**, and choose this Git repository.
2. **Confirm Settings**: Seenode will detect the Node.js environment and suggest the correct commands.
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
3. **Deploy**: Click **Create Web Service**.

That's it! Your Astro app will be deployed and available at a public URL.

### Key Features on Seenode

- **Production-Ready**: This Astro app uses server-side rendering (SSR) with the Node.js adapter for optimal performance.
- **Port Binding**: This example is configured to listen on port 80. The application automatically binds to the correct port in production.
- **Seamless Scaling**: Scale your service horizontally or vertically with a few clicks from the Seenode dashboard as your traffic grows.
- **API Endpoints**: Includes both web pages and API routes, demonstrating full-stack capabilities.