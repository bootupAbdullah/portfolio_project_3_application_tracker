import '../../App.css';
import '../Dashboard/Dashboard.css';

const Dashboard = ({ allApplications, onCardClick }) => {
    return (
        <div className="dashboard-card-container">
            {allApplications.map((application, index) => (
                <div 
                    className="dashboard-application-container" 
                    key={index}
                    onClick={() => onCardClick(application)}
                >
                    <div className="dashboard-application-card">
                        <h2 className="dashboard-card-company-name">{application.companyName}</h2>
                        <h3 className="dashboard-card-job-title">{application.jobTitle}</h3>
                    </div>
                    <div className="dashboard-card-dates">
                        <p className="dashboard-card-submission-date">Applied: {application.submissionDate}</p>
                        <p className="dashboard-card-response-date">Initial Response: {application.responseDate}</p>
                    </div>
                    <div className="dashboard-card-result">
                        <span className="dashboard-result-badge">{application.result}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;