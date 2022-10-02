import * as Joi from "joi";

export const addEnquiry = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    mobile: Joi.string().required(),
    intrests: Joi.string().required(),
    description: Joi.string().required()
});




