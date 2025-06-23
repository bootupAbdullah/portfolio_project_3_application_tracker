import React, { useState } from 'react';
import './Create.css'; 

const Create = ({ service, setApplications }) => {
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

        const updatedData = await service.show();
        setApplications(updatedData);

        setCompanyName('');
        setJobTitle('');
        setSubmissionDate('');
        setResponseDate('');
        setResult('');
    };

    return (
        <form onSubmit={handleSubmit} className="create-form">
            <label className="create-form-label">
                Company Name:
                <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="create-form-input"
                />
            </label>
            <label className="create-form-label">
                Job Title:
                <input
                    type="text"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    className="create-form-input"
                />
            </label>
            <label className="create-form-label">
                Submission Date:
                <input
                    type="text"
                    value={submissionDate}
                    onChange={(e) => setSubmissionDate(e.target.value)}
                    className="create-form-input"
                />
            </label>
            <label className="create-form-label">
                Response Date:
                <input
                    type="text"
                    value={responseDate}
                    onChange={(e) => setResponseDate(e.target.value)}
                    className="create-form-input"
                />
            </label>
            <label className="create-form-label">
                Result:
                <input
                    type="text"
                    value={result}
                    onChange={(e) => setResult(e.target.value)}
                    className="create-form-input"
                />
            </label>
            <button type="submit" className="create-form-button">
                Create Application
            </button>
        </form>
    );
};

export default Create;
