//linked list
function list(data,next){
    this.data = data;
    this.next = next;
}
var firstNode = null ;
function addNode(data){
    var node = new list(data,null);
    var nextNode = firstNode;
    if(nextNode!=null){
        while(nextNode.next != null ){
            nextNode = nextNode.next;
        }
        nextNode.next=node;
    }else{
        firstNode = node;
    }
    
}

function deleteNode(data){
    var nextNode = firstNode;
    var prevNode = null;
    while(nextNode!=null && nextNode.data!=data){
        prevNode = nextNode;
        nextNode = nextNode.next;
    }
    if(prevNode==null){
        firstNode=nextNode.next;
    }else{
        prevNode.next=nextNode.next;
    }
    delete nextNode;
}

function display(){
    var nextNode = firstNode;
    console.log("Linked list :-");
    while(nextNode!=null){
        console.log(nextNode.data);
        nextNode = nextNode.next;
    }
    console.log("End of list");
}

console.log("insert node with data 1");
addNode(1);
display();
console.log("delete node with data 1");
deleteNode(1);
display();
console.log("insert node with data 2");
addNode(2);
console.log("insert node with data 3");
addNode(3);
console.log("insert node with data 4");
addNode(4);

display();
console.log("delete node with data 4");
deleteNode(4);
display();

console.log("insert node with data 5");
addNode(5);
console.log("delete node with data 3");
deleteNode(3);
display();