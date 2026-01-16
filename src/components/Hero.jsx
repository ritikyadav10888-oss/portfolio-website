import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    const name = "Ritik";

    const letterContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5
            }
        }
    };

    const letterAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", damping: 12, stiffness: 200 }
        }
    };

    return (
        <section id="home" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Background elements are now handled globally in App.jsx via AnimatedBackground */}

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1, paddingTop: '60px' }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        marginBottom: '2rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 24px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '30px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                    }}
                >
                    <span style={{ fontSize: '1.2rem' }}>📍</span>
                    <span style={{ color: '#e0e0e0', fontWeight: '500', letterSpacing: '0.5px' }}>Mumbai, India</span>
                </motion.div>

                <motion.div
                    variants={letterContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <h1 style={{
                        fontSize: 'clamp(4rem, 10vw, 8rem)',
                        fontWeight: '800',
                        lineHeight: 1,
                        marginBottom: '1rem',
                        letterSpacing: '-3px'
                    }}>
                        <span style={{ display: 'block', fontSize: '0.4em', fontWeight: '400', letterSpacing: '2px', color: '#a0a0a0', marginBottom: '10px' }}>HELLO, I'M</span>
                        {name.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={letterAnimation}
                                className="text-gradient"
                                style={{ display: 'inline-block' }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h1>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        color: '#e0e0e0',
                        marginBottom: '1.5rem',
                        fontWeight: '300'
                    }}
                >
                    Full Stack Developer & <span style={{ color: 'var(--secondary-color)', fontWeight: '600' }}>Sports Tech Enthusiast</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    style={{
                        fontSize: '1.1rem',
                        color: '#a0a0a0',
                        marginBottom: '3rem',
                        maxWidth: '600px',
                        margin: '0 auto 3rem auto',
                        lineHeight: '1.8'
                    }}
                >
                    Crafting <span style={{ color: '#fff' }}>scalable</span> applications, architecting <span style={{ color: '#fff' }}>secure</span> systems, and delivering <span style={{ color: '#fff' }}>innovative</span> digital experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, type: 'spring' }}
                    style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
                >
                    <Link to="/projects" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>View Projects</Link>
                    <Link to="/#about" className="btn" style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#fff',
                        backdropFilter: 'blur(5px)',
                        padding: '15px 40px',
                        fontSize: '1.1rem'
                    }}>
                        About Me
                    </Link>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    style={{
                        position: 'absolute',
                        bottom: '30px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        opacity: 0.7
                    }}
                >
                    <div style={{
                        width: '30px',
                        height: '50px',
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderRadius: '15px',
                        display: 'flex',
                        justifyContent: 'center',
                        paddingTop: '10px'
                    }}>
                        <div style={{
                            width: '4px',
                            height: '8px',
                            background: '#fff',
                            borderRadius: '2px'
                        }}></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
export default Hero;
