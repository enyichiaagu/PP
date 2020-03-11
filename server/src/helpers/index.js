
import bcrypt from 'bcrypt';

module.exports = {

  sendServerErrorResponse: (res, error) =>
    res.status(500).json({
      "status_code": 500,
      "data": process.env.isProduction ? 'An error occurred on our servers' : error,
      "status_message": 'Internal server error',
      "success": false
    }),

  sendResponse: (res, status_code, data, status_message) => res.status(status_code).json({
    status_code,
    data,
    status_message,
    "success": true
  }),

  hashPassword: async (password) => {
    await bcrypt.hash(password, 20).then((hashedPassword) => {
      return hashedPassword;
    }).catch(err => { return err });
  },

  comparePassword: async (Password, hashPassword) => {
    await bcrypt.compare(Password, hashPassword).then((result) => {
      if (result) return true;
      return false;
    });
  }

}
