import './Read.css'

const Read = ({ application, onBackClick, handleUpdate, service, setPage, fetchData}) => {
    
      const handleDelete = () => {
        service.deleteRequest(application, setPage, fetchData)
      }

    return (
        <div className="read-container">
            <div className="read-application-card">
                <div className="read-card-content">
                    <h2 className="read-card-company-name">{application.companyName}</h2>
                    <h3 className="read-card-job-title">{application.jobTitle}</h3>
                </div>
                <div className="read-card-dates">
                    <p className="dashboard-card-submission-date">Applied: {application.submissionDate}</p>
                    <p className="dashboard-card-response-date">Initial Response: {application.responseDate}</p>
                </div>
                <div className="read-card-result">
                    <span className="read-result-badge">{application.result}</span>
                </div>
            </div>
            <div className="read-button-group">
                <button className="read-back-button" onClick={onBackClick}>Back</button>
                <button className="read-update-button" onClick={() => handleUpdate(application)}>Update</button>
                <button className="read-delete-button" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Read;
