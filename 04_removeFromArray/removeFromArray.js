const removeFromArray = function(theArray, remove, ...removeToo) {
    let originalArray = theArray;
    let toBeRemoved = new Array().concat(remove);
    toBeRemoved = toBeRemoved.concat(removeToo);
    for(let i = toBeRemoved.length-1;i>=0; i--){
        while(originalArray.indexOf(toBeRemoved[i])>-1){
            originalArray.splice(originalArray.indexOf(toBeRemoved[i]),1);
        };

    };
    return originalArray;
};
removeFromArray([1,2,3,4],3);

// Do not edit below this line
module.exports = removeFromArray;
