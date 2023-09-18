const fs = require('fs/promises'); 

const flagFilePath = './database-cleared.flag';
exports.getflagFilePath = () => {
    return flagFilePath;
  };
  
  // Export a setter function to update the shared value
  exports.setflagFilePath = (value) => {
    flagFilePath = value;
  };

const checkDatabaseCleared = async (req, res, next) => {
    try {
      // Check if the flag file exists
      await fs.access(flagFilePath);
  
      // If the flag file exists, it means the database has already been cleared
      return res.status(200).json({ message: 'Database already cleared.' });
    } catch (err) {
      // If the flag file doesn't exist, proceed to clear the database
      next();
    }
};

module.exports = checkDatabaseCleared;