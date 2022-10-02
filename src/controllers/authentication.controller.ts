import express, { Request, Response, Router } from 'express';
import { AuthenticationService } from '../services/authentication.service';
import { MESSAGES, STATUS } from '../common/constants';



const router: Router = express.Router();
const AuthService: AuthenticationService = new AuthenticationService()

router.post("/signup", async (req: Request, res: Response) => {
    try {
      
    }
    catch (error) {
        res.status(400).send({ status: "error", statusCode: 400, message: error.message })
    }
});

router.post("/signin", async (req: Request, res: Response) => {
    try {
       
    }
    catch (error) {
        res.status(400).send({ status: STATUS.FAILURE, message: error.message });
    }
})

router.post("/forgot-password", async (req: Request, res: Response) => {
    try {
        
    }
    catch (error) {
        res.status(400).send({ data: { statusCode: 400, message: error.message, status: "error" } })
    }
})

router.post("/reset-password", async (req: Request, res: Response) => {
    try {
       
    }
    catch (error) {
        res.status(400).send({ data: { statusCode: 400, message: error.message, status: "error" } })
    }
})

router.post("/sso-login", async (req: Request, res: Response) => {
    try {
       
    }
    catch (error) {
        res.status(400).send({ data: { statusCode: 400, message: error.message, status: "error" } })
    }
})

router.get("/admin/all-users", async (req: Request, res: Response) => {
    try {
      
    }
    catch (error) {
        res.status(400).send({ data: { statusCode: 400, message: error.message, status: "error" } })
    }
})

router.put("/admin/update-user", async (req: Request, res: Response) => {
    try {
       
    }
    catch (error) {
        res.status(400).send({ data: { statusCode: 400, message: error.message, status: "error" } })
    }
})

router.post("/admin/add-user", async (req: Request, res: Response) => {
    try {
       
    }
    catch (error) {
        res.status(400).send({ data: { statusCode: 400, message: error.message, status: "error" } })
    }
})

export default router;