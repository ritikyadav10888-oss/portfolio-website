import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';

const ContactPage = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            style={{
                padding: '160px 0 100px 0',
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center'
            }}
        >
            <div className="container" style={{ textAlign: 'center' }}>
                <h1 className="heading-lg text-gradient" style={{ marginBottom: '2rem' }}>Get In Touch</h1>
                <p style={{ color: '#aaa', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2.5rem'
                }}>
                    <MagneticButton href="mailto:ritikyadav10888@gmail.com">
                        <div className="glass-card" style={{ padding: '2rem 4rem', borderRadius: '100px' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--primary-color)' }}>ritikyadav10888@gmail.com</h3>
                        </div>
                    </MagneticButton>

                    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <MagneticButton href="https://linkedin.com/in/ritikyadav">
                            <div className="glass-card" style={{ padding: '1rem 2rem', borderRadius: '50px' }}>LinkedIn</div>
                        </MagneticButton>
                        <MagneticButton href="https://github.com/ritikyadav10888-oss">
                            <div className="glass-card" style={{ padding: '1rem 2rem', borderRadius: '50px' }}>GitHub</div>
                        </MagneticButton>
                        <MagneticButton href="tel:+919321058356">
                            <div className="glass-card" style={{ padding: '1rem 2rem', borderRadius: '50px' }}>Call Me</div>
                        </MagneticButton>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactPage;
