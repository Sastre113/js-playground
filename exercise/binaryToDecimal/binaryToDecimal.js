export const binaryToDecimal = (bin) => {
    return bin ? parseInt(bin, 2) : 0;
}


export const binaryToDecimalManual = (bin) => {
    if(!bin || bin.length === 0) {
        return 0;
    }

    let decimalNumber = 0;
    for(let i = 0; i < bin.length; i++){
        decimalNumber += parseInt(bin[i]) * Math.pow(2, (bin.length-1) - i);
    }

    return decimalNumber;
}
