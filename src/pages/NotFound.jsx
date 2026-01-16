import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            background: '#0a0a0a',
            color: '#fff'
        }}>
            <motion.h1
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                style={{ fontSize: '10rem', fontWeight: '800', margin: 0 }}
            >
                404
            </motion.h1>
            <p style={{ fontSize: '1.5rem', color: '#888', marginBottom: '2rem' }}>Oops! This page has vanished into hyperspace.</p>
            <Link to="/" className="btn btn-primary" style={{ padding: '15px 40px' }}>
                Back to Safety
            </Link>
        </div>
    );
};

export default NotFound;
