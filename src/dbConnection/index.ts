import { connect } from "mongoose"
import dotenv from "dotenv"

dotenv.config()

export const mongoDbConnection = async () => {
    try {
        await connect(process.env.DB_URL).then(() => {
            console.log("DB Connected Succesfully !")
        }).catch((err: any) => {
            console.log("Error while connecting DB !", err)
        })
    }
    catch (err: any) {
        console.log(err)
    }
}