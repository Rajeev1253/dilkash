import { errorHandler } from "../lib/utils.js";
import {authService}  from "../services/auth.service.js";

const register = async (req, res) =>{
    try {
            
        const response = await authService.register(req);
        return res.status(201).send ({

            success: true,
            message: 'User registered succesfully',
            user: response

        });
    } catch (error) {
        errorHandler(res, error);
    }
}

const login = async (req, res) => {
    try{
        const response = await authService.login(req);
        return res.status(200).send ({
            success: true,
            message: `User logged in succesfully`,
            user: response.user,
            token: response.token,
        });
    }
    catch (error) {
        errorHandler(res, error);
    }
}

const authController = {
    register,
    login
}

export default authController;