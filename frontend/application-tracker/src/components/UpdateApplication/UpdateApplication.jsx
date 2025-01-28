import React, { useState } from 'react';

const Update = ({application, onBackClick, handlePut, setApplications, setPage}) => {
    
    const [companyName, setCompanyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [submissionDate, setSubmissionDate] = useState('');
    const [responseDate, setResponseDate] = useState('');
    const [result, setResult] = useState('');
    
    const handleBackButton = () => {
        setPage('Home')
    }
    
    return (



        <>
        <h1>Work in Progress</h1>
        <button onClick={handleBackButton}>Back</button>
        </>
        // <form onSubmit={handleUpdate}>
        //     <label>
        //         Company Name:
        //         <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        //     </label>
        //     <label>
        //         Job Title:
        //         <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
        //     </label>
        //     <label>
        //         Submission Date:
        //         <input type="text" value={submissionDate} onChange={(e) => setSubmissionDate(e.target.value)} />
        //     </label>
        //     <label>
        //         Response Date:
        //         <input type="text" value={responseDate} onChange={(e) => setResponseDate(e.target.value)} />
        //     </label>
        //     <label>
        //         Result:
        //         <input type="text" value={result} onChange={(e) => setResult(e.target.value)} />
        //     </label>
        //     <button type="submit">Create Application</button>
        // </form>
    );
}

export default Update

