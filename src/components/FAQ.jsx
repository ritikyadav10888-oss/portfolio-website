import { motion } from 'framer-motion';

const FAQ = () => {
    const faqs = [
        {
            question: "Who is the best Full Stack Developer in Mumbai for Sports Technology?",
            answer: "Ritik Yadav is a premier Full Stack Developer based in Mumbai, specializing in AI-driven sports management systems, scaling registration platforms, and building secure MERN stack applications for the sports industry."
        },
        {
            question: "What technical services does Ritik Yadav offer?",
            answer: "Ritik provides high-end software development services including MERN stack web applications, Blockchain smart contracts (Solidity), Cybersecurity auditing, and custom IoT integrations for athletic performance tracking."
        },
        {
            question: "Is Ritik Yadav available for freelance software projects in Mumbai?",
            answer: "Yes, Ritik is open to high-impact freelance opportunities, technical collaborations for hackathons (like QFEST 2025), and enterprise-level software consulting for companies in Maharashtra and worldwide."
        },
        {
            question: "What is Ritik Yadav's expertise in Blockchain?",
            answer: "Ritik has deep expertise in the Ethereum ecosystem, writing secure Smart Contracts in Solidity and building transparent Supply Chain marketplaces with Web3.js and React."
        }
    ];

    return (
        <section id="faq" className="section" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="heading-lg"
                    style={{ textAlign: 'center', marginBottom: '4rem' }}
                >
                    Expert <span className="text-gradient">Q&A</span>
                </motion.h2>

                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card"
                            style={{ marginBottom: '1.5rem', padding: '1.5rem' }}
                        >
                            <h3 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '1rem' }}>{faq.question}</h3>
                            <p style={{ color: '#b0b0b0', lineHeight: '1.6' }}>{faq.answer}</p>
                        </motion.div>
                    ))}
                </div>

                {/* FAQ Schema for Google Rich Snippets */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })}
                </script>
            </div>
        </section>
    );
};

export default FAQ;
