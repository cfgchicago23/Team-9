use('cfgteam9.tpdepmo.mongodb.net');

export function emailValidator(email, userType) {
    //const re = /\S+@\S+\.\S+/
    if (!email) return "Please fill in this field."
    if(userType == "Student"){
        return ''
    }

    //if (!re.test(email)) return 'Please enter a valid email address!'
    return ''
}