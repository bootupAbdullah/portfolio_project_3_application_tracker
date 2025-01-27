import { useEffect, useState } from "react";
import * as applicationService from './services/applicationService';
import Navbar from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Create from "./components/Create/Create";
import './App.css';


const App = () => {

  const [page, setPage] = useState("Home")
  const [applications, setApplications] = useState([])
  
  const displayPage = (event) => {
    setPage(event.target.value);
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
    <main>
      <div className="nav">
      <Navbar displayPage={displayPage} />
      </div>
      {page === "Home" ? (
        <Home allApplications={applications} />
      ) : (
        <Create service={applicationService} setApplications={setApplications} />
      )}
    </main>
    </>
  );
}

export default App
