import dotenv from 'dotenv';
dotenv.config()

export const sendServerErrorResponse = (res, error) =>
  res.status(500).json({
    "status_code": 500,
    "data": process.env.isProduction ? 'An error occurred on our servers' : error,
    "status_message": 'Internal server error',
    "success": false
  })


export const sendResponse = (res, status_code, data, status_message) => res.status(status_code).json({
  status_code,
  data,
  status_message,
  "success": true
})

