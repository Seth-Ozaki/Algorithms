// ATM machines allow 4 or 6 digit PIN codes
// PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
    if(/^\d+$/.test(pin) && (pin.length === 4 || pin.length === 6)){
    return true
    }else{
    return false
    }
}


    console.log(validatePIN("1")) //False
    console.log(validatePIN("123")) //False
    console.log(validatePIN("12345")) //False
    console.log(validatePIN("1234567")) //False
    console.log(validatePIN("-1234")) //False
    console.log(validatePIN("1.234")) //False
    console.log(validatePIN("-1.234")) //False
    console.log(validatePIN("00000000")) //False

    console.log(validatePIN("a234")) //False
    console.log(validatePIN(".234")) //False

    console.log(validatePIN("1234")) //true
    console.log(validatePIN("0000")) //true
    console.log(validatePIN("4321")) //true
    console.log(validatePIN("5280")) //true
    console.log(validatePIN("123456")) //true
    console.log(validatePIN("000000")) //true
    console.log(validatePIN("654321")) //true
    console.log(validatePIN("859603")) //true