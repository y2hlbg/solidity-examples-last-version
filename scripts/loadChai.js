// loadChai.js
const loadChai = async () => {
  const chai = await import('chai');
  return chai;
};

module.exports = loadChai;