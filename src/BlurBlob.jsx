import React from 'react';
import PropTypes from 'prop-types';

const BlurBlob = ({ position, size }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className="absolute"
      style={{
        top,
        left,
        width,
        height,
        transform: 'translate(-50%, -50%)',
        position: 'absolute', // Make sure it's positioned
      }}
    >
      <div className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob"></div>
    </div>
  );
};

// 🔧 Fix: propTypes (not PropTypes with capital P)
BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
  }).isRequired,
  size: PropTypes.shape({
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlurBlob;
