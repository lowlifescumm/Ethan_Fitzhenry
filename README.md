
# Ethan Fitzhenry - AI Solutions Portfolio

This project is a modern, single-page portfolio website built with React, TypeScript, and Vite. It's designed to be a high-performance, professional showcase for freelance services.

## Project Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the project dependencies:
   ```bash
   npm install
   ```

### Environment Variables
This project requires an API key for the Google Gemini API to power the "AI Idea Generator" feature.

1. Create a new file in the root of the project named `.env`.
2. Add the following line to the file, replacing `<YOUR_GEMINI_API_KEY>` with your actual key:
   ```
   VITE_API_KEY=<YOUR_GEMINI_API_KEY>
   ```
The `.env` file is included in `.gitignore` and should never be committed to version control.

## Development

To start the local development server with hot-reloading:
```bash
npm run dev
```
The server will typically start on `http://localhost:5173`.

## Building for Production

To build the optimized, static assets for deployment:
```bash
npm run build
```
This command will create a `dist` directory in the project root. This `dist` folder contains the final `index.html`, JavaScript, and CSS files that can be deployed to any static hosting provider (like Render, Vercel, Netlify, or IPFS for a .nft domain).

### Deployment to Render
1. Push your code to a GitHub repository.
2. Create a new **Static Site** on Render and connect your GitHub repo.
3. Configure the following settings:
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. Add your `VITE_API_KEY` as an **Environment Variable** in the Render dashboard.
