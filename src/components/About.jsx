import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', md: 'row', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ flex: 1 }}
                    >
                        <h2 className="heading-lg">Character & Approach</h2>
                        <p style={{ fontSize: '1.2rem', color: '#b0b0b0', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                            I am a proactive leader who thrives on technical challenges and collaboration.
                            My work is driven by a value for clarity, scalability, and adhering to best practices.
                        </p>
                        <p style={{ fontSize: '1.1rem', color: '#b0b0b0', marginBottom: '2rem' }}>
                            Whether it's bridging technical logic with user-friendly narratives or optimizing layouts for seamless UX,
                            I am energized by making projects both innovative and accessible. I'm an iterative learner, constantly digging deep into logic, edge cases, and dialect-specific syntax.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ flex: 1, width: '100%' }}
                    >
                        <div className="glass-card" style={{ padding: '2.5rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'white' }}>Profile Breakdown</h3>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <span style={{ color: '#b0b0b0', fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>Current Role</span>
                                <strong style={{ color: '#fff', fontSize: '1.1rem' }}>Individual Developer</strong>
                                <p style={{ color: 'var(--primary-color)' }}>Force Sports and Wears India</p>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <span style={{ color: '#b0b0b0', fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>Education</span>
                                <strong style={{ color: '#fff', fontSize: '1.1rem' }}>B.E. in Computer Science</strong>
                                <p style={{ color: 'var(--primary-color)' }}>Mumbai University (2024) • CGPA: 7.5/10</p>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <span style={{ color: '#b0b0b0', fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>Location</span>
                                <strong style={{ color: '#fff', fontSize: '1.1rem' }}>Borivali, Mumbai, India</strong>
                            </div>

                            <div>
                                <span style={{ color: '#b0b0b0', fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>Focus</span>
                                <strong style={{ color: '#fff', fontSize: '1.1rem' }}>Full Stack Development & Sports Domain</strong>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
export default About;
