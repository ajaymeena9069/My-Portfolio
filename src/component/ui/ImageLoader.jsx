import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageLoader = ({ src, alt, className, style, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`image-loader-container ${className || ''}`} style={style}>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="skeleton"
            className="image-skeleton"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`progressive-image ${isLoaded ? 'loaded' : 'loading'}`}
        {...props}
      />
    </div>
  );
};

export default ImageLoader;
