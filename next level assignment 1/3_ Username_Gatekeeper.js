function validateUsername(username){
    let splitedUsername = username.split('');
    if(username.length>=4){
        if(!splitedUsername.includes(' ') &&!username.toLowerCase().includes('admin')){
            return "Available";
        }else if(username.toLowerCase().includes('admin')){
            return "Reserved Word";
        }else{
            return "No Space Allowed";
        }
    }else{
        return "Too Short";
    }
}
console.log(validateUsername("rahim123"))
console.log(validateUsername("ab"))
console.log(validateUsername("a b"))
console.log(validateUsername("abcd"))
console.log(validateUsername("rahim islam"))
console.log(validateUsername("superadmin99"))
console.log(validateUsername("Admin_Rahim"))