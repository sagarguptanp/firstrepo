// var counter = 0;
// function timer(){
//     console.log("outer :- "+counter++);
// }

// //setInterval(timer,2000);
// //var id = setInterval(timer2 , 0);

// var counter2 = 0;
// var flag = true;
// function timer2(){
//     console.log("inner :- "+counter2++);
// }

// function clear(){
//     clearInterval(id);
//     counter2 = 353566;
// }
// //setTimeout(clear,10000);
function bindData(temp){
    console.log(temp);
}
for(let i =0 ; i<5 ; i++){

    //setTimeout(bindData.bind(this,i),1000);
    setTimeout(bindData,1000,i);
}
//setTimeout(() => {console.log("sagar")},1);
    

