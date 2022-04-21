import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

interface Props {
    title: string;
}

const Layout: React.FC<Props> = ({ children, title }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Helmet>
                <title>{title}</title>
                <meta name='description' content={title} />
            </Helmet>
            {children}
        </motion.div>
    );
};

export default Layout;
