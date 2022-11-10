import CheckFields from "./CheckFields"
import getDatabase from "./getDatabase"
import PushDatabase from "./PushDatabase"

function NewUser (name = "", lastName = "", idcard = "", email = "") {
    const user = {
        name,
        lastName,
        idcard,
        email,
        phone: "",
        address: "",
        vaccinated: false,
        birthday: null

    }

    const field = CheckFields(name, lastName, idcard, email)
    if (field.type === "success") {
        let users = getDatabase()

        var result = users.filter(obj => obj.idcard === user.idcard)
        if (result.length > 0) {
            console.log("Existe este usuario")
            const error = { type: "error", message: "Account already exist" }
            return error
        } else {
            users.push(user)
            PushDatabase(users)
            const done = { type: "success", message: "User saved" }
            return done
        }
    }else{
        const error={type:"error",message:field.message}
        return error
    }
}

export default NewUser