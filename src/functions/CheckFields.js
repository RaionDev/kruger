export default function CheckFields(name = "", lastName = "", idcard = "", email = "") {
    const validEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    if ((name.trim()).length >= 3) {
        if ((name.trim()).length >= 3) {
            if (idcard.length === 10) {
                if (validEmail.test(email)) {
                    const done = {
                        type: "success",
                        message: "Valid fields"
                    }
                    return done
                } else {
                    const error = {
                        type: "error",
                        message: "Invalid email"
                    }
                    return error
                }
            } else {
                const error = {
                    type: "error",
                    message: "Invalid Identity card"
                }
                return error
            }
        } else {
            const error = {
                type: "error",
                message: "Invalid Last Name"
            }
            return error
        }
    } else {
        const error = {
            type: "error",
            message: "Invalid Last Name"
        }
        return error
    }
}
