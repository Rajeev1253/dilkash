import { comparePassword, hashPassword } from "../helper/auth.helper.js";
import { userModel } from "../models/user_model.js";
import JWT from "jsonwebtoken";

const register = async (req) => {
  try {
    const { username, email, password, secretCode } = req.body;

    if (!username) {
      throw object.assign(new Error(), {
        name: "BAD_REQUEST",

        message: "username is required",
      });
    }
    if (!email) {
      throw object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "email is required",
      });
    }
    if (!password) {
      throw object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "password is required",
      });
    }
    if (!secretCode) {
      throw object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "secretCode is required",
      });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      throw Object.assign(new Error(), {
        name: "CONFLICT",
        message: "user already registered",
      });
    }

    const hash_Password = await hashPassword(password);

    const user = await userModel.create({
      username,
      email,
      password: hash_Password,
      secretCode,
    });
    return user;
  } catch (error) {
    throw error;
  }
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const login = async (req) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "email is required",
        
      });
      
    }
    if (!password) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "password is required",
        
      });
    }

    const user = await userModel.findOne({ email });


    

    if (!user) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "user not registered",
      });
    }
    
    const match = await comparePassword(password, user.password);
    if (!match) {
      throw Object.assign(new Error(), {
        name: "UNAUTHORIZED",
        message: "password is not correct!",
      });
    }

    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "5d",
    });

    return {user, token};

  } catch (error) {
    throw error;
  }
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export const authService = {
  register,
  login,
};