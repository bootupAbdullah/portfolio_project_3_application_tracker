import './Read.css'

const Read = ({ application, onBackClick, handleUpdate }) => {
    return (
        <div className="read-container">
            <div className="read-application-card">
                <div className="read-card-content">
                    <h2 className="read-card-company-name">{application.companyName}</h2>
                    <h3 className="read-card-job-title">{application.jobTitle}</h3>
                </div>
                <div className="read-card-dates">
                    <p className="read-card-submission-date">{application.submissionDate}</p>
                    <p className="read-card-response-date">{application.responseDate}</p>
                </div>
                <div className="read-card-result">
                    <span className="read-result-badge">{application.result}</span>
                </div>
            </div>
            <div className="read-button-group">
                <button className="read-back-button" onClick={onBackClick}>Back</button>
                <button className="read-update-button" onClick={handleUpdate}>Update</button>
            </div>
        </div>
    );
};

export default Read;
