import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/user.model';


//create new user
export const register = async (body) => {
  let findUser = await User.find({ email: body.email });
  let len = findUser.length;
  if (len == 0) {
    const hashedPassword = await bcrypt.hash(body.password, 8)
    let newUser = new User({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: hashedPassword
    });

    let saveData = await User.create(newUser);
    // return saveData;
    let response = {
      status: 201,
      success: true,
      message: 'user registration successfull',
      data: saveData
    };
    return response;
  } else {
    let response = {
      status: 409,
      success: false,
      message: 'user already exists',
      data: body
    };
    return response;
  }
};


// login user
export const login = async (body) => {
  let response = {
    success: true,
    message: '',
    data: ''
  };
  let findUser = await User.find({ email: body.email });
  console.log(`user details ${findUser}`);

  return new Promise((resolve, reject) => {
    if (findUser.length > 0) {
      bcrypt
        .compare(body.password, findUser[0].password)
        .then((result) => {
          if (result) {
            let token = jwt.sign(
              { email: findUser[0].email, userId: findUser[0].id },
              'your-secret-key'
            );
            let obj = {
              firstName: findUser[0].firstName,
              lastName: findUser[0].lastName,
              userId: findUser[0]._id,
              email: findUser[0].email,
              token: token
            };

            (response.success = true), (response.message = 'Login Successfull');
            (response.data = obj), (response.status = 200);
            resolve(response);
          } else {
            (response.success = false),
              (response.message = 'Incorrect Password');
            (response.data = ''), (response.status = 401);
            reject(response);
          }
        })
        .catch((err) => {
          (response.success = false),
            (response.message = 'Error In Checking Password');
          (response.data = err), (response.status = 500);
          reject(response);
        });
    } else {
      (response.success = false), (response.message = 'User Not Found');
      (response.data = ''), (response.status = 404);
      reject(response);
    }
  });
}







