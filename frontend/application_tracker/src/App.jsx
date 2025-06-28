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
    setSelectedApplication(application);
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <header className="app-header">
        <div className="header-text-content">
        <h1 className="app-title">Application Tracker</h1>
        <p className="app-subtitle">Feel free to explore with test data - please delete any entries you add</p>
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
          <Read application={selectedApplication} onBackClick={handleBackClick} handleUpdate={handleUpdate} setPage={setPage} service={applicationService} fetchData={fetchData}/>
        )}
        {page === "Update" && selectedApplication && (
          <Update application={selectedApplication} onBackClick={handleBackClick} setApplications={setApplications} setPage={setPage} />
        )}
      </main>
      <Footer> </Footer>
    </>
  );
}

export default App