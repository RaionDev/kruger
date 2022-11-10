export default function PushDatabase(users) {
    localStorage.setItem("users", JSON.stringify(users))
    const done={type:"succes",message:"Information updated"}
    return done
}
