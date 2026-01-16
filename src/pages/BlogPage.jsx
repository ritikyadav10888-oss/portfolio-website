import Blog from '../components/Blog';
import { motion } from 'framer-motion';

const BlogPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
            style={{ paddingTop: '100px' }}
        >
            <Blog />
        </motion.div>
    );
};

export default BlogPage;
