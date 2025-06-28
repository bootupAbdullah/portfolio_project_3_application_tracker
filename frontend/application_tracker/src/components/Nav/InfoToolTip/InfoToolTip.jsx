import { useState } from "react";
import './InfoToolTip.css';

const InfoToolTip = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    const toggleToolTip = () => {
        setShowTooltip(!showTooltip)
    }

    return (
        <div className="info-tooltip-container"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={toggleToolTip}
        >
            <div className="info-icon"> ℹ️ </div>
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