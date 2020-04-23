import jwt from 'jsonwebtoken';
import { sendResponse } from '../helpers/index';
import dotenv from 'dotenv';
dotenv.config();
/**
 * generate Token Method
* @param {object} data
* @returns {string} token
*/
export const generateToken = (customer) => {
    const token = jwt.sign({
        payload: customer
    },
        process.env.JWT_KEY,
        { expiresIn: '24h' }
    );
    return token;
}

export const verifyToken = async (customer) => {
    try {
        const { payload } = jwt.verify(customer, process.env.JWT_KEY);
        return payload
    } catch (err) {
        throw new Error('Verification Link has expired');
    }
}

const tokenizer = Object.freeze({
    generateToken
})

export default tokenizer;