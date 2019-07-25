// create a node
let firstNode = null;
class Node{
    constructor(data,leftNode,rightNode,nodeId){
        this.data = data;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
        this.nodeId = nodeId;
    }

    // getters and setter
    getData(){
        return this.data;
    }

    setData(data){
        this.data = data;
    }

    getLeftNode(){
        return this.leftNode;
    }

    setLeftNode(leftNode){
        this.leftNode = leftNode;
    }

    getRightNode(){
        return this.rightNode;
    }

    setRightNode(rightNode){
        this.rightNode = rightNode;
    }

    getNodeId(){
        return this.nodeId;
    }
    setNodeId(nodeId){
        this.nodeId = nodeId;
    }    
}

function addNode(data){
    let currentNode = firstNode ;
    let tempNode = currentNode;
    let node = new Node(data,null,null,1);

    while(currentNode!=null){
        tempNode = currentNode;
        currentNode = currentNode.data > data ? currentNode.leftNode : currentNode.rightNode;
    } 
    if(tempNode==null){
        firstNode = node;
    }else{
        node.nodeId = tempNode.data > data ? tempNode.nodeId * 2 : tempNode.nodeId * 2 + 1;
        tempNode.data > data ? tempNode.leftNode = node : tempNode.rightNode = node;
    }
    console.log("nodeId added:- " + node.nodeId);
    return this;
}

function deleteNode(data){
    let currentNode = firstNode ;
    let tempNode = currentNode;

    while(currentNode!=null){
        if(currentNode.data==data){
            tempNode.data > data ? tempNode.leftNode = null : tempNode.rightNode = null;
            console.log("nodeId delete:- " + tempNode.nodeId);
            break;
        }
        tempNode = currentNode;
        currentNode = currentNode.data > data ? currentNode.leftNode : currentNode.rightNode;
    } 
    if(firstNode==null){
        console.log("No data in tree");
    }

    if(tempNode!=null && tempNode.data == data){
        console.log("nodeId delete:- " + tempNode.nodeId);
        firstNode = null;
    }
    if(tempNode!=null && tempNode.data!=data){
        console.log("No data found");
    }
    return this;
}

function searchNode(data){
    let currentNode = firstNode ;
    let tempNode = currentNode;

    while(currentNode!=null){
        if(currentNode.data==data){
            break;
        }
        currentNode = currentNode.data > data ? currentNode.leftNode : currentNode.rightNode;
    } 
    if(currentNode!=null){
        return currentNode.nodeId;
    }else{
        // if searching data not found
        return -1;
    }
    //return this; 
}

function preOrder(displayNode){
    if(displayNode!=null){
        console.log(displayNode.data);
        preOrder(displayNode.leftNode);
        preOrder(displayNode.rightNode);
    }   
}

function inOrder(displayNode){
    if(displayNode!=null){
        inOrder(displayNode.leftNode);
        console.log(displayNode.data);
        inOrder(displayNode.rightNode);
    }   
}


function postOrder(displayNode){
    if(displayNode!=null){
        postOrder(displayNode.leftNode);
        postOrder(displayNode.rightNode);
        console.log(displayNode.data);
    }   
}



(function(){
    addNode(10);
    addNode(20);
    addNode(15);
    addNode(1);
    addNode(5);
    var traversel = (firstNode,fun) => { fun(firstNode)};
    traversel(firstNode,preOrder);
    traversel(firstNode,inOrder);
    traversel(firstNode,postOrder); 
    console.log(searchNode(6));
    console.log(searchNode(1));
    console.log(searchNode(10));
    deleteNode(21);
    console.log(searchNode(20));
    deleteNode(20);
    console.log(searchNode(20));
    console.log(searchNode(15));
    console.log(searchNode(1));

    deleteNode(1);
    console.log(searchNode(15));
    console.log(searchNode(1));
}());
