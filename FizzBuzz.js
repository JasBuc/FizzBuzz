const readline = require('readline-sync');
console.log("Please enter a maximum number: ")
const max = readline.prompt()

for (i=1;i<=max;i++){
    var output = ""
    if(i%11===0){
        if(i%13===0){
            output = "Fezz"
        }
        output += "Bong"
    }
    else if(i%3===0 || i%5===0)
    {
        if(i%3===0)
        {
            output = "Fizz"
        }
        if(i%13===0){
            output+="Fezz"
        }
        if(i%5===0){
            output += "Buzz"
        }
        if(i%7===0){
            output+="Bang"
        }
    }
    else if(i%7===0){
        if (i%13===0){
            output = "Fezz"
        }
        output += "Bang"
    }
    else{
        output = i    
    }

    if (i%17===0){
        if(output.length>=4){
            reversedOutput=""
            for(j=output.length;j>3;j-=4){
                reversedOutput += output.substring(j,j-4)//are these values right
            }
            output=reversedOutput
        }
        
    }
    console.log(output)
}