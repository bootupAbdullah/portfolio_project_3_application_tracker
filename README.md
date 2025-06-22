# Application Tracker (.NET + JS CRUD App)

This is a full-stack CRUD (Create, Read, Update, Delete) application that allows users to track and manage application submissions. It was built as part of a learning project to explore both backend development using ASP.NET (C#) and frontend design using JavaScript, HTML, and CSS.

## Features

- Add, view, update, and delete application entries
- Frontend built with vanilla JavaScript, CSS, and HTML
- Backend built using C# and ASP.NET Web API
- RESTful API integration between frontend and backend
- Organized structure for frontend and backend folders

## Tech Stack

- **Frontend:** JavaScript, HTML, CSS
- **Backend:** C#, ASP.NET
- **Database:** (To be added or specify if used)
- **Version Control:** Git


## Update 6/17/2025

### Immediate Tasks
- [ ] Github Projects - Start here next meeting (July 1st - Maybe, July 15th, 🔒 and loaded)
- [ ] Fix npm issues and get app running
- [ ] Audit current functionality - document what works/broken

### Backend Migration  
- [ ] Migrate from current backend to Go
- [ ] Implement user database
- [ ] Add Auth0 authentication
- [ ] Build dashboard functionality

### Priority
Focus on immediate tasks first, then proceed with backend migration.



## **Last Updated:** June 21, 2025

### .NET Configuration

This project requires .NET 8.0 runtime. Due to system having multiple .NET versions installed, the following configuration was implemented:

- **Primary System**: .NET 9.0.5 (global default)
- **Project Runtime**: .NET 8.0.117 via Homebrew (`dotnet@8`)
- **Configuration**: Shell alias created for project-specific .NET 8 usage

### Running the Application

```bash
# Start the development server
dotnet8 run

# Application will be available at:
# http://localhost:5150
```

### Development Notes

- HTTPS development certificate installed for local development
- Application configured for Development environment
- Hot reload and debugging enabled



## Addional Development Updates

### Component Architecture Refactor
- **Renamed Home component to Dashboard** - Better reflects the application's purpose as a job tracking dashboard
- **Implemented component-specific CSS architecture** - Each component now has its own CSS file to prevent inheritance conflicts and improve maintainability
- **Cleaned up global App.css** - Stripped down to essential global styles only (body, fonts)

### UI Improvements
- **Enhanced Navigation** - Added specific CSS classes and improved button styling with distinct colors
- **Restored main container frame** - Added visual separation between navigation and dashboard content with border, background, and shadow effects
- **Improved visual hierarchy** - Clean separation between global styles and component-specific styling

### Technical Improvements
- **Better file organization** - Component-specific CSS files imported directly into components
- **Eliminated CSS conflicts** - Removed generic button/nav styles that were causing inheritance issues
- **Semantic CSS classes** - All components now use specific, meaningful class names

## Upcoming Features (Monday) June 23rd, 2025
- **Sort functionality** - Dropdown with options to sort by Date and Status
- **Filter functionality** - Dropdown to filter applications by Status, Company, etc.
- **Enhanced navigation** - Additional nav buttons for improved user experience

## Current Features
- Dashboard view of all job applications
- Add new applications
- View individual application details
- Update existing applications
- Clean, responsive interface