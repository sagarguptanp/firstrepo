class Element{
    constructor(data,nextElement){
        this.data = data;
        this.nextElement = nextElement;
    }
    setData(data){
        this.data = data;
    }
    setNextElement(nextElement){
        this.nextElement = nextElement;
    }
    getData(){
        return this.data;
    }
    getNextElement(){
        return this.nextElement;
    }    
}

class Stack{
    constructor(){
        this.top = null;

    }

    push(data){
        let element = new Element(data,this.top);   
        this.top = element;   
    };
    
    pop(){
        if(this.top === null){
            console.log("Stack is empty");
            return null;
        }else{
            let data = this.top.getData();
            this.top = this.top.getNextElement();
            return data;
        }
    }
    
    peek(){
        if(this.top === null){
            console.log("Stack is empty");
            return null;
        }else{
            return this.top.getData();
        }
    }    
}

class Validator{
    constructor(data){
        this.data = data;
    }

    isPushableData(data){
        switch(data){
            case "{" : return true;
            case "(" : return true;
            case "[" : return true;
        } 
    }

    isPopableData(data){
        switch(data){
            case "}" : return true;
            case ")" : return true;
            case "]" : return true;
        } 
    }

    isValidPopup(peekBracket,popBracket){
        if(peekBracket === "{" && popBracket === "}"){
            return true;
        }else if(peekBracket === "(" && popBracket === ")"){
            return true;
        }else if(peekBracket === "[" && popBracket === "]"){
            return true;
        }

        return false;
    }

    validateData(){
        let stack = new Stack();
        let charArray = this.data.split("");
        let tempindexOfInvalidBackets = -1;
        let i = 0;
        let isValid = true;
        for( i = 0 ; i < charArray.length; i++){
            let tempData = charArray[i];
            if(this.isPushableData(tempData)){
                let obj = {data:tempData , index : i+1};
                stack.push(obj);
                tempindexOfInvalidBackets=i+1;
            }else if(this.isPopableData(tempData)){
                tempindexOfInvalidBackets=i+1;
                if(stack.peek() !== null && this.isValidPopup(stack.peek().data,tempData)){
                    stack.pop();
                }else{
                    isValid = false;
                    break;
                }
            }

        }
        if(stack.peek() === null && i == charArray.length && isValid){
            return -1;
        }else{
            if(stack.peek() !== null && isValid){
                return stack.pop();
            }else{
                let obj = { index : tempindexOfInvalidBackets != -1 ? tempindexOfInvalidBackets : -1 , data:null};
                obj.data = obj.index !== -1 ? charArray[obj.index-1]:null;
                return obj;
            }
            
        }
        
    }

}



(function(){
    // let stack = new Stack();
    // stack.peek();
    // stack.pop();
    // stack.push(10);
    // stack.push(11);
    // stack.push(12);
    // stack.push(13);
    // stack.peek();
    // stack.pop();
    // stack.peek();

    // let another_stack = new Stack();
    // another_stack.push(31);
    // another_stack.peek();
    // stack.peek();

    let data = "(saga)))r{gupta}[backend]ii";
    let validator = new Validator(data);
    let index = validator.validateData();
    console.log( index !== -1 ? "String is not balanced. "+index.data+" is missplaced. Invalid at postion "+ index.index +" " : "String is balanced");

}());

module.exports = Validator;
