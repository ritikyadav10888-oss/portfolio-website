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

                {/* Main Featured Project: Force Sports */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.01 }}
                    viewport={{ once: true }}
                    className="glass-card"
                    style={{
                        marginTop: '2rem',
                        padding: '3rem',
                        border: '1px solid rgba(100, 108, 255, 0.4)',
                        boxShadow: '0 0 40px rgba(100, 108, 255, 0.15)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '150px',
                        height: '150px',
                        background: 'radial-gradient(circle at top right, rgba(100, 108, 255, 0.2), transparent)',
                        pointerEvents: 'none'
                    }}></div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                                <span style={{
                                    color: 'var(--secondary-color)',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    fontSize: '0.75rem',
                                    background: 'rgba(255, 0, 122, 0.1)',
                                    padding: '6px 14px',
                                    borderRadius: '50px',
                                    border: '1px solid rgba(255, 0, 122, 0.2)'
                                }}>
                                    Flagship Product
                                </span>
                                <span style={{
                                    color: 'var(--primary-color)',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    fontSize: '0.75rem',
                                    background: 'rgba(100, 108, 255, 0.1)',
                                    padding: '6px 14px',
                                    borderRadius: '50px',
                                    border: '1px solid rgba(100, 108, 255, 0.2)'
                                }}>
                                    Active • Production
                                </span>
                            </div>

                            <h3 className="heading-md" style={{ marginTop: '0.5rem', fontSize: '2.8rem', letterSpacing: '-1px' }}>
                                Force Sports Management <span className="text-gradient">Ecosystem</span>
                            </h3>

                            <p style={{ color: '#b0b0b0', marginBottom: '2.5rem', fontSize: '1.25rem', lineHeight: '1.7', maxWidth: '800px' }}>
                                An end-to-end sports management platform designed to automate tournament lifecycles.
                                Handling everything from player registration and team matching to real-time financial analytics and secure payment processing.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                                {[
                                    { title: "🏆 Tournament Engine", desc: "Automated bracket generation and lifecycle management." },
                                    { title: "💳 Razorpay Logic", desc: "Deeply integrated payment verification and refund workflows." },
                                    { title: "📊 Financial Analytics", desc: "Real-time revenue tracking and organizer dashboards." },
                                    { title: "📱 Player Portal", desc: "Cross-platform registration and status tracking." }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -5, background: 'rgba(255,255,255,0.06)' }}
                                        style={{
                                            background: 'rgba(255,255,255,0.03)',
                                            padding: '1.5rem',
                                            borderRadius: '16px',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                                        }}
                                    >
                                        <h4 style={{ color: 'white', marginBottom: '0.75rem', fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                            {item.title}
                                        </h4>
                                        <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.5' }}>{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                {['React Native', 'Node.js', 'Firebase', 'Razorpay SDK', 'Express'].map((tag) => (
                                    <span key={tag} style={{
                                        padding: '4px 12px',
                                        borderRadius: '4px',
                                        background: 'rgba(255,255,255,0.05)',
                                        color: '#888',
                                        fontSize: '0.85rem',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>


                {/* Other Projects */}
                <div style={{ marginTop: '5rem' }}>
                    <h3 className="heading-md" style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Other Notable Projects</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                        {/* Healthcare Assistant */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="glass-card"
                        >
                            <div style={{ marginBottom: '1rem' }}>
                                <span style={{ color: 'var(--secondary-color)', fontSize: '0.7rem', fontWeight: 'bold' }}>QFEST 2025</span>
                                <h4 style={{ fontSize: '1.4rem', color: 'white', marginBottom: '0.5rem', marginTop: '4px' }}>Healthcare Assistant</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--primary-color)', fontWeight: '600' }}>React • NoSQL • NLP</p>
                            </div>
                            <p style={{ color: '#b0b0b0', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                A modular healthcare platform bridging patient-doctor gaps with symptom checking,
                                appointment logic, and automated medicine reminders.
                            </p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#888', fontSize: '0.9rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                <li>Symptom Checker</li>
                                <li>Secure Booking</li>
                            </ul>
                        </motion.div>

                        {/* Supply Chain Market */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="glass-card"
                        >
                            <div style={{ marginBottom: '1rem' }}>
                                <h4 style={{ fontSize: '1.4rem', color: 'white', marginBottom: '0.5rem' }}>Supply Chain Market</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--primary-color)', fontWeight: '600' }}>Blockchain • Ethereum • Solidity</p>
                            </div>
                            <p style={{ color: '#b0b0b0', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                Decentralized marketplace using Ethereum smart contracts for transparent tracking
                                and secure documentation in global logistics.
                            </p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#888', fontSize: '0.9rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                <li>Web3 Integration</li>
                                <li>Smart Contracts</li>
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
                            <p style={{ color: '#b0b0b0', fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                Advanced network security analyzer using Scikit-learn for traffic anomaly detection
                                and IP reputation verification.
                            </p>
                            <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#888', fontSize: '0.9rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                                <li>Traffic Analysis</li>
                                <li>ML Models</li>
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};
export default Projects;
