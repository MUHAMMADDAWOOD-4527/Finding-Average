let array=[40,50,60]
function sum(array) {
let total= 0;
for (let i = 0; i < array.length; i++) {
    total +=array[i]
 }
return total;
    
}    
//   console.log(sum(array));

function average(array) {
    let total= sum(array);
    return total/array.length
    
}
console.log(average(array));

