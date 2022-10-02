


export class BaseService {

   

    constructor() {
        this.connection();
    }

    async connection() {
        try {
        } catch (err) {
            console.log("Unable to connect", err)
        }
    }

}
