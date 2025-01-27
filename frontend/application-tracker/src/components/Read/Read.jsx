const Read = ({ application, onBackClick }) => {

    return (
        <div className='readContainer'>
            <h2>Company Name: {application.companyName}</h2>
            <h2>Job Title: {application.jobTitle}</h2>
            <h3>Application Submitted: {application.submissionDate}</h3>
            <h3>Response Received: {application.responseDate}</h3>
            <h4>Result: {application.result}</h4>
            <button onClick={onBackClick}>Back</button>
        </div>
    );
};

export default Read