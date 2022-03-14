//by chet.anis#0914
var array = [0,1,1,1,2,3,3,4,4,4,5,5]

//using two arrays
function remove_dup1(array){
    let j=0;
    var array2 = [];
    for (let i = 0; i < array.length-1; i++) {
        if (array[i]!=array[i+1]) {
            array2[j]=array[i];
            j++;
        }
    }
    array2[j]=array[array.length-1];
    return array2;
}

//usinge one array
function remove_dup2(array) {
    let j=0;
    let k=array.length;
    for (let i = 0; i < k-1; i++) {
        if (array[i]!=array[i+1]) {
            array[j]=array[i];
            j++;
        }
    }
    array[j]=array[k-1];
    array.length-=k-j-1;
    return array;
}
console.log(remove_dup1(array));
console.log(remove_dup2(array));