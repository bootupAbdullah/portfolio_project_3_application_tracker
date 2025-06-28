# 📂 Application Tracker (React + ASP.NET Core)

<!-- ![Project Logo](./assets/logo.png)  -->

[![MVP Status](https://img.shields.io/badge/status-MVP-green)]()
[![License](https://img.shields.io/github/license/bootupAbdullah/portfolio_project_3_application_tracker)]()
[![Last Commit](https://img.shields.io/github/last-commit/bootupAbdullah/portfolio_project_3_application_tracker)]()
[![Live Demo](https://img.shields.io/badge/demo-live-blue)](https://application-tracker-dash.netlify.app/)

A full-stack job application tracking system built with React and ASP.NET Core. This portfolio project demonstrates modern web development practices with component-driven architecture, RESTful API design, and clean separation of concerns.

---

## 📖 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🔧 .NET Configuration](#net-configuration)
- [🚀 Running the Application](#running-the-application)
- [🧱 Development Notes](#development-notes)
- [🔄 Component & UI Updates](#styling-overhaul--design-system-implementation)
- [✅ MVP Completion Summary](#-mvp-completion-summary)

---

## ✨ Features
- Create and view job applications (update/delete functionality in development)
- Responsive React interface with component-scoped styling
- Interactive UI elements with hover states and smooth transitions
- RESTful ASP.NET Core Web API with structured endpoints
- Clean project architecture with separated frontend/backend directories

---

## 🛠️ Tech Stack
- **Frontend**: React, JSX, CSS Modules
- **Backend**: C# ASP.NET Core Web API
- **Development**: Git version control

**Last Updated:** June 21, 2025

---

## 🔧 .NET Configuration

This project requires .NET 8.0 runtime. Due to system having multiple .NET versions installed, the following configuration was implemented:

- **Primary System**: .NET 9.0.5 (global default)
- **Project Runtime**: .NET 8.0.117 via Homebrew (`dotnet@8`)
- **Configuration**: Shell alias created for project-specific .NET 8 usage

---

## 🚀 Running the Application

```bash
# Start the development server
dotnet8 run

# Application will be available at:
# http://localhost:5150
```

## 📒 Development Notes

- HTTPS development certificate installed for local development
- Application configured for Development environment
- Hot reload and debugging enabled

---

## 📆 Addional Development Updates

### 🧱 Component Architecture Refactor

- **Renamed Home component to Dashboard** – Better reflects the application's purpose as a job tracking dashboard
- **Implemented component-specific CSS architecture** – Each component now has its own CSS file to prevent inheritance conflicts and improve maintainability
- **Cleaned up global App.css** – Stripped down to essential global styles only (body, fonts)

### 🎨 UI Improvements

- **Enhanced Navigation** – Added specific CSS classes and improved button styling with distinct colors
- **Restored main container frame** – Added visual separation between navigation and dashboard content with border, background, and shadow effects
- **Improved visual hierarchy** – Clean separation between global styles and component-specific styling

### 🛠️ Technical Improvements

- **Better file organization** – Component-specific CSS files imported directly into components
- **Eliminated CSS conflicts** – Removed generic button/nav styles that were causing inheritance issues
- **Semantic CSS classes** – All components now use specific, meaningful class names

## 🚀 Upcoming Features (Monday) June 23rd, 2025

- **Sort functionality** – Dropdown with options to sort by Date and Status
- **Filter functionality** – Dropdown to filter applications by Status, Company, etc.
- **Enhanced navigation** – Additional nav buttons for improved user experience

## 📄 Current Features

- Dashboard view of all job applications
- Add new applications
- View individual application details
- Update existing applications
- Clean, responsive interface

# 🔹 Frontend Update - June 24, 2025

## 🎨 Styling Overhaul & Design System Implementation

Complete frontend refactor focusing on a cohesive, professional design system with soft neutral tones and consistent component architecture.

### 🎨 Design System

**Color Palette (Soft Blues/Grays)**

- **Background:** `#f8fafc` (neutral light)
- **Cards:** White with `#e2e8f0` borders
- **Accent:** `#64748b` (slate)
- **Interactive:** `#475569` (darker slate for hover states)

### 🔄 Component Updates

**Dashboard**

- Streamlined card content by removing label prefixes
- Implemented consistent class naming conventions
- Added subtle box shadows with matching border-radius for card elevation
- Enhanced hover interactions with lift effects

**Read Component**

- Unified styling with Dashboard for visual continuity
- Redesigned "Back" and "Update" buttons with consistent hover behavior
- Optimized spacing and removed redundant labels for cleaner layout

**Create Component**

- Restructured JSX using form groups for improved spacing consistency
- Upgraded date inputs to `type="date"` for better user experience
- Applied card-style form design with white background and soft shadows
- Aligned button styling with global navigation theme

**UpdateApplication** *(Work in Progress)*

- Established component structure matching existing layout patterns
- Applied initial styling for MVP functionality
- Marked as development placeholder

**Navigation**

- Removed non-standard navbar hover lift behavior
- Implemented individual button hover effects with lift and drop shadow
- Ensured smooth transitions align with global design standards

### 📝 Technical Improvements

- Consistent component-scoped CSS architecture
- Standardized hover states and transitions
- Improved accessibility through semantic form structure
- Enhanced visual hierarchy with professional card-based layout

## 📦 MVP Completion Summary

As of June 24, 2025, the core MVP for the Application Tracker has been completed. Key accomplishments from this final push include:

- ✅ Successful implementation of full CRUD operations (Create, Read, Delete)
- ✅ Refined component structure and prop flow (especially `Read.jsx`)
- ✅ Extracted `fetchData` for reusable, prop-driven state updates
- ✅ Ensured consistent styling and UI feedback across Dashboard and Read components
- ✅ Finalized scoped class naming for maintainable CSS
- ✅ Added concise date labels and improved visual hierarchy for card displays
- ✅ Clean frontend-backend integration with proper state synchronization

This version represents a stable, fully functional job application tracking system with core CRUD workflow. Update functionality is planned for future iterations.

# **Last Updated:** June 28, 2025

## 📱 Responsive Design Update - v1.1.0

### 🎨 Mobile-First Responsive Design

Complete responsive design implementation ensuring optimal user experience across all device types.

**Responsive Breakpoints**
- **Mobile (≤480px):** Single column layout, stacked navigation buttons
- **Tablet (481px-1024px):** Centered layouts, responsive card grids  
- **Desktop (>1024px):** Optimized multi-column card display

### 📱 Mobile Optimizations

**Dashboard**
- Single card per row on mobile with full-width display
- Touch-friendly card sizing and spacing
- Optimized font sizes for mobile readability

**Navigation**
- Stacked button layout for easy thumb navigation
- Centered tablet layout for balanced visual hierarchy
- Consistent button sizing across breakpoints

**Read Component**
- Full-width mobile cards with vertical action buttons
- Improved touch targets for better mobile interaction
- Responsive typography and spacing

**Footer**
- Compact mobile footer with reduced height
- Responsive text sizing and improved GitHub icon alignment

### 🛠️ Technical Improvements

- Comprehensive media queries across all components
- Touch-friendly InfoTooltip (added click support alongside hover)
- Eliminated horizontal scroll issues on mobile devices
- Maintained visual consistency across all screen sizes