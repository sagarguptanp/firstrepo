let i = 0;
    function rec(i){
      if(i++<10){
        let promise = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                let result = confirm("Hello"+i);
                console.log(result);
                if(result){
                    resolve(i)
                }else{
                    reject("canceling recursion from i :-"+i);
                }},2000);});
        console.log(promise);
        promise.then((message)=>{rec(i)}).catch((message)=>{console.log(message);return 1;});
      }else{
        return 1;
      }
    }
    
    //console.log(rec(i));
    function pro(){
      new Promise((resolve,reject)=>{
        let result = confirm("hello 1 promise");
        result ? resolve(1) : reject (1);
      }).then((message)=>{
        console.log(message);
        let result = confirm("hello 2 promise");
        return new Promise((resolve,reject) => {
          result ? resolve(2) : reject (2);
        });
      }).then((message)=>{
        console.log(message);
        let result = confirm("hello 3 promise");
        return new Promise((resolve,reject) => {
          result ? resolve(3) : reject (3);
        });
      }).then((message)=>{
        console.log(message);
        let result = confirm("hello 4 promise");
        return new Promise((resolve,reject) => {
          result ? resolve(4) : reject (4);
        });
      }).catch((message)=>{
        console.log("promise rejected of count "+message);
      });
    }

    //pro();

    function pro1(){
      new Promise((resolve,reject)=>{
        let result = confirm("hello 1 promise");
        result ? resolve(1) : reject (1);
      }).then((message)=>{
        console.log(message);
        let result = confirm("hello 2 promise");
        return new Promise((resolve,reject) => {
          result ? resolve(2) : reject (2);
        });
      }).catch((message)=>{
        console.log("promise rejected of count  "+message);
        let result = confirm("catch handling 2 promise");
        return new Promise((resolve,reject) => {
          result ? resolve(2) : reject (2);
        });
      }).then((message)=>{
        console.log(message);
        let result = confirm("hello 3 promise");
        return new Promise((resolve,reject) => {
          result ? resolve(3) : reject (3);
        });
      }).catch((message)=>{
        console.log("promise rejected of count  "+message);
        let result = confirm("catch handling 3 promise");
        return new Promise((resolve,reject) => {
          result ? resolve(3) : reject (3);
        });
      }).then((message)=>{
        console.log(message);
        let result = confirm("hello 4 promise");
        return new Promise((resolve,reject) => {
          result ? resolve(4) : reject (4);
        });
      }).catch((message)=>{
        console.log("promise rejected of count  "+message);
        let result = confirm("catch handling 4 promise");
        return new Promise((resolve,reject) => {
          result ? resolve(4) : reject (4);
        });
      });
    }
    pro1();