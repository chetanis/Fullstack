//by chet.anis#0914
var arr1=[1,"3",4,5,4];
var arr2=[1,"3",4,5,6,'3'];

//using one array
function remove1(array,x) {
    let k=0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]===x) {
            k++;
            for (let j = i; j < array.length; j++) {
                array[j]=array[j+1];
            }
        }    
    }
    array.length-=k;
    return array;
}
//using two arrays
function remove2(array,x) {
    var array2 = [];
    let j=0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]!==x) {  
            array2[j]=array[i];
            j++;
        }
    }
    return array2;
}
console.log(remove1(arr1,4));
console.log(remove2(arr2,'3'));
