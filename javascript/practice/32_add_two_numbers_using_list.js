function Node(data,nextNodeAddr,previousNodeAddr){
    this.data = data;
    this.nextNodeAddr = nextNodeAddr;
    this.previousNodeAddr = previousNodeAddr;
}
// var firstNode = null;
// Node.prototype.performOperation = function(arr,taskToBePerform){
//     firstNode = firstNode || new Node(0,0,null);
//     var currentNode = firstNode;
//     for(var i = arr.length-1 ; i>=0 ;i--){
//         //console.log(arr[i]);
//         taskToBePerform(arr[i],currentNode);
//     }
// };

 
// var createNodeForData = function(data,prevNodeAddress){
//     var node = new Node(data,0,null);
//     prevNodeAddress.nextNodeAddr = node;
//     prevNodeAddress = node;
//     console.log("previous data:- " + prevNodeAddress.data + " " + prevNodeAddress.carry);
// };

// var addAnotherNumberDataToNode = function(data,nodeAddress){
//     var currentNodeAddr = nodeAddress.nextNodeAddr;
//     console.log("old data:-"+currentNodeAddr.data + " " + currentNodeAddr.carry);
//     var sum = currentNodeAddr.data+data;
//     currentNodeAddr.data = sum%10;
//     currentNodeAddr.carry = Math.floor(sum/10);
//     console.log("new data:-"+currentNodeAddr.data + " " + currentNodeAddr.carry);
// }


// var a = "10";
// var b = "20";
// var startingPoint = new Node();
// startingPoint.performOperation(a.split(""),createNodeForData);

// (function(nodeAddr){
//     let carry = 0;
//     var sum = "";
//     while(nodeAddr!=null){
//         console.log("data:- "+ nodeAddr.data +" " +nodeAddr.carry);
//         sum = nodeAddr.data + carry + sum ;
//         nodeAddr = nodeAddr.nextNodeAddr;

//     }
//     console.log(sum);
// }(firstNode.nextNodeAddr));

//  startingPoint.performOperation(b.split(""),addAnotherNumberDataToNode);

// //console.log(firstNode.data);
// (function(nodeAddr){
//     let carry = 0;
//     var sum = "";
//     while(nodeAddr!=null){
//         console.log("data:- "+ nodeAddr.data +" " +nodeAddr.carry);
//         sum = nodeAddr.data + carry + sum ;
//         nodeAddr = nodeAddr.nextNodeAddr;
//     }
//     console.log(sum);
// }(firstNode.nextNodeAddr));

var firstNodeFirstInput=null,currentNodeFirstInput=null;
function firstInput(event){
    var newNode = new Node(parseInt(event.key),null,currentNodeFirstInput);
    if(!currentNodeFirstInput){
        currentNodeFirstInput = firstNodeFirstInput = newNode;
    }else{
        currentNodeFirstInput.nextNodeAddr = newNode;
    }
    currentNodeFirstInput = newNode;
}

var firstNodeSecondInput=null,currentNodeSecondInput=null;
function secondInput(event){
    var newNode = new Node(parseInt(event.key),null,currentNodeSecondInput);
    if(!currentNodeSecondInput){
        currentNodeSecondInput = firstNodeSecondInput = newNode;
    }else{
        currentNodeSecondInput.nextNodeAddr = newNode;
    }
    currentNodeSecondInput = newNode;
}

function displayFirst(number){
    var currentNode = number == 1 ? firstNodeFirstInput : firstNodeSecondInput;
    var number = "";
    while(currentNode!=null){
        number = number + currentNode.data;
        currentNode = currentNode.nextNodeAddr;
    }
    //console.log(number);
}

function addNumbers(){
    let carry = 0 ; 
    var total = "";
    //console.log(currentNodeFirstInput);
    //console.log(currentNodeSecondInput);
    while(currentNodeFirstInput!=null || currentNodeSecondInput!=null){
        var a = currentNodeFirstInput!=null ? currentNodeFirstInput.data : 0;
        var b = currentNodeSecondInput!=null ? currentNodeSecondInput.data : 0;
        //console.log("a:- " + a +" b:- " + b);
        var sum =  a + b  + carry;
        total = sum % 10 + total;
        carry = Math.floor(sum/10);
        currentNodeFirstInput= currentNodeFirstInput!=null ? currentNodeFirstInput.previousNodeAddr : null;
        currentNodeSecondInput = currentNodeSecondInput!=null ? currentNodeSecondInput.previousNodeAddr : null;

    }
    console.log(carry+total);

}