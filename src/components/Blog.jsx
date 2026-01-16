import { motion } from 'framer-motion';
import { useState } from 'react';

const BlogPost = ({ title, date, category, content, onClose }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="blog-modal"
            style={{
                position: 'fixed',
                top: '10%',
                left: '5%',
                right: '5%',
                bottom: '5%',
                background: 'rgba(15, 15, 20, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                zIndex: 2000,
                overflowY: 'auto',
                padding: '2rem',
                boxShadow: '0 0 50px rgba(0,0,0,0.5)'
            }}
        >
            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    fontSize: '1.5rem',
                    cursor: 'pointer'
                }}
            >
                ✕
            </button>

            <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
                <span style={{ color: 'var(--primary-color)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    {category}
                </span>
                <h1 style={{ fontSize: '2.5rem', margin: '1rem 0', background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {title}
                </h1>
                <p style={{ color: '#888', marginBottom: '2rem' }}>{date}</p>

                <div className="blog-content" style={{ color: '#e0e0e0', lineHeight: '1.8' }}>
                    {content}
                </div>
            </div>
        </motion.div>
    );
};

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const posts = [
        {
            id: 1,
            title: "Mastering Security: How to Prevent Injection Attacks",
            date: "November 15, 2024",
            category: "Cybersecurity",
            summary: "A comprehensive guide to understanding and preventing SQL Injection, XSS, and other common vulnerabilities in modern web applications.",
            content: (
                <>
                    <p>Injection attacks remain one of the most critical security risks in web applications. From SQL Injection (SQLi) to Cross-Site Scripting (XSS), these vulnerabilities allow attackers to interfere with an application's data processing. Here is how you can secure your stack.</p>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>1. SQL Injection (SQLi)</h3>
                    <p>This occurs when an attacker executes malicious SQL statements. It can destroy your database or access unauthorized data.</p>
                    <div style={{ background: '#1a1a1a', padding: '1rem', borderRadius: '8px', margin: '1rem 0', border: '1px solid #333' }}>
                        <code style={{ color: '#ff5555' }}>// Vulnerable Code</code>
                        <br />
                        <code>const query = `SELECT * FROM users WHERE id = ${`userId`}`;</code>
                    </div>
                    <p><strong>The Fix:</strong> Always use Parameterized Queries or ORMs.</p>
                    <div style={{ background: '#1a1a1a', padding: '1rem', borderRadius: '8px', margin: '1rem 0', border: '1px solid #333' }}>
                        <code style={{ color: '#50fa7b' }}>// Secure Code</code>
                        <br />
                        <code>db.query('SELECT * FROM users WHERE id = ?', [userId]);</code>
                    </div>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>2. Cross-Site Scripting (XSS)</h3>
                    <p>XSS allows attackers to inject malicious scripts into pages viewed by other users.</p>
                    <p><strong>The Fix:</strong></p>
                    <ul>
                        <li>Sanitize HTML input.</li>
                        <li>Use Content Security Policy (CSP) headers.</li>
                        <li>In React, use default data binding <code>{`{content}`}</code> which auto-escapes, and avoid <code>dangerouslySetInnerHTML</code>.</li>
                    </ul>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>3. Command Injection</h3>
                    <p>Occurs when an application passes unsafe user supplied data (forms, cookies, HTTP headers) to a system shell.</p>
                    <p><strong>The Fix:</strong> Avoid calling shell commands with <code>exec()</code>. Use built-in APIs instead.</p>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>4. Detection & Monitoring</h3>
                    <p>Prevention is key, but detection is your safety net. How do you know if you are being attacked?</p>
                    <ul>
                        <li><strong>Log Analysis:</strong> Monitor server logs for repeated error patterns (e.g., 500 errors containing SQL syntax).</li>
                        <li><strong>WAF (Web Application Firewall):</strong> Use services like Cloudflare or AWS WAF to block common attack rules automatically.</li>
                        <li><strong>Runtime Application Self-Protection (RASP):</strong> Tools that run inside the app to detect and block attacks in real-time.</li>
                    </ul>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>Conclusion</h3>
                    <p>Security is not an afterthought. By validating all inputs, using parameterized queries, and implementing proper headers, you can defend against the majority of injection attacks.</p>
                </>
            )
        },
        {
            id: 2,
            title: "NoSQL Injection: The Hidden Threat in MERN Stack",
            date: "October 08, 2024",
            category: "Database Security",
            summary: "MongoDB isn't immune to injection. Learn how attackers exploit JSON query operators to bypass authentication and access unauthorized data.",
            content: (
                <>
                    <p>Many developers believe that using NoSQL databases like MongoDB automatically prevents injection attacks because there is no SQL language to inject. This is a dangerous misconception. NoSQL Injection occurs when untrusted data is passed directly into database queries.</p>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>How It Works</h3>
                    <p>In MongoDB, queries can accept objects. If an attacker can inject an object where a string is expected, they can manipulate the query logic.</p>

                    <div style={{ background: '#1a1a1a', padding: '1rem', borderRadius: '8px', margin: '1rem 0', border: '1px solid #333' }}>
                        <code style={{ color: '#ff5555' }}>// Vulnerable Login Handler</code>
                        <br />
                        <code>
                            {`app.post('/login', async (req, res) => {
  // If req.body.password is { "$ne": null }, this query matches any user!
  const user = await db.users.findOne({
    username: req.body.username,
    password: req.body.password 
  });
});`}
                        </code>
                    </div>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>The Attack Payload</h3>
                    <p>An attacker sends a JSON payload instead of a standard form submission:</p>
                    <code style={{ background: '#222', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{`{"username": "admin", "password": {"$ne": null}}`}</code>
                    <p>The query becomes: "Find a user where username is 'admin' AND password is NOT null". Since the admin has a password, this returns the user without knowing the password.</p>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>The Solution</h3>
                    <p>1. <strong>Sanitization:</strong> Use libraries like <code>mongo-sanitize</code> to strip out keys starting with <code>$</code>.</p>
                    <p>2. <strong>Input Validation:</strong> Use Schema validation (like Zod or Joi) to ensure `password` is strictly a string.</p>
                </>
            )
        },
        {
            id: 3,
            title: "Advanced Defense: Preventing Blind SQL Injection",
            date: "September 22, 2024",
            category: "Advanced Security",
            summary: "When the database doesn't return errors, attackers use 'Blind' techniques. Discover how Time-based and Boolean-based attacks work.",
            content: (
                <>
                    <p>Standard SQL Injection usually relies on seeing an error message or data returned on the screen. But what if the application suppresses all errors? Enter <strong>Blind SQL Injection</strong>.</p>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>Types of Blind SQLi</h3>

                    <h4 style={{ color: '#var(--primary-color)', marginTop: '1rem' }}>1. Boolean-Based</h4>
                    <p>The attacker sends a query that evaluates to TRUE or FALSE and observes if the page content changes (e.g., a "Product Not Found" message vs a normal page).</p>
                    <code style={{ background: '#222', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>id=1' AND 1=1--</code>

                    <h4 style={{ color: '#var(--primary-color)', marginTop: '1rem' }}>2. Time-Based</h4>
                    <p>The attacker tells the database to PAUSE if a condition is true. If the page takes 10 seconds to load, they know they guessed correctly.</p>
                    <code style={{ background: '#222', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>id=1'; WAITFOR DELAY '0:0:10'--</code>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>Start With 'Least Privilege'</h3>
                    <p>Beyond parameterized queries, ensure your database user account only has the permissions it needs. An injection attack is less severe if the database user cannot `DROP TABLES` or access the command shell.</p>
                </>
            )
        },
        {
            id: 4,
            title: "Rise of the Machines: Modern Botnet Architectures",
            date: "August 10, 2024",
            category: "Network Security",
            summary: "From Mirai to Meris, botnets are evolving. Discover how IoT devices are being weaponized to launch record-breaking DDoS attacks.",
            content: (
                <>
                    <p>Gone are the days when botnets were just simple networks of infected computers. Today's botnets like <strong>Mirai</strong> and <strong>Meris</strong> weaponize the Internet of Things (IoT), turning smart cameras, routers, and appliances into a massive zombie army.</p>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>Famous Modern Botnets</h3>

                    <h4 style={{ color: '#var(--primary-color)', marginTop: '1rem' }}>1. Mirai</h4>
                    <p>Mirai scanned the internet for IoT devices using default factory credentials (like `admin/admin`). It was responsible for the massive Dyn DNS attack that took down Twitter, Netflix, and GitHub.</p>

                    <h4 style={{ color: '#var(--primary-color)', marginTop: '1rem' }}>2. Meris</h4>
                    <p>Unlike Mirai, Meris relied on a vulnerability in MikroTik routers. It unleashed a record-breaking DDoS attack peaking at <strong>21.8 million requests per second</strong>.</p>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>How Infection Happens</h3>
                    <div style={{ background: '#1a1a1a', padding: '1rem', borderRadius: '8px', margin: '1rem 0', border: '1px solid #333' }}>
                        <code style={{ color: '#e0e0e0' }}>1. Scanning: Bot scans IPs for open ports (Telnet/SSH).</code><br />
                        <code style={{ color: '#e0e0e0' }}>2. Brute Force: Tries default credential lists.</code><br />
                        <code style={{ color: '#e0e0e0' }}>3. Injection: Uploads payload to victim RAM (fileless).</code><br />
                        <code style={{ color: '#ff5555' }}>4. Attack: Device waits for Command & Control (C2) orders.</code>
                    </div>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>Defense Strategies</h3>
                    <p>Protecting against botnets requires a multi-layered approach:</p>
                    <ul>
                        <li><strong>Change Default Passwords:</strong> The #1 defense against Mirai-style attacks.</li>
                        <li><strong>Firmware Updates:</strong> Patch vulnerabilities in routers and IoT gear.</li>
                        <li><strong>Traffic Analysis:</strong> Use AI to detect abnormal traffic patterns before they overwhelm your network.</li>
                    </ul>
                </>
            )
        },
        {
            id: 5,
            title: "Breaching the Fortress: Anatomy of Recent Mega-Hacks",
            date: "August 15, 2024",
            category: "Case Studies",
            summary: "A technical deep dive into the Snowflake data theft, MGM blackout, and MOVEit exploits. How identity-based attacks are redefining cyber warfare.",
            content: (
                <>
                    <p>The era of "smash and grab" hacking is evolving. Modern threat actors like <strong>Scattered Spider</strong> and <strong>UNC5537</strong> are moving away from complex malware and towards a simpler, deadlier tactic: <em>Identity Abuse</em>. If they can log in as you, they don't need to hack you.</p>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>1. The Snowflake Identity Crisis (2024)</h3>
                    <p>In mid-2024, a massive campaign targeted customers of the cloud data platform Snowflake. Attackers didn't breach Snowflake's core infrastructure; they walked in through the front door.</p>
                    <ul style={{ background: '#1a1a1a', padding: '1.5rem', borderRadius: '10px', counterReset: 'list' }}>
                        <li style={{ listStyle: 'none', marginBottom: '1rem' }}><strong style={{ color: '#ff5555' }}>The Vector:</strong> InfoStealer malware (like Lumma or RedLine) running on employee personal devices stole valid session cookies/credentials.</li>
                        <li style={{ listStyle: 'none', marginBottom: '1rem' }}><strong style={{ color: '#ff5555' }}>The Failure:</strong> Many compromised accounts lacked Multi-Factor Authentication (MFA).</li>
                        <li style={{ listStyle: 'none' }}><strong style={{ color: '#ff5555' }}>The Impact:</strong> Ticketmaster and Santander saw massive data exfiltration.</li>
                    </ul>
                    <h4 style={{ color: '#var(--primary-color)', marginTop: '1rem' }}>Forensics: What the Logs Look Like</h4>
                    <p>Security teams often catch this by spotting "Impossible Travel"—a user logging in from two distant countries at the same time.</p>
                    <div style={{ background: '#000', padding: '1rem', borderRadius: '8px', border: '1px solid #333', fontFamily: 'monospace', fontSize: '0.85rem', overflowX: 'auto', margin: '1rem 0' }}>
                        <span style={{ color: '#888' }}>[2024-05-20T14:02:01]</span> <span style={{ color: '#50fa7b' }}>User_Login_Success</span> | IP: 192.168.1.5 (USA)<br />
                        <span style={{ color: '#888' }}>[2024-05-20T14:05:22]</span> <span style={{ color: '#ff5555' }}>User_Login_Success</span> | IP: 45.155.x.x (Russia) <span style={{ color: '#f1fa8c' }}>&lt;-- ALERT!</span>
                    </div>
                    <p><em>Defense:</em> Enforce MFA on all accounts and monitor for "impossible travel" logins.</p>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>2. MOVEit & The Supply Chain (2023)</h3>
                    <p>The Russian-linked <strong>Cl0p</strong> ransomware gang exploited a zero-day vulnerability (CVE-2023-34362) in MOVEit Transfer software. This wasn't just a hack; it was a cascading catastrophe.</p>
                    <p><strong>The Technical Flaw:</strong> A SQL Injection vulnerability allowed attackers to access the database and execute arbitrary code via a malicious payload in the web interface. Cl0p used this to deploy a web shell (<code>human2.aspx</code>) to exfiltrate files silently.</p>

                    <h4 style={{ color: '#var(--primary-color)', marginTop: '1rem' }}>The Attack Log (IIS Server)</h4>
                    <p>In the server logs, you would see a strange request to <code>human2.aspx</code> (the virus file) trying to talk to the database.</p>
                    <div style={{ background: '#000', padding: '1rem', borderRadius: '8px', border: '1px solid #333', fontFamily: 'monospace', fontSize: '0.85rem', overflowX: 'auto', margin: '1rem 0' }}>
                        <span style={{ color: '#888' }}>POST /human2.aspx</span> <span style={{ color: '#f1fa8c' }}>X-siLock-Step1=</span>-1' OR 1=1; WAITFOR DELAY '0:0:5'-- <span style={{ color: '#ff5555' }}>500 0 0 15</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: '#aaa', marginTop: '0.5rem' }}><em>Translation:</em> The attacker is asking the database to "Wait for 5 seconds". If the page loads slowly, they know the hack worked.</p>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>3. MGM Resorts vs. Scattered Spider</h3>
                    <p>In September 2023, Las Vegas went dark. Slot machines stopped working, and room keys failed. The attackers, a group of young native English speakers known as <strong>Scattered Spider</strong>, used arguably the most effective tool in history: the telephone.</p>

                    <h4 style={{ color: '#var(--primary-color)', marginTop: '1rem' }}>The "Vishing" Playbook:</h4>
                    <ol style={{ paddingLeft: '1.5rem', color: '#ccc' }}>
                        <li>Gather employee info from LinkedIn.</li>
                        <li>Call the IT Helpdesk posing as the employee claiming a lost phone.</li>
                        <li>Convince support to reset the MFA token.</li>
                        <li>Gain Super Admin privileges via Okta.</li>
                    </ol>
                    <h4 style={{ color: '#var(--primary-color)', marginTop: '1rem' }}>The Okta System Log</h4>
                    <p>This is the exact moment the hackers won. The log shows an administrator manually resetting the security factors.</p>
                    <div style={{ background: '#000', padding: '1rem', borderRadius: '8px', border: '1px solid #333', fontFamily: 'monospace', fontSize: '0.85rem', overflowX: 'auto', margin: '1rem 0' }}>
                        <span style={{ color: '#888' }}>[Admin_User]</span> action: <span style={{ color: '#ff5555' }}>user.mfa.factor.reset</span> target: <span style={{ color: '#50fa7b' }}>[Victim_Employee]</span><br />
                        <span style={{ color: '#888' }}>[System]</span> Result: <span style={{ color: '#50fa7b' }}>SUCCESS</span>
                    </div>

                    <p style={{ marginTop: '1rem' }}><strong>The Fix:</strong> FIDO2 Hardware Keys (like YubiKeys). They are phishing-resistant because they require physical presence.</p>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>Conclusion: Identity is the New Perimeter</h3>
                    <p>Firewalls cannot stop a valid user. Whether it's stolen cookies (Snowflake) or social engineered resets (MGM), the battleground has shifted to <strong>Identity and Access Management (IAM)</strong>. Zero Trust is no longer a buzzword; it's a survival requirement.</p>
                </>
            )
        },
        {
            id: 6,
            title: "AI vs. AI: The Automated Cyber War",
            date: "December 20, 2024",
            category: "Future Tech",
            summary: "Cybersecurity is no longer human vs. human. It's algorithm vs. algorithm. Explore how AI is creating unpatchable zero-days and how we are using AI to stop them.",
            content: (
                <>
                    <p>We are witnessing the dawn of a new era in cybersecurity. It is no longer about a hacker in a hoodie typing furiously; it is about autonomous agents waging war at machine speed. Artificial Intelligence has entered the battlefield, and it is playing on both sides.</p>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>The Offense: Fully Autonomous Hacking</h3>
                    <p>Imagine a tool that doesn't just run a script, but <em>understands</em> code. It finds a vulnerability, writes a custom exploit, and patches the hole behind it so no one else can follow. This isn't science fiction.</p>
                    <ul style={{ background: '#1a1a1a', padding: '1.5rem', borderRadius: '10px', marginTop: '1rem' }}>
                        <li style={{ listStyle: 'none', marginBottom: '0.5rem', color: '#ccc' }}><strong>Polymorphic Malware:</strong> AI rewrites virus code in real-time to evade signature detection. Every download is unique.</li>
                        <li style={{ listStyle: 'none', marginBottom: '0.5rem', color: '#ccc' }}><strong>Deepfake Phishing:</strong> Attackers use voice synthesis to impersonate CEOs and authorize million-dollar transfers.</li>
                        <li style={{ listStyle: 'none', color: '#ccc' }}><strong>Smart Fuzzing:</strong> AI models generate millions of random inputs to crash software and find edge-case bugs humans would miss.</li>
                    </ul>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>The Defense: Self-Healing Systems</h3>
                    <p>To fight machines, we need machines. Modern Security Operations Centers (SOCs) are moving beyond dashboards to automated response.</p>

                    <h4 style={{ color: '#var(--primary-color)', marginTop: '1rem' }}>Anomaly Detection at Scale</h4>
                    <p>Traditional firewalls use rules (IF port 80 suspicious THEN block). AI uses patterns. It learns what "normal" traffic looks like for <em>your</em> specific company and flags anything that deviates, even if it follows all the rules.</p>

                    <div style={{ background: '#000', padding: '1rem', borderRadius: '8px', border: '1px solid #333', fontFamily: 'monospace', fontSize: '0.85rem', overflowX: 'auto', margin: '1rem 0' }}>
                        <span style={{ color: '#888' }}>// Concept: AI detecting a "Low & Slow" attack</span><br />
                        <span style={{ color: '#66d9ef' }}>model.predict</span>(<span style={{ color: '#e6db74' }}>traffic_pattern</span>) <br />
                        <span style={{ color: '#888' }}>&gt;&gt; Result:</span> <span style={{ color: '#ff5555' }}>98% probability of data exfiltration (Slow Drip)</span><br />
                        <span style={{ color: '#888' }}>&gt;&gt; Action:</span> <span style={{ color: '#50fa7b' }}>Isolating Host 10.0.0.45</span>
                    </div>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>Adversarial Examples</h3>
                    <p>The scariest part? You can "hack" the AI itself. By making tiny, invisible changes to a file, you can trick an AI antivirus into seeing a virus as a harmless cat picture. This is known as an <strong>Adversarial Attack</strong>.</p>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>Conclusion</h3>
                    <p>The future isn't about perfect code; it's about resilience. Information security is becoming a game of "AI chess," and the grandmaster is whoever has the better training data.</p>
                </>
            )
        },
        {
            id: 7,
            title: "The SportTech Revolution: IoT and Data in Action",
            date: "January 05, 2025",
            category: "Sports Tech",
            summary: "How real-time biometrics and smart sensors are changing the game. A look into the tech stack behind modern athlete performance tracking.",
            content: (
                <>
                    <p>Sports are no longer just about physical prowress; they are about data. From wearables to smart stadiums, technology is integrating into every second of the game.</p>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>1. Wearable Biometrics</h3>
                    <p>Athletes today wear sensors that track heart rate variability, oxygen saturation, and G-force impacts in real-time. This data travels via BLE (Bluetooth Low Energy) or 5G to a centralized dashboard.</p>
                    <p><strong>The Stack:</strong> Usually involves ultra-low-latency databases like Redis for real-time visualization and InfluxDB for time-series analysis.</p>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>2. Computer Vision in Officiating</h3>
                    <p>Hawk-Eye technology and AI-assisted offside detection use high-speed cameras to triangulate ball and player positions with sub-millimeter accuracy.</p>
                    <div style={{ background: '#1a1a1a', padding: '1rem', borderRadius: '8px', margin: '1rem 0', border: '1px solid #333' }}>
                        <code style={{ color: '#50fa7b' }}>// Logic: 3D Mapping</code><br />
                        <code>const isGoal = frameData.checkIntersection(goalLine, ballRadius);</code>
                    </div>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>3. Fan Engagement</h3>
                    <p>Augmented Reality (AR) in stadiums allows fans to point their phones at players to see real-time stats overlayed on the field. This is the future of sports media.</p>
                </>
            )
        },
        {
            id: 8,
            title: "React 19: The New Era of Web Development",
            date: "January 14, 2025",
            category: "Web Development",
            summary: "React 19 is here. From Actions to the 'use' hook, learn how the new compiler and simplified APIs are making frontend code cleaner and faster.",
            content: (
                <>
                    <p>React 19 marks one of the biggest shifts in the library's history. The goal? To make manual optimization a thing of the past.</p>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>1. The React Compiler</h3>
                    <p>You can finally say goodbye to <code>useMemo</code> and <code>useCallback</code>. The React Compiler automatically optimizes your components to re-render only when absolutely necessary.</p>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>2. Actions API</h3>
                    <p>Handling form submissions and pending states is now built into the core. Using <code>useActionState</code> (formerly <code>useFormState</code>), you can manage loading indicators and errors effortlessly.</p>
                    <div style={{ background: '#1a1a1a', padding: '1rem', borderRadius: '8px', margin: '1rem 0', border: '1px solid #333' }}>
                        <code>{`const [state, submitAction, isPending] = useActionState(fn, initialState);`}</code>
                    </div>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>3. The 'use' Hook</h3>
                    <p>A new API that allows you to read resources like Promises and Context directly during render. It simplifies fetching and state management significantly.</p>
                </>
            )
        },
        {
            id: 9,
            title: "Bridging the Gap: Web2 to Web3 Transition",
            date: "January 16, 2025",
            category: "Blockchain",
            summary: "For full-stack developers, moving to Web3 can be daunting. Here is a roadmap to understanding Smart Contracts, Wallets, and the Decentralized Web.",
            content: (
                <>
                    <p>The transition from a traditional centralized backend to a blockchain-based decentralized system is more about a change in mindset than just a change in syntax.</p>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>1. Logic lives on the Chain</h3>
                    <p>Instead of a Node.js server, your logic lives in **Smart Contracts** (usually written in Solidity). These are immutable—once deployed, you cannot "hot-fix" a bug.</p>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>2. The Provider/Signer Pattern</h3>
                    <p>In Web2, the server authenticates. In Web3, the user's wallet (e.g., MetaMask) signs every transaction. Your frontend uses libraries like <code>ethers.js</code> or <code>viem</code> to talk to the blockchain nodes.</p>

                    <h3 style={{ color: '#fff', marginTop: '2rem' }}>3. IPFS for Storage</h3>
                    <p>Storing images or large JSONs on the blockchain is expensive. Instead, use IPFS (InterPlanetary File System) to store assets and keep only the CID (Content Identifier) on the chain.</p>

                    <p style={{ marginTop: '2rem' }}><strong>Conclusion:</strong> Start by building a simple "CRUD" app on a Testnet (like Sepolia) to understand the gas costs and transaction lifecycle.</p>
                </>
            )
        }
    ];

    const filteredPosts = [...posts]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .filter(post =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.category.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <section id="blog" style={{ padding: '100px 0', position: 'relative' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    style={{ marginBottom: '4rem', textAlign: 'center' }}
                >
                    <h2 className="section-title">Technical <span className="text-gradient">Insights</span></h2>
                    <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                        Exploring the depths of code security, architecture, and innovation.
                    </p>

                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search articles (e.g., Injection, React)..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            padding: '1rem 2rem',
                            width: '100%',
                            maxWidth: '500px',
                            background: 'rgba(255,255,255,0.05)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '50px',
                            color: '#fff',
                            fontSize: '1rem',
                            outline: 'none',
                            transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--primary-color)'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {filteredPosts.map((post) => (
                        <motion.div
                            key={post.id}
                            whileHover={{ y: -10 }}
                            className="glass-card"
                            style={{
                                padding: '2rem',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                height: '100%'
                            }}
                            onClick={() => setSelectedPost(post)}
                        >
                            <div>
                                <span style={{ color: 'var(--primary-color)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    {post.category}
                                </span>
                                <h3 style={{ fontSize: '1.5rem', margin: '1rem 0', color: '#fff' }}>
                                    {post.title}
                                </h3>
                                <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                    {post.summary}
                                </p>
                            </div>
                            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ color: '#666', fontSize: '0.9rem' }}>{post.date}</span>
                                <span style={{ color: 'var(--primary-color)', fontWeight: '500' }}>Read Article →</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {selectedPost && (
                <BlogPost
                    {...selectedPost}
                    onClose={() => setSelectedPost(null)}
                />
            )}
        </section>
    );
};

export default Blog;
