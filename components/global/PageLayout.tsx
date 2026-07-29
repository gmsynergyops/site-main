// components/PageLayout.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PageLayout = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-fuchsia-50 to-indigo-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: inView ? 0 : -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold text-indigo-800 mb-8 text-center"
        >
          {title}
        </motion.h1>
        {children}
      </div>
    </motion.div>
  );
};

export default PageLayout;
