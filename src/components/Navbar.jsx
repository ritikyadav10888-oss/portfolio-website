import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
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
                <a href="#" style={{ fontSize: '1.8rem', fontWeight: '700', color: '#fff' }}>
                    Ritik<span className="text-gradient">.</span>
                </a>

                <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    {['About', 'Resume', 'Skills', 'Projects', 'Goals'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            style={{ color: '#e0e0e0', fontWeight: '500', fontSize: '1.1rem' }}
                            onMouseOver={(e) => e.target.style.color = 'var(--primary-color)'}
                            onMouseOut={(e) => e.target.style.color = '#e0e0e0'}
                        >
                            {item}
                        </a>
                    ))}
                    <a href="#contact" className="btn btn-primary">Contact</a>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
