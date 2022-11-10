import getDatabase from "./getDatabase"

function Login(user = "", pass = "") {
    var users = getDatabase()
    var result = users.filter(obj => obj.idcard === user)
    if (result.length > 0) {
        if(result[0].lastName===pass){
            const done={type:"success",message:"Sign in successfully",data:result[0]}
            return done
        }else{
            const error={type:"error",message:"Incorrect username or password"}
            return error
        }

    } else {
        const error={type:"error",message:"Incorrect username or password"}
        return error
    }
}

export default Login