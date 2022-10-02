import express, { Request, Response, Router } from 'express';
import NewEnquiryModel from '../models/enquiry.schema';
import { addEnquiry } from '../utlils/Validator';


const router: Router = express.Router();


router.post("/newEnquiry", async (req: Request, res: Response) => {
    try {
        addEnquiry.validateAsync(req.body)
        console.log("req.body", req.body)
        const newEnquiry = new NewEnquiryModel({
            name: req.body.name,
            mobile: req.body.email,
            email: req.body.email,
            intrests: req.body.intrests,
            description: req.body.description
        })
        await newEnquiry.save()
        res.status(200).send({ status: "success", message: "Inventory added successfully", statusCode: 200 });
    } catch (error: any) {
        res.status(400).send({ status: "error", message: error.message, statusCode: 400 });
    }
});


export default router;