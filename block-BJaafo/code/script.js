// #### Get full Name
//Test1

function name (firstName , lastName){
    return firstName + " " + lastName;
}

let fullName = name("Jhon", "Snow");

let expected =(`Jhon snow`);

if(fullName !== expected){
    throw new Error (`${fullName} is not match to ${expected} `)
}


//Test2

function name (firstName , lastName){
    return firstName + " " + lastName;
}

let fName = name("Jhon", "Snow");

let expect =(`Jhon Snow`);

if(fName !== expect){
    throw new Error (`${fName} is not match to ${expect} `)
}


// #### Calculate total amount

//Test1

function totalAmount (amount, taxRate){
    return amount + (amount * taxRate);
}

let tax = totalAmount(1000, 4);

let taxExpected =(500);

if(tax !== taxExpected){
    throw new Error (`${tax} is not match to ${taxExpected} `)
}


//Test1

function totalAmount (amount, taxRate){
    return amount + (amount * taxRate);
}

let taxAmount = totalAmount(1000, 4);

let taxExpect =(5000);

if(taxAmount !== taxExpect){
    throw new Error (`${taxAmount} is not match to ${taxExpect} `)
}
