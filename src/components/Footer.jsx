import MagneticButton from './MagneticButton';

const Footer = () => {
    return (
        <footer id="contact" style={{
            padding: '8rem 0 4rem 0',
            background: 'linear-gradient(to bottom, #050505 0%, #0a0a0a 100%)',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>

                <MagneticButton className="footer-cta-wrapper">
                    <h2 style={{
                        fontSize: 'clamp(3rem, 10vw, 8rem)',
                        fontWeight: '800',
                        lineHeight: '0.9',
                        marginBottom: '3rem',
                        background: 'linear-gradient(135deg, #fff 0%, #666 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '-2px',
                        textTransform: 'uppercase'
                    }}>
                        LET'S WORK<br />TOGETHER
                    </h2>
                </MagneticButton>

                <p style={{
                    color: '#b0b0b0',
                    marginBottom: '4rem',
                    fontSize: '1.2rem',
                    maxWidth: '600px',
                    margin: '0 auto 4rem auto',
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: 'italic'
                }}>
                    Open for opportunities, hackathon collaborations, and<br />innovative technical discussions.
                </p>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    marginBottom: '4rem',
                    flexWrap: 'wrap'
                }}>
                    <MagneticButton href="mailto:ritikyadav10888@gmail.com" style={{ textDecoration: 'none' }}>
                        <div style={{
                            padding: '1.5rem 2.5rem',
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '50px',
                            color: '#fff',
                            fontSize: '1.1rem',
                            transition: 'background 0.3s ease'
                        }}>
                            ritikyadav10888@gmail.com
                        </div>
                    </MagneticButton>

                    <MagneticButton href="https://github.com/ritikyadav10888-oss" style={{ textDecoration: 'none' }}>
                        <div style={{
                            padding: '1.5rem 2.5rem',
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '50px',
                            color: '#fff',
                            fontSize: '1.1rem'
                        }}>
                            Github Profile
                        </div>
                    </MagneticButton>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}>
                    <p style={{ color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '1.1rem' }}>
                        📞 9321058356 <span style={{ color: '#888' }}>|</span> 9326126507
                    </p>
                    <p style={{ color: '#888', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        © {new Date().getFullYear()} Ritik Yadav. Crafted with passion in Mumbai.
                    </p>
                    <div style={{ marginTop: '5px' }}>
                        <a href="/sitemap.xml" style={{ color: '#444', fontSize: '0.75rem', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary-color)'} onMouseOut={(e) => e.target.style.color = '#444'}>
                            SITEMAP
                        </a>
                    </div>
                </div>
            </div>

            {/* Background enhancement */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, rgba(100, 108, 255, 0.05) 0%, transparent 70%)',
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>
        </footer>
    );
};
export default Footer;
