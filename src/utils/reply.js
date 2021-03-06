
class Reply {
    constructor(req, res) {
        this.res = res;
        
        this.obj = {
            method: req.method,
            path: req.path,
            status: 200,
            message: 'OK',
            clientMessage: undefined,
            json: undefined,
            error: undefined
        }

        this.code = (status) => {
            this.obj.status = status;
            
            return this;
        }
    
        this.message = (message, clientMessage) => {
            this.obj.message = message;
            if (clientMessage) 
                this.obj.clientMessage = clientMessage;

            return this;
        }
    
        this.json = (json) => {
            this.obj.json = json;

            return this;
        }
    
        this.error = (error) => {
            if (this.obj.status === 200) {
                this.obj.status = 400;
                if (this.obj.message === 'OK')
                    this.obj.message = undefined
            }
            this.obj.error = {};
            this.obj.error.message = error.message;
            this.obj.error.detail = error.detail || undefined;

            return this;
        }
    
        this.end = () => {
            return this.res.status(this.obj.status).json(this.obj).end();
        }
    }

}

module.exports = (req, res)=> {
    return new Reply(req, res);
};