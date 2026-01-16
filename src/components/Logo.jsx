
const Logo = ({ width = 40, height = 40 }) => (
    <svg width={width} height={height} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" stroke="url(#paint0_linear)" strokeWidth="4" />
        <path d="M35 30V70M35 50H55L65 70M35 30H55C60.5228 30 65 34.4772 65 40C65 45.5228 60.5228 50 55 50H35"
            stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#646cff" />
                <stop offset="1" stopColor="#ff007a" />
            </linearGradient>
        </defs>
    </svg>
);

export default Logo;
