    export const PandaSVG = ({ size = 80 }) => (
        <svg width={size} height={size} viewBox="0 0 100 100" className="mx-auto">
            <circle cx="25" cy="25" r="15" fill="#2D3748"/>
            <circle cx="75" cy="25" r="15" fill="#2D3748"/>
            <circle cx="50" cy="50" r="25" fill="#F7FAFC"/>
            <ellipse cx="42" cy="45" rx="6" ry="8" fill="#2D3748"/>
            <ellipse cx="58" cy="45" rx="6" ry="8" fill="#2D3748"/>
            <circle cx="42" cy="44" r="3" fill="#F7FAFC"/>
            <circle cx="58" cy="44" r="3" fill="#F7FAFC"/>
            <ellipse cx="50" cy="55" rx="3" ry="2" fill="#2D3748"/>
            <path d="M 45 60 Q 50 65 55 60" stroke="#2D3748" strokeWidth="2" fill="none"/>
        </svg>
    );

    export const MammothSVG = ({ size = 80 }) => (
        <svg width={size} height={size} viewBox="0 0 100 100" className="mx-auto">
            <ellipse cx="50" cy="65" rx="30" ry="20" fill="#8B7355"/>
            <circle cx="50" cy="40" r="20" fill="#A0845C"/>
            <path d="M 35 50 Q 25 45 20 55" stroke="#F7FAFC" strokeWidth="3" fill="none"/>
            <path d="M 65 50 Q 75 45 80 55" stroke="#F7FAFC" strokeWidth="3" fill="none"/>
            <path d="M 50 55 Q 45 70 40 75 Q 35 80 45 82" stroke="#A0845C" strokeWidth="6" fill="none"/>
            <circle cx="43" cy="35" r="2" fill="#2D3748"/>
            <circle cx="57" cy="35" r="2" fill="#2D3748"/>
            <rect x="35" y="80" width="6" height="15" fill="#8B7355"/>
            <rect x="45" y="80" width="6" height="15" fill="#8B7355"/>
            <rect x="55" y="80" width="6" height="15" fill="#8B7355"/>
            <rect x="65" y="80" width="6" height="15" fill="#8B7355"/>
        </svg>
    );

    export const DinosaurSVG = ({ size = 80 }) => (
        <svg width={size} height={size} viewBox="0 0 100 100" className="mx-auto">
            <ellipse cx="45" cy="65" rx="25" ry="15" fill="#48BB78"/>
            <ellipse cx="40" cy="45" rx="8" ry="20" fill="#48BB78"/>
            <ellipse cx="35" cy="25" rx="12" ry="10" fill="#48BB78"/>
            <path d="M 70 65 Q 85 60 90 70 Q 85 75 75 70" fill="#48BB78"/>
            <polygon points="45,50 50,35 55,50" fill="#38A169"/>
            <polygon points="52,55 57,40 62,55" fill="#38A169"/>
            <polygon points="35,60 40,45 45,60" fill="#38A169"/>
            <circle cx="32" cy="22" r="2" fill="#2D3748"/>
            <rect x="30" y="75" width="5" height="12" fill="#48BB78"/>
            <rect x="40" y="75" width="5" height="12" fill="#48BB78"/>
            <rect x="50" y="75" width="5" height="12" fill="#48BB78"/>
            <rect x="60" y="75" width="5" height="12" fill="#48BB78"/>
        </svg>
    );

    