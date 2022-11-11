
import getDatabase from './getDatabase'
import PushDatabase from './PushDatabase'

export default function RemoveUser(idcard="") {
    let users=getDatabase()
    const filtered = users.filter((item) => item.idcard !== idcard)
    PushDatabase(filtered)
    const done={type:"success", message:"User Deleted"}
    return done

}