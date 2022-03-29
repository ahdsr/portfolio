import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

function ToggleContent({ header, content }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div layout onClick={() => setIsOpen(!isOpen)}>
      <motion.h2 layout>{header}</motion.h2>
      {isOpen ? content : null}
    </motion.div>
  );
}

export default ToggleContent;
