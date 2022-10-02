import express from 'express';
import EnquiryController from './enquiry.controller'
import AuthController from './authentication.controller'
const router = express.Router();

router.use("/enquiry", EnquiryController);
router.use("/auth", AuthController)


export default router;