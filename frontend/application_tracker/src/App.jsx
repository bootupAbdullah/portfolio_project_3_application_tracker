import { useEffect, useState } from "react";
import * as applicationService from './services/applicationService';
import Navbar from "./components/Nav/Nav";
import Dashboard from "./components/Dashboard/Dashboard";
import Create from "./components/Create/Create";
import Read from './components/Read/Read';
import UpdateApplication from "./components/UpdateApplication/UpdateApplication"
import './App.css';

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
    setPage('UpdateApplication')
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await applicationService.show();
      if (data) setApplications(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar displayPage={displayPage} />
    <main>
      {page === "Dashboard" && (
        <Dashboard allApplications={applications} onCardClick={handleCardClick} />
      )}
      {page === "Create" && (
        <Create service={applicationService} setApplications={setApplications} />
      )}
      {page === "Read" && selectedApplication && (
        <Read application={selectedApplication} onBackClick={handleBackClick} handleUpdate={handleUpdate} />
      )}
      {page === "UpdateApplication" && selectedApplication && (
        <UpdateApplication application={selectedApplication} onBackClick={handleBackClick} setApplications={setApplications} setPage={setPage} />
      )}
    </main>
    </>
  );
}

export default App