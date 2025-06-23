import './Read.css'


const Read = ({ application, onBackClick, handleUpdate }) => {
    return (
        <div className="read-container">
            <h2 className="read-company-name">Company Name: {application.companyName}</h2>
            <h2 className="read-job-title">Job Title: {application.jobTitle}</h2>
            <h3 className="read-submission-date">Application Submitted: {application.submissionDate}</h3>
            <h3 className="read-response-date">Response Received: {application.responseDate}</h3>
            <h4 className="read-result">Result: {application.result}</h4>
            <div className="read-button-group">
                <button className="read-button" onClick={onBackClick}>Back</button>
                <button className="read-button" onClick={handleUpdate}>Update</button>
            </div>
        </div>
    );
};

export default Read;
