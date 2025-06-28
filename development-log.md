### 06-21-2025 - .NET Development Environment Configuration

**What I did:**
* Diagnosed .NET version conflict (had .NET 9 globally, needed .NET 8 for project)
* Installed .NET 8 via Homebrew (`dotnet@8`)
* Created shell alias `dotnet8` for project-specific .NET 8 usage
* Updated README.md with environment setup documentation

**Why it matters:**
* Enables running ASP.NET Core project locally without breaking global .NET setup
* Maintains conventional approach (latest version as global default)
* Documents environment for future developers/deployment

**Challenges:**
* Initial confusion about PATH modification vs alias approach
* .NET 8 was keg-only, required explicit configuration
* Balancing conventional practices with project needs

**Next steps:**
* Research session-based data isolation for demo protection
 
* Goal: Fresh data state per browser session, automatic cleanup on session expiry


### 06-28-2025 - Responsive Design Implementation

**What I did:**
* Implemented comprehensive responsive design across all components
* Added mobile-first breakpoints (480px mobile, 768px tablet, 1024px+ desktop)
* Created touch-friendly navigation with stacked mobile buttons
* Optimized card layouts for single-column mobile, multi-column desktop
* Fixed InfoTooltip accessibility with click support for mobile devices
* Reduced footer height and improved mobile typography

**Why it matters:**
* Ensures application works seamlessly across all device types
* Improves user experience for mobile job seekers (primary use case)
* Demonstrates modern responsive design practices for portfolio
* Follows mobile-first development methodology

**Challenges:**
* Coordinating breakpoints across multiple components
* Balancing touch-friendly sizing with visual design
* Managing hover states vs touch interactions
* Eliminating horizontal scroll issues on small screens

**Technical approach:**
* Used CSS media queries with min-width and max-width ranges
* Implemented viewport-based sizing (vw/vh) for responsive cards
* Added click handlers alongside hover for cross-device compatibility
* Maintained design consistency across all breakpoints

**Next steps:**
* Test on real devices across different manufacturers
* Consider PWA capabilities for mobile app-like experience