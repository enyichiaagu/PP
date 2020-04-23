import { customers } from '../../models/';

export const createCustomer = async (customer) => {
  try {
    const emailExits = await customers.findOne({ where: { email: customer.email } });
    if (emailExits) throw new Error('Email Exist already');
    const createdCustomer = await customers.create(customer);
    return createdCustomer;
  } catch (err) {
    throw new Error(err.message);
  }
}

export const findByEmail = async (email) => {
  try {
    const emailExits = await customers.findOne({ where: { email } });
    return emailExits.dataValues;
  } catch (err) {
    throw new Error(err.message);
  }
}

export const updateCustomer = async (check, set) => {
  try {
    console.log(check, set);
    const updated = await customers.update(set, {
      where: check
    });
    return updated;
  } catch (err) {
    throw new Error(err.message);
  }
}

const customerServices = Object.freeze({
  createCustomer,
  findByEmail,
  updateCustomer
})

export default customerServices;


