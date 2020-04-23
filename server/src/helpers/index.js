import bcrypt from 'bcrypt';



export const sendServerErrorResponse = (res, error) =>
  res.status(500).json({
    "status_code": 500,
    "data": process.env.isProduction ? 'An error occurred on our servers' : error,
    "success": false
  })

export const sendResponse = (res, status_code, data) => res.status(status_code).json({
  status_code,
  data,
  "success": true
})

export const hashPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

export const comparePassword = (hashPassword, password) => {
  return bcrypt.compareSync(password, hashPassword);
}


const helper = Object.freeze({
  sendServerErrorResponse,
  sendResponse,
  comparePassword,
  hashPassword
})

export default helper;