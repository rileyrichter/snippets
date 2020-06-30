// This is javascript I use in Zapier code blocks fairly often

// Generate a password or random string
function randomStr(len, arr) { 
    var ans = ''; 
    for (var i = len; i > 0; i--) { 
        ans += 
        arr[Math.floor(Math.random() * arr.length)]; 
    } 
    return ans; 
} 

output = [{password: randomStr(8, '123456789abcdefghijklmnopqrstuvwxyz')}];

// Convert an object or line item to a string
const lineItem = String();
return {lineref: lineItem}

// If passing through a string of multireference items, remove the last comma and space
const str = inputData.ref;
const newStr = str.substring(0, str.length - 2);
return {refs: newStr}