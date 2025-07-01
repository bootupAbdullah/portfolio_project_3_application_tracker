import React, { useState } from 'react';
import './Update.css';

const Update = ({ application, onBackClick, setApplications, setPage, service }) => {

    const [companyName, setCompanyName] = useState(application?.companyName || '');
    const [jobTitle, setJobTitle] = useState(application?.jobTitle || '');
    const [submissionDate, setSubmissionDate] = useState(application?.submissionDate || '');
    const [responseDate, setResponseDate] = useState(application?.responseDate || '');
    const [result, setResult] = useState(application?.result || '');

    console.log('Update component received application:', application);
    console.log('Company name from application:', application?.companyName);
    console.log('State companyName:', companyName);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const updatedApplication = {
            id: application.id,
            companyName,
            jobTitle,
            submissionDate,
            responseDate,
            result,
        };

        try {
            await service.putRequest(application.id, updatedApplication);
            const updatedData = await service.show();
            setApplications(updatedData);
            setPage('Dashboard');
        } catch (error) {
            console.error('Update failed:', error);
        }
    };

    return (
        <div className="update-container">
            <form onSubmit={handleSubmit} className="update-form">
                <h2 className="update-title">Update Application</h2>
                
                <div className="update-form-group">
                    <label className="update-form-label">Company Name:</label>
                    <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="update-form-input"
                        required
                    />
                </div>
                
                <div className="update-form-group">
                    <label className="update-form-label">Job Title:</label>
                    <input
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        className="update-form-input"
                        required
                    />
                </div>
                
                <div className="update-form-group">
                    <label className="update-form-label">Submission Date:</label>
                    <input
                        type="text"
                        placeholder="MM-DD-YY (e.g., 1-15-25)"
                        value={submissionDate}
                        onChange={(e) => setSubmissionDate(e.target.value)}
                        className="update-form-input"
                        required
                    />
                </div>

                <div className="update-form-group">
                    <label className="update-form-label">Response Date:</label>
                    <input
                        type="text"
                        placeholder="MM-DD-YY (e.g., 1-22-25)"
                        value={responseDate}
                        onChange={(e) => setResponseDate(e.target.value)}
                        className="update-form-input"
                    />
                </div>
                
                <div className="update-form-group">
                    <label className="update-form-label">Result:</label>
                    <input
                        type="text"
                        value={result}
                        onChange={(e) => setResult(e.target.value)}
                        className="update-form-input"
                    />
                </div>
                
                <div className="update-button-group">
                    <button type="button" onClick={onBackClick} className="update-back-button">
                        Cancel
                    </button>
                    <button type="submit" className="update-submit-button">
                        Update Application
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Update;