import '../../App.css';
import '../Dashboard/Dashboard.css';

const Dashboard = ({ allApplications, onCardClick }) => {
    return (
        <div className="dashboard-container">
            {allApplications.map((application, index) => (
                <div 
                    className="dashboard-application-card-container" 
                    key={index}
                    onClick={() => onCardClick(application)}
                >
                    <div className="dashboard-application-card">
                        <h2 className="dashboard-card-company-name">Company Name: {application.companyName}</h2>
                        <h2 className="dashboard-card-job-title">Job Title: {application.jobTitle}</h2>
                    </div>
                    <div className="dashboard-card-dates">
                        <h3 className="dashboard-card-submission-date">Application Submitted: {application.submissionDate}</h3>
                        <h3 className="dashboard-card-response-date">Response Received: {application.responseDate}</h3>
                    </div>
                    <div className="dashboard-card-result">
                        <h4 className="dashboard-result">Result: {application.result}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;