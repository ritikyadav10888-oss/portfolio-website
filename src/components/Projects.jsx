import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="heading-lg"
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    Featured Projects
                </motion.h2>

                {/* Main Project */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true }}
                    className="glass-card"
                    style={{
                        marginTop: '2rem',
                        padding: '3rem',
                        border: '1px solid rgba(100, 108, 255, 0.3)',
                        boxShadow: '0 0 30px rgba(100, 108, 255, 0.1)'
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div>
                            <span style={{
                                color: 'var(--secondary-color)',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                fontSize: '0.8rem',
                                display: 'inline-block',
                                marginBottom: '1rem',
                                background: 'rgba(255, 0, 122, 0.1)',
                                padding: '5px 10px',
                                borderRadius: '4px'
                            }}>
                                In Development for QFEST 2025
                            </span>
                            <h3 className="heading-md" style={{ marginTop: '0.5rem', fontSize: '2.5rem' }}>Multi-Module Healthcare Assistant</h3>
                            <p style={{ color: '#a0a0a0', marginBottom: '2rem', fontSize: '1.2rem', lineHeight: '1.6' }}>
                                A comprehensive healthcare platform designed to bridge the gap between patients and medical services.
                                Features a secure NoSQL backend with role-based authentication.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                                {[
                                    { title: "🚑 Symptom Checker", desc: "Natural language mapping" },
                                    { title: "📅 Appointment Booking", desc: "Seamless scheduling logic" },
                                    { title: "💊 Medicine Reminders", desc: "Automated alerts" }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -5, background: 'rgba(255,255,255,0.08)' }}
                                        style={{
                                            background: 'rgba(255,255,255,0.03)',
                                            padding: '1.5rem',
                                            borderRadius: '12px',
                                            border: '1px solid rgba(255,255,255,0.05)',
                                            transition: 'all 0.3s ease'
                                        }}
                                    >
                                        <h4 style={{ color: 'white', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.title}</h4>
                                        <p style={{ fontSize: '0.9rem', color: '#888' }}>{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Other Projects */}
                <div style={{ marginTop: '5rem' }}>
                    <h3 className="heading-md" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Other Notable Projects</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                        {/* Supply Chain Market */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="glass-card"
                        >
                            <div style={{ marginBottom: '1rem' }}>
                                <h4 style={{ fontSize: '1.4rem', color: 'white', marginBottom: '0.5rem' }}>Supply Chain Market</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--primary-color)', fontWeight: '600' }}>Blockchain • Ethereum • Solidity</p>
                            </div>
                            <p style={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                A decentralized marketplace using Ethereum smart contracts. Integrated Web3.js with a React frontend
                                for transparent transaction tracking and secure document storage.
                            </p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#888', fontSize: '0.9rem' }}>
                                <li>Smart Contract Automation</li>
                                <li>Decentralized Storage</li>
                            </ul>
                        </motion.div>

                        {/* Botnet Detection */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="glass-card"
                        >
                            <div style={{ marginBottom: '1rem' }}>
                                <h4 style={{ fontSize: '1.4rem', color: 'white', marginBottom: '0.5rem' }}>Botnet Detection System</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--primary-color)', fontWeight: '600' }}>Python • Machine Learning</p>
                            </div>
                            <p style={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                An advanced security system using Scikit-learn to analyze network traffic and detect anomalies.
                                Enhanced accuracy by integrating IP reputation analysis.
                            </p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#888', fontSize: '0.9rem' }}>
                                <li>Traffic Pattern Analysis</li>
                                <li>Anomaly Detection Models</li>
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};
export default Projects;
