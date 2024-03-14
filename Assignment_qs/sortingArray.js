let sortedArray = function(){
    let array = [45,45,34,45,23,90,3200,100]

    let sortArray = array.sort((a,b) => a - b)
    console.log(sortArray);
}

sortedArray()