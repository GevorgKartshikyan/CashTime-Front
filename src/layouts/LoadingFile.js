import React from 'react';
import { motion } from 'framer-motion';

function LoadingFile() {
  return (
    <div style={{
      position: 'relative', width: '100vw', height: '100vh', background: '#f5f5f5',
    }}
    >
      <motion.div
        className="pin"
        initial={{ opacity: 0, top: '45%', bottom: '60px' }}
        animate={{
          opacity: 1,
          top: ['45%', '50%', '45%'],
          bottom: ['60px', '55px', '60px'],
        }}
        transition={{
          duration: 1.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut',
        }}
      >
        <motion.div className="pulse" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1, repeat: Infinity }}>
          <motion.div
            className="pulse-inner"
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{ scale: [0.1, 1.2], opacity: [0, 1, 0] }}
            transition={{
              duration: 1, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut',
            }}
          >
            {/* This inner pulse element doesn't have specific content */}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default LoadingFile;
