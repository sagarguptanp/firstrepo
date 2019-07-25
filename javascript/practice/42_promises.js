let myPromise = new Promise((resolve,reject) => {
    let a = 10 + 20;
    if(a > 20){
        resolve("Successfully resolved");
    }else{
        reject("Rejection");
    }
} );

myPromise.then((message) => { console.log(message);}).catch((message) => { console.log(message); });
