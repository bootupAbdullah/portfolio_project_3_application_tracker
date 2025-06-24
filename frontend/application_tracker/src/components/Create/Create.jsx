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
        <div className="create-container">
            <form onSubmit={handleSubmit} className="create-form">
                <div className="create-form-group">
                    <label className="create-form-label">Company Name:</label>
                    <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="create-form-input"
                        required
                    />
                </div>
                
                <div className="create-form-group">
                    <label className="create-form-label">Job Title:</label>
                    <input
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        className="create-form-input"
                        required
                    />
                </div>
                
                <div className="create-form-group">
                    <label className="create-form-label">Submission Date:</label>
                    <input
                        type="date"
                        value={submissionDate}
                        onChange={(e) => setSubmissionDate(e.target.value)}
                        className="create-form-input"
                        required
                    />
                </div>
                
                <div className="create-form-group">
                    <label className="create-form-label">Response Date:</label>
                    <input
                        type="date"
                        value={responseDate}
                        onChange={(e) => setResponseDate(e.target.value)}
                        className="create-form-input"
                    />
                </div>
                
                <div className="create-form-group">
                    <label className="create-form-label">Result:</label>
                    <input
                        type="text"
                        value={result}
                        onChange={(e) => setResult(e.target.value)}
                        className="create-form-input"
                    />
                </div>
                
                <button type="submit" className="create-form-button">
                    Create Application
                </button>
            </form>
        </div>
    );
};

export default Create;