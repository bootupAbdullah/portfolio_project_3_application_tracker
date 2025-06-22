import '../../App.css';
import { useState } from 'react';

const Dashboard = ({ allApplications, onCardClick }) => {

    return (
        <div className='applicationContainer'>
            {allApplications.map((application, index) => (
                <div 
                    className='applicationContent' 
                    key={index}
                    onClick={() => onCardClick(application)}
                >
                    <h2>Company Name: {application.companyName}</h2>
                    <h2>Job Title: {application.jobTitle}</h2>
                    <h3>Application Submitted: {application.submissionDate}</h3>
                    <h3>Response Received: {application.responseDate}</h3>
                    <h4>Result: {application.result}</h4>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;