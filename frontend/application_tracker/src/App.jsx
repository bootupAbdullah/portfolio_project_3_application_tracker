import { useEffect, useState } from "react";
import * as applicationService from "./services/applicationService";
import Navbar from "./components/Nav/Nav";
import Dashboard from "./components/Dashboard/Dashboard";
import Create from "./components/Create/Create";
import Read from "./components/Read/Read";
import Update from "./components/UpdateApplication/Update"
import Footer from "./components/Footer/Footer"
import "./App.css";

const App = () => {

  const [page, setPage] = useState('Dashboard')
  const [applications, setApplications] = useState([])
  const [selectedApplication, setSelectedApplication] = useState(null)

  const displayPage = (event) => {
    setPage(event.target.value);
  }

  const handleCardClick = (application) => {
    setSelectedApplication(application);
    setPage('Read');
  }

  const handleBackClick = (application) => {
    setSelectedApplication(null);
    setPage('Dashboard')
  }

  const handleUpdate = (application) => {
    setSelectedApplication(application)
    setPage('Update')
  }

  const fetchData = async () => {
      const data = await applicationService.show();
      console.log(data)
      if (data) setApplications(data);
    };

  const handleReset = async () => {
    try {
      await applicationService.resetApplications();
      await fetchData();
    } catch (error) {
      console.error('Reset failed:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <header className="app-header">
        <div className="header-text-content">
  <div className="title-row">
    <h1 className="app-title">Application Tracker</h1>
    <button className="refresh-button" onClick={handleReset}>
      <img className="image-svg-refresh" src="/images/svg/refresh.svg" alt="Reset demo data" />  
    </button>
  </div>
  <p className="app-subtitle">Feel free to explore - your session is private and won't affect other users</p>
</div>
        <Navbar displayPage={displayPage} currentPage={page} />
      </header>
      <main className="main-card-component">
        {page === "Dashboard" && (
          <Dashboard allApplications={applications} onCardClick={handleCardClick} />
        )}
        {page === "Create" && (
          <Create service={applicationService} setApplications={setApplications} />
        )}
        {page === "Read" && selectedApplication && (
          <Read application={selectedApplication} onBackClick={handleBackClick} 
          handleUpdate={handleUpdate} 
          setPage={setPage} 
          service={applicationService} 
          fetchData={fetchData}/>
        )}
        {page === "Update" && selectedApplication && (
          <Update application={selectedApplication} onBackClick={handleBackClick} 
          setApplications={setApplications} 
          setPage={setPage}
          service={applicationService}/>
        )}
      </main>
      <Footer> </Footer>
    </>
  );
}

export default App