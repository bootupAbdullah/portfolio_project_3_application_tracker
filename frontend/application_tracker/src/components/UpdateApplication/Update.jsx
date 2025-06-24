import React, { useState } from 'react';
import './Update.css';

const Update = ({application, onBackClick, handlePut, setApplications, setPage}) => {
    
    const [companyName, setCompanyName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [submissionDate, setSubmissionDate] = useState('');
    const [responseDate, setResponseDate] = useState('');
    const [result, setResult] = useState('');
    

    
    return (
        <div className="update-container">
            <div className="update-content">
                <h1 className="update-title">Work in Progress</h1>
                <button onClick={onBackClick} className="update-back-button">Back</button>
            </div>
        </div>
    );
}

export default Update