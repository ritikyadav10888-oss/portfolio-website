import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: ["React.js", "Bootstrap", "CDBReact", "Responsive UI/UX"]
        },
        {
            title: "Backend Development",
            skills: ["Node.js", "Express.js", "JWT Auth", "Role-based Security"]
        },
        {
            title: "Databases",
            skills: ["MongoDB (NoSQL)", "Advanced SQL", "MySQL", "Oracle"]
        },
        {
            title: "Other Skills",
            skills: ["System Design", "Payment Integration", "Technical Writing", "Rapid Prototyping"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <section id="skills" className="section">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="heading-lg"
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    Technical Arsenal
                </motion.h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}
                >
                    {skillCategories.map((cat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="glass-card"
                            whileHover={{ y: -10, boxShadow: "0 10px 40px rgba(0,0,0,0.4)" }}
                        >
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary-color)', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>{cat.title}</h3>
                            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                                {cat.skills.map((skill, i) => (
                                    <li key={i} style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        padding: '8px 16px',
                                        borderRadius: '20px',
                                        fontSize: '0.9rem',
                                        color: '#e0e0e0',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
export default Skills;
