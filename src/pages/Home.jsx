import { Suspense, lazy, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import FAQ from '../components/FAQ';
import { motion } from 'framer-motion';

const Resume = lazy(() => import('../components/Resume'));

const Home = () => {
    useEffect(() => {
        document.title = "Ritik Yadav | #1 Full Stack Developer & Sports Tech Architect Mumbai";
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <About />
            <Suspense fallback={<div style={{ padding: '50px', textAlign: 'center' }}>Loading Experience...</div>}>
                <Resume />
            </Suspense>
            <Skills />
            <FAQ />
        </motion.div>
    );
};

export default Home;
