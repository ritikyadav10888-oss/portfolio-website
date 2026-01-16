import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blog', path: '/blog' },
        { name: 'Goals', path: '/goals' }
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                background: 'rgba(10, 10, 10, 0.8)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                height: '80px',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                <Link to="/" style={{ fontSize: '1.8rem', fontWeight: '700', color: '#fff', display: 'flex', alignItems: 'center', gap: '0.75rem', zIndex: 1002 }}>
                    <img src="/logo.png" alt="Ritik Yadav Logo" style={{ height: '40px', width: 'auto' }} />
                    <span>Ritik<span className="text-gradient">.</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <div id="search" style={{ width: '200px' }}></div>
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            style={{
                                color: isActive(item.path) ? 'var(--primary-color)' : '#e0e0e0',
                                fontWeight: '500',
                                fontSize: '1.1rem'
                            }}
                            onMouseOver={(e) => e.target.style.color = 'var(--primary-color)'}
                            onMouseOut={(e) => !isActive(item.path) && (e.target.style.color = '#e0e0e0')}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="btn btn-primary" style={{
                        padding: '0.5rem 1.5rem',
                        background: 'var(--primary-color)',
                        color: '#fff',
                        borderRadius: '50px',
                        fontWeight: '600'
                    }}>Contact</Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ fontSize: '1.5rem', background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            style={{
                                color: isActive(item.path) ? 'var(--primary-color)' : '#fff',
                                fontWeight: '700',
                                fontSize: '2rem'
                            }}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        style={{
                            padding: '1rem 3rem',
                            background: 'var(--primary-color)',
                            color: '#fff',
                            borderRadius: '50px',
                            fontWeight: '600',
                            fontSize: '1.5rem',
                            marginTop: '2rem'
                        }}
                    >
                        Contact Me
                    </Link>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
