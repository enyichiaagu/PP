import { sendServerErrorResponse, sendResponse, hashPassword, comparePassword } from '../../helpers/index';
import { isValidEmail, isValidPassword, isValidTel } from '../../helpers/validator'
import { createCustomer, findByEmail, updateCustomer } from '../../services/customers/index';
import Mail from '../../utils/mailer';
import dotenv from 'dotenv';
dotenv.config();
import { generateToken, verifyToken } from '../../utils/tokenizer';
import jwt from 'jsonwebtoken';
import { dataUri } from '../../middlewares/mutler';
import { uploader } from '../../config/cloudinaryConfig';


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return sendResponse(res, 201, { message: 'All fields are required' });
    }
    if (!isValidEmail(email)) {
      return sendResponse(res, 201, { message: 'Invalid Email Address' });
    }
    if (!isValidPassword(password)) {
      return sendResponse(res, 201, { message: 'Incorrect password or email' })
    }
    findByEmail(email).then((customer) => {
      comparePassword(customer.password, password)
      const token = generateToken(customer);
      return sendResponse(res, 200, { customer, token })
    }).catch(err => sendResponse(res, 400, 'wrong email or password'))
  } catch (err) {
    sendServerErrorResponse(res, 'retry again after 15secs')
  }
}

export const register = async (req, res) => {
  const {
    fullname,
    email,
    password,
    tel,
    country,
    address
  } = req.body;
  try {
    if (!fullname || !email || !password || !tel || !country || !address) {
      return sendResponse(res, 201, { message: 'All fields are required' });
    }
    if (!isValidEmail(email)) {
      return sendResponse(res, 201, { message: 'Invalid Email Address' });
    }
    if (!isValidPassword(password)) {
      return sendResponse(res, 201, { message: ['password must contain both upper and lowercase', 'password length must be six', 'password should contain numbers'] })
    }
    if (!isValidTel(tel)) {
      return sendResponse(res, 201, { message: 'invalid phone number' });
    }
    const file = dataUri(req).content;
    const { url } = await uploader.upload(file);
    console.log(url);
    if (url) {
      const hashedPassword = hashPassword(password);
      const customer = {
        fn: fullname.split(' ')[1],
        ln: fullname.split(' ')[0],
        fullname,
        email,
        password: hashedPassword,
        imgurl: url,
        tel,
        country,
        address,
        createdAt: new Date(),
        updatedAt: new Date()
      };

      await createCustomer(customer).then(createdCustomer => {
        const token = generateToken(createdCustomer);
        const link = `http://localhost:3001/api/v1/verify?token=${token}&email=${createdCustomer.email}`;
        new Mail(['emekaukpai123@gmail.com'], '<ecommerce@no-reply.coom>', 'Welcome to ecommerce webiste', `<b>${link}</b>`).send();
        sendResponse(res, 200, { createdCustomer, token, message: 'account created successfully,please check your mail to verify' });
      })
        .catch(err => sendResponse(res, 400, err.message));
    }

  } catch (err) {
    sendServerErrorResponse(res, 'retry again after 15secs')
  }
}

export const verify = async (req, res) => {
  try {
    const { token, email } = req.query;
    verifyToken(token).then(payload => {
      findByEmail(payload.email).then(customer => {
        if (customer.verified && customer.email === email) {
          sendResponse(res, 200, { message: 'email has already been verified' })
        }
        updateCustomer({ email: customer.email }, { verified: true, updatedAt: new Date() });
        return sendResponse(res, 200, { message: 'email verification successful' });

      });
    }).catch(err => sendResponse(res, 200, { message: 'Verification link has expired' }));

  } catch (err) {
    console.log(err.message)
    sendServerErrorResponse(res, 'retry again after 15secs');
  }
}

export const recoverPassword = async (req, res) => {
  try {
    const { email } = req.body;
    findByEmail(email).then(customer => {
      if (customer) {
        const link = `http://localhost:3001/api/v1/updatePassword?token=${token}`;
        new Mail(['emekaukpai123@gmail.com'], '<ecommerce@no-reply.coom>', 'Recovery Password', `<b>${link}</b>`).send();
      }
    })
  } catch (err) {

  }
}

export const updatePassword = async (req, res) => {
  try {
    const id = req.customer_id;
    console.log(id);
    const { newPassword, confirmPassword } = req.body;
    // const { email, token } = req.query;
    if (!newPassword || !confirmPassword) {
      return sendResponse(res, 201, { message: 'please both fields are required' })
    };
    if (newPassword != confirmPassword) {
      return sendResponse(res, 201, { message: 'password do not match' })
    }
    const hashedPassword = hashPassword(newPassword);
    updateCustomer({ id: id }, { password: hashedPassword });
    sendResponse(res, 200, { message: 'password updated successfully' })

  } catch (err) {

  }
}
export const updateProfile = async (req, res) => {
  const {
    fullname,
    country,
    address
  } = req.body;
  console.log(req.customer_id);
  try {
    // if (!fullname || !tel || !country || !address) {
    //   return sendResponse(res, 201, { message: 'All fields are required' });
    // }
    const file = dataUri(req).content;
    const image = await uploader.upload(file).then((result) => result.url)
      .catch(err => sendResponse(res, 201, { message: err.message }));

    const updateCustomer = {
      fn: fullname.split(' ')[1],
      ln: fullname.split(' ')[0],
      fullname,
      country,
      address,
      imgurl: image,
      updatedAt: new Date()
    }

  } catch (err) {

  }
}

export const order = async (req, res) => {

}

const customerController = Object.freeze({
  login,
  register,
  verify,
  recoverPassword,
  updateProfile,
  updatePassword,
  order
})

export default customerController;
