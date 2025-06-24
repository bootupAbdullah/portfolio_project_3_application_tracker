import { useState } from "react";
import './InfoToolTip.css';

const InfoToolTip = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="info-tooltip-container">
            <button 
                className="info-icon"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onClick={() => setShowTooltip(!showTooltip)}
            >
                ℹ️
            </button>
            {showTooltip && (
                <div className="tooltip">
                    <p>Current features:</p>
                    <ul>
                        <li>✅ View applications</li>
                        <li>✅ Add new applications</li>
                        <li>✅ Delete applicatons</li>
                        <li>🚧 Update coming soon</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default InfoToolTip;