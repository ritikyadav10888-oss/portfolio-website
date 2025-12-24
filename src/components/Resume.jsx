import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Resume = () => {
    const resumeRef = useRef();

    const handleDownload = async () => {
        const element = resumeRef.current;
        const canvas = await html2canvas(element, { scale: 2 });
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('Ritik_Yadav_Resume.pdf');
    };

    return (
        <section id="resume" className="section" style={{ background: '#0a0a0a', position: 'relative' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <h2 className="heading-lg">Resume</h2>
                    <button onClick={handleDownload} className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <FaDownload /> Download PDF
                    </button>
                </div>

                {/* Resume Preview Window */}
                <div style={{
                    background: '#525659',
                    padding: '2rem',
                    borderRadius: '8px',
                    overflow: 'auto',
                    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)'
                }}>
                    <div ref={resumeRef} style={{
                        width: '210mm',
                        minHeight: '297mm',
                        background: 'white',
                        color: '#333',
                        padding: '10mm',
                        boxSizing: 'border-box',
                        fontFamily: "'Times New Roman', serif", // Professional serif for resume
                        margin: '0 auto',
                        boxShadow: '0 0 10px rgba(0,0,0,0.3)'
                    }}>
                        {/* Header */}
                        <header style={{ borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <h1 style={{ fontSize: '24pt', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>Ritik Yadav</h1>
                                <p style={{ fontSize: '10pt', margin: '5px 0 0 0', color: '#555' }}>Full Stack Developer | B.E. Computer Science</p>
                            </div>
                            <div style={{ textAlign: 'right', fontSize: '9pt', lineHeight: '1.4' }}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '5px' }}>
                                    <span>ritikyadav10888@gmail.com</span> <FaEnvelope size={10} />
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '5px' }}>
                                    <span>9326126507 / 9321058356</span> <FaPhone size={10} />
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '5px' }}>
                                    <span>Borivali, Mumbai, India</span> <FaMapMarkerAlt size={10} />
                                </div>
                            </div>
                        </header>

                        {/* Layout Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px' }}>

                            {/* Left Column */}
                            <div style={{ borderRight: '1px solid #ddd', paddingRight: '10px' }}>
                                <section style={{ marginBottom: '20px' }}>
                                    <h3 style={{ fontSize: '12pt', textTransform: 'uppercase', borderBottom: '1px solid #333', paddingBottom: '5px', marginBottom: '10px' }}>Education</h3>
                                    <div style={{ marginBottom: '10px' }}>
                                        <h4 style={{ fontSize: '10pt', fontWeight: 'bold', margin: 0 }}>B.E. in Computer Science</h4>
                                        <p style={{ fontSize: '9pt', margin: 0 }}>Mumbai University</p>
                                        <p style={{ fontSize: '9pt', color: '#666' }}>2024 • CGPA: 7.5/10</p>
                                    </div>
                                    <div style={{ marginBottom: '10px' }}>
                                        <h4 style={{ fontSize: '10pt', fontWeight: 'bold', margin: 0 }}>Diploma in IT</h4>
                                        <p style={{ fontSize: '9pt', margin: 0 }}>Pravin Patil College of Eng.</p>
                                        <p style={{ fontSize: '9pt', color: '#666' }}>2021</p>
                                    </div>
                                </section>

                                <section style={{ marginBottom: '20px' }}>
                                    <h3 style={{ fontSize: '12pt', textTransform: 'uppercase', borderBottom: '1px solid #333', paddingBottom: '5px', marginBottom: '10px' }}>Skills</h3>
                                    <div style={{ marginBottom: '10px' }}>
                                        <h4 style={{ fontSize: '10pt', fontWeight: 'bold', margin: '0 0 5px 0' }}>Frontend</h4>
                                        <p style={{ fontSize: '9pt', margin: 0, lineHeight: '1.4' }}>React.js, Bootstrap, Tailwind, Responsive UI/UX</p>
                                    </div>
                                    <div style={{ marginBottom: '10px' }}>
                                        <h4 style={{ fontSize: '10pt', fontWeight: 'bold', margin: '0 0 5px 0' }}>Backend</h4>
                                        <p style={{ fontSize: '9pt', margin: 0, lineHeight: '1.4' }}>Node.js, Express.js, JWT, Role-based Auth</p>
                                    </div>
                                    <div style={{ marginBottom: '10px' }}>
                                        <h4 style={{ fontSize: '10pt', fontWeight: 'bold', margin: '0 0 5px 0' }}>Database</h4>
                                        <p style={{ fontSize: '9pt', margin: 0, lineHeight: '1.4' }}>MongoDB (NoSQL), MySQL, Advanced SQL</p>
                                    </div>
                                </section>

                                <section>
                                    <h3 style={{ fontSize: '12pt', textTransform: 'uppercase', borderBottom: '1px solid #333', paddingBottom: '5px', marginBottom: '10px' }}>Languages</h3>
                                    <ul style={{ paddingLeft: '15px', margin: 0, fontSize: '9pt' }}>
                                        <li>English</li>
                                        <li>Hindi</li>
                                        <li>Marathi</li>
                                    </ul>
                                </section>
                            </div>

                            {/* Right Column */}
                            <div>
                                <section style={{ marginBottom: '20px' }}>
                                    <h3 style={{ fontSize: '12pt', textTransform: 'uppercase', borderBottom: '1px solid #333', paddingBottom: '5px', marginBottom: '10px' }}>Summary</h3>
                                    <p style={{ fontSize: '9pt', lineHeight: '1.5', margin: 0 }}>
                                        Enthusiastic and detail-oriented B.E. graduate with a strong foundation in Full Stack Development. Passionate about building efficient, scalable applications and secure authentication systems, specifically focusing on the <strong>Sports Domain</strong>. Quick learner with a collaborative mindset, eager to contribute to innovative projects in a dynamic team environment.
                                    </p>
                                </section>

                                <section style={{ marginBottom: '20px' }}>
                                    <h3 style={{ fontSize: '12pt', textTransform: 'uppercase', borderBottom: '1px solid #333', paddingBottom: '5px', marginBottom: '10px' }}>Experience</h3>

                                    <div style={{ marginBottom: '15px' }}>
                                        <h4 style={{ fontSize: '11pt', fontWeight: 'bold', margin: 0 }}>Individual Developer</h4>
                                        <p style={{ fontSize: '9pt', fontStyle: 'italic', margin: '2px 0' }}>Force Sports and Wears India</p>
                                        <ul style={{ fontSize: '9pt', paddingLeft: '15px', margin: '5px 0', lineHeight: '1.4' }}>
                                            <li>Currently working as an individual developer focusing on sports domain solutions.</li>
                                        </ul>
                                    </div>
                                </section>

                                <section style={{ marginBottom: '20px' }}>
                                    <h3 style={{ fontSize: '12pt', textTransform: 'uppercase', borderBottom: '1px solid #333', paddingBottom: '5px', marginBottom: '10px' }}>Projects</h3>

                                    <div style={{ marginBottom: '15px' }}>
                                        <h4 style={{ fontSize: '11pt', fontWeight: 'bold', margin: 0 }}>Multi-Module Healthcare Assistant</h4>
                                        <p style={{ fontSize: '9pt', fontStyle: 'italic', margin: '2px 0' }}>QFEST 2025 • React, Node.js, MongoDB</p>
                                        <ul style={{ fontSize: '9pt', paddingLeft: '15px', margin: '5px 0', lineHeight: '1.4' }}>
                                            <li>Developed a comprehensive healthcare platform featuring a symptom checker and appointment booking.</li>
                                            <li>Implemented secure role-based authentication and database schemas for patient data.</li>
                                            <li>Designed automated medicine reminders and integrated natural language symptom mapping.</li>
                                        </ul>
                                    </div>

                                    <div style={{ marginBottom: '15px' }}>
                                        <h4 style={{ fontSize: '11pt', fontWeight: 'bold', margin: 0 }}>Supply Chain Market</h4>
                                        <p style={{ fontSize: '9pt', fontStyle: 'italic', margin: '2px 0' }}>Blockchain • Ethereum, Solidity, React</p>
                                        <ul style={{ fontSize: '9pt', paddingLeft: '15px', margin: '5px 0', lineHeight: '1.4' }}>
                                            <li>Built a decentralized supply chain marketplace using Ethereum smart contracts.</li>
                                            <li>Integrated Web3.js with a React frontend for transparent transaction tracking.</li>
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 style={{ fontSize: '11pt', fontWeight: 'bold', margin: 0 }}>Botnet Detection System</h4>
                                        <p style={{ fontSize: '9pt', fontStyle: 'italic', margin: '2px 0' }}>Python, Machine Learning</p>
                                        <ul style={{ fontSize: '9pt', paddingLeft: '15px', margin: '5px 0', lineHeight: '1.4' }}>
                                            <li>Implemented network traffic analysis using Python and Scikit-learn to detect anomalies.</li>
                                            <li>Enhanced system accuracy by integrating IP reputation analysis.</li>
                                        </ul>
                                    </div>
                                </section>

                                <section>
                                    <h3 style={{ fontSize: '12pt', textTransform: 'uppercase', borderBottom: '1px solid #333', paddingBottom: '5px', marginBottom: '10px' }}>Interests</h3>
                                    <p style={{ fontSize: '9pt', lineHeight: '1.5', margin: 0 }}>
                                        Sports Analytics, Building Web Apps, Hackathons, Blockchain Technology, Technical Documentation, Cricket.
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;
