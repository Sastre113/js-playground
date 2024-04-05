
/*
   Given are two variables child1 and child2 with a numeric value between 0 and 99. 
   Return true if a child is between 0 and 14 (0 and 14 inclusive). 
   Return false if both or none in between. 
*/

export const littleChild = (child1, child2) => { 
    if(typeof child1 !== "number" || typeof child2 !== "number"){
        throw new Error('parameters provided must be numbers');
    }

    if(Number.isNaN(child1) || Number.isNaN(child2)){
        throw new Error('parameters provided must be numbers');
    }

    return isInRange(child1) ^ isInRange(child2) ? true : false;
};

const isInRange = (number) => {
    return number >= 0 && number <= 14 
};