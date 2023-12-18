//SORT
// how does jscript sort work? 
// what is the default order,
//  and what if you wanted to sort numbers?
data = ["9", "800", "12", "1"]
//console.log(data.sort()) //alphabetically e.g. ['1', '12', '800', '9']
console.log(data.sort((a, b) => a - b)) //ASCENDING '1', '9', '12', '800']
// console.log(data.sort((a, b) => b - a)) //DESC ['800', '12', '9', '1']

//FIND - is like filter but return only the first item
numbers = [9, 55, 33, 123, 1]
// what is the first number that is greater than 50?
first = numbers.find(n => n > 50)
console.log(first) //55

all = numbers.filter(n => n > 50)
console.log(all) // [55, 123]

//WHAT IS THE DIFF BETWEEN JS DATA AND JSON DATA
// JSON must have quoted keys and be a string
//valid js but invalid json
js_only = { id: 123, name: "ABC" }
js_or_JSON = `{ "id": 123, "name": "ABC" }`

console.log(js_only.name) // ABC
console.log(js_or_JSON.name) //undefined
console.log(js_only.length) // undefined as objects have no length
console.log(js_or_JSON.length) // 28 as its number of chars in text


//CONVERT JS DATA TO JSON TEXT/STRING
console.log(JSON.stringify(js_only)) 

//CONVERT JSON TEXT/STRING TO JS DATA 
console.log(JSON.parse(js_or_JSON)) //cut the string up
