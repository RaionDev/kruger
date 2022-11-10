
export default function getDatabase() {
    var users=[]
    const snapshot=JSON.parse(localStorage.getItem("users"))
    if(snapshot!=null){
        snapshot.forEach(a => {
            users.push(a)            
        });
    }
    return users
}
