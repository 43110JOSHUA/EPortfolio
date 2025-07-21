# My Portfolio Website

https://black-ocean-0b150ff1e.1.azurestaticapps.net/

A full-stack portfolio website built with React and Node.js, showcasing my projects, experience, and technical skills. Features real-time investment portfolio tracking with live stock data visualization, responsive design, and secure API integration.

## Features

- **Project Showcase**: Detailed project listings with technology stacks and GitHub links.
- **Experience Timeline**: Professional experience.
- **Responsive Design**: Optimized for devices of all sizes using Bootstrap.
- **Secure API Integration**: Separate backend for handling API requests to finnhub.io.
- **Live Stock Data**: Real-time investment data with Chart.js visualizations.

## Tech Stack

**Frontend:**

- React 19 with TypeScript
- Vite for build tooling
- Bootstrap 5 for styling
- Chart.js for data visualization
- Axios for API requests

**Backend:**

- Node.js with Express
- CORS for cross-origin requests
- Environment variable management with dotenv

## Local Development Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/43110JOSHUA/EPortfolio.git
   cd EPortfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root directory and add your API keys:
   ```env
   # Add your environment variables here
   # Example: VITE_API_KEY=your_api_key_here
   ```

## Running the Application

### Development Mode

1. **Start the backend server:**

   ```bash
   npm run start:backend
   ```

   The backend will run on the default port (usually 3001).

2. **In a new terminal, start the frontend development server:**

   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:5173` (or the next available port).

3. **Open your browser** and navigate to the frontend URL to view the application.

## Project Structure

```
portfolio_website/
├── src/
│   ├── components/
│   │   ├── investmentList/
│   │   │   ├── InvestmentCharts.tsx
│   │   │   ├── InvestmentList.tsx
│   │   │   └── InvestmentPrices.tsx
│   │   ├── Avatar.tsx
│   │   ├── Header.tsx
│   │   ├── ProjectList.tsx
│   │   └── ExperienceList.tsx
│   ├── assets/
│   ├── App.tsx
│   └── main.tsx
├── public/
├── developmentBackend.js
└── package.json
```

## License

This project is private and proprietary.
