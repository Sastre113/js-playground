/*
    A small 'g' is 'happy', but only if a small 'g' 
    follows before or after it. 
    Return true if all g's are happy.
*/

export const gHappy = (str) => {
    if(str.length === 0)
        return false;


    for(let i = 0; i < str.length; i++){
        if(str[i] === 'g' && !((str[i-1] === 'g') || str[i+1] === 'g')){
            return false
        }
    }

    return true;
};