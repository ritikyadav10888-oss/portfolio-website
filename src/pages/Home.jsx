import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Resume from '../components/Resume';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <About />
            <Resume />
            <Skills />
        </motion.div>
    );
};

export default Home;
