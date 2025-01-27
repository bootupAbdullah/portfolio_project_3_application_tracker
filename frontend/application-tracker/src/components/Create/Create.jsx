import React, { useState } from 'react';
import './Create.css'; 

const Create = ({service, setApplications}) => {
    const [companyName, setCompanyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [submissionDate, setSubmissionDate] = useState('');
    const [responseDate, setResponseDate] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newApplication = {
            companyName,
            jobTitle,
            submissionDate,
            responseDate,
            result,
        };

        const response = await service.postNewApplication(newApplication);
        console.log(response);

        //Refresh application to add new app
        const updatedData = await service.show();
        setApplications(updatedData);

        // Reset form inputs
        setCompanyName('');
        setJobTitle('');
        setSubmissionDate('');
        setResponseDate('');
        setResult('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Company Name:
                <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
            </label>
            <label>
                Job Title:
                <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
            </label>
            <label>
                Submission Date:
                <input type="text" value={submissionDate} onChange={(e) => setSubmissionDate(e.target.value)} />
            </label>
            <label>
                Response Date:
                <input type="text" value={responseDate} onChange={(e) => setResponseDate(e.target.value)} />
            </label>
            <label>
                Result:
                <input type="text" value={result} onChange={(e) => setResult(e.target.value)} />
            </label>
            <button type="submit">Create Application</button>
        </form>
    );
};

export default Create
