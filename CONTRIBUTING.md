# Contributing to Application Tracker

## Development Setup

### Backend (ASP.NET Core)

1. Navigate to backend directory:
```bash
cd backend/ApplicationTracker
```

2. Restore dependencies:
```bash
dotnet restore
```

3. Run the application:
```bash
dotnet run
```

The backend will be available at `https://localhost:7000` (or check console output for exact port).

### Frontend (React + Vite)

1. Navigate to frontend directory:
```bash
cd frontend/application-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`.

## Quick Navigation

From project root:

**Backend:**
```bash
cd backend/ApplicationTracker && dotnet run
```

**Frontend:**
```bash
cd frontend/application-tracker && npm run dev
```