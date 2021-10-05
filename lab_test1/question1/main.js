const mixedArray = ['PIZZA',10,true,25,false,'Wings'];

const lowerCaseWords = () =>{
    const result = mixedArray.filter(word => word.length > 1)
    const lowercased = result.map(name => name.toLowerCase());
    console.log(lowercased)

}
console.log(lowerCaseWords());



