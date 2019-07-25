let arr = [10,2,3,4,5];

for(let value of arr){
    console.log(value);
}

for(let index in arr){
    console.log(arr[index]);

}

arr.forEach(element => {
  console.log(element);   
});