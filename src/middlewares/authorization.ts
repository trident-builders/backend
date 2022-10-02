import jwt from "jsonwebtoken";

export const authorizationFilter = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log("authHeader",authHeader);
    console.log("process.env.JWT_SECRET_KEY",process.env.JWT_SECRET_KEY);
    
    
    if (authHeader) {
        jwt.verify(authHeader, process.env.JWT_SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.status(401).send({ status: "failure", message: "Invalid token", data: {}, error: "Token is expired/invalid" });
            } else {
                let user = {
                    email: decoded.email,
                    role: decoded.role,
                    name: decoded.name,
                    code: decoded.code
                };
                console.log("user",user);
                req.user = user;
                next();
            }
        });
    } else {
        return res.status(401).send({ status: "failure", message: "Invalid Request", data: {}, error: "Token was not provided" });
    }
};



