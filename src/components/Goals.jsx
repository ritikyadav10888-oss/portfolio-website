import { motion } from 'framer-motion';

const Goals = () => {
    const goals = [
        "Architect a scalable booking infrastructure handling concurrent request management",
        "Implement end-to-end encrypted payment flows (Razorpay) with webhook validation",
        "Enhance AI symptom checker with fuzzy matching and NLP for complex queries",
        "Establish CI/CD pipelines and automated testing for production-grade reliability",
        "Finalize comprehensive API documentation (Swagger) and System Architecture diagrams"
    ];

    return (
        <section id="goals" className="section" style={{ background: 'linear-gradient(to bottom, var(--bg-color), #050505)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="heading-lg text-center"
                    style={{ marginBottom: '3rem' }}
                >
                    Short-Term Roadmap
                </motion.h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {goals.map((goal, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '1.5rem',
                                marginBottom: '1rem',
                                background: 'rgba(255, 255, 255, 0.03)',
                                borderLeft: '4px solid var(--primary-color)',
                                borderRadius: '0 12px 12px 0'
                            }}
                        >
                            <span style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '32px',
                                height: '32px',
                                background: 'rgba(100, 108, 255, 0.2)',
                                borderRadius: '50%',
                                color: 'var(--primary-color)',
                                marginRight: '1.5rem',
                                flexShrink: 0
                            }}>
                                {index + 1}
                            </span>
                            <p style={{ fontSize: '1.1rem', color: '#e0e0e0' }}>{goal}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Goals;
