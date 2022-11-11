import getDatabase from './getDatabase'
import PushDatabase from './PushDatabase'

export default function UpdateData(idcard="",name="",lastName="",email="",phone = "", address = "", birthday="",vaccinated = false, dose = "", type = "", date = "") {
    let users=getDatabase()
    var result = users.findIndex(obj => obj.idcard === idcard)
    users[result]={idcard,name,lastName,email,phone,address,birthday,vaccinated,dose,date,type}
    let done=PushDatabase(users)
    done={...done,data:users[result]}
    return done
}
