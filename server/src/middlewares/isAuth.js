import jwt from 'jsonwebtoken';
import { sendResponse } from '../helpers/';


export const ensureIsAuthenticated = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) sendResponse(res, 400, { message: 'token is not provided' });
  try {
    const { payload } = jwt.verify(token, process.env.JWT_KEY);
    if (payload) {
      req.customer_id = payload.id;
      return next();
    }
  } catch (err) {
    sendResponse(res, 400, { message: 'Invalid Authentication token' });
  }

}

const isAuth = Object.freeze({
  ensureIsAuthenticated
})

export default isAuth;
