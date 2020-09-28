export function Validation ( data ) {
    if (data.firstName === "")
        return 1 
    else if (data.lastName === "")
        return 2//last name error
    else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.email)) 
        return 3
    
    else if (data.msg === "")
        return 4;
    else return 0
}

