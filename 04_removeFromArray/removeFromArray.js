const removeFromArray = function(theArray, remove, ...removeToo) {
    //Define array, that will hold all to-be-deleted items
    let toBeRemoved = new Array().concat(remove);
    //Add all elements after 1st to be deleted. 
    toBeRemoved = toBeRemoved.concat(removeToo);
    //for each element in the to-be-deleted items array, remove it from theArray
    for(let i = toBeRemoved.length-1;i>=0; i--){
        while(theArray.indexOf(toBeRemoved[i])>-1){
            theArray.splice(theArray.indexOf(toBeRemoved[i]),1);
        };

    };
    return theArray;
};

// Do not edit below this line
module.exports = removeFromArray;
