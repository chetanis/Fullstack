//by chet.anis#0914
const arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
function func(array) {
    var a;
    for (let i = 0; i < array.length-1; i++) {
        for (let j = i; j < array.length; j++) {
            if(array[i]>array[j]){a=array[i];array[i]=array[j];array[j]=a;}
        }
    }
    return array;
}
console.log(func(arr));