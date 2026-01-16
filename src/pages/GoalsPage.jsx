import Goals from '../components/Goals';
import { motion } from 'framer-motion';

const GoalsPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{ paddingTop: '100px' }}
        >
            <Goals />
        </motion.div>
    );
};

export default GoalsPage;
