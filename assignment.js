// 1. SCORES RANGE
// const score =prompt('Enter a number:')

// if (score >= 40 && score <=44) {
//     alert(`Your score is ${score}, you got an E`)
// }
// else if (score >=41 && score <=49) {
//     alert(`Your score is ${score}, you got a D`)
// }
// else if (score >=50 && score <=59) {
//     alert(`Your score is ${score}, you got a C`)
// }
// else if (score >= 80) {
//     alert(`Your score is ${score} and this is excellent`)
// }
// else if (score >= 60 && score <=69) {
//     alert(`Your score is ${score}...You got a B`)
// }
// else if(score <= 39) {
//     alert(`Your score is ${score}, You have failed`)
// }else{
//     alert('insert a number 1-100')
// }

// 2. MULTIPLICATION TABLE
// function table (num) {
//     for (let i = 1; i <=12; i++) {
//         const result = i*num;
//         console.log(`${num} * ${i} = ${result}`);

//     }   
// }
// table(2)

//  3.Makes a sentence 'My name is John, I am 45 years old and I am fair in complexion'
//  using the array below and add another array to it.


// person = ['John', 45, 'Fair', true, 'Tall']
// console.log(`My name is ${person[0]}, I am ${person[1]} years old and ${person[2]} in complexion`);
// person.push( ['Joan', 'Peter', 'Cynthia']
// )
// console.log(person)

// 4.  My name is John, I am 45years old and Fair in complexion using the array of objects
// person = {
//     name:'John', 
//     age: 45, 
//     color:'Fair', 
//     status: 'True', 
//     height: 'Tall'
//     }
// console.log(`My name is ${person.name}, I am ${person.age} years old and I am ${person.color}
//  in complexion`);    

// 5. The capital of India is New Delhi while Germany is Berlin using nested arr of object
// world = {
//     Africa:{Nigeria:'Abuja', Ghana:'Accra', Egypt:'Cairo'},
//     Europe:{England:'London', Germany:'Berlin', Spain:'Madrid'},
//     Asia:{Japan:'Tokyo', China:'Beijing', India:'New Delhi'},
//     }
//     console.log(`The capital of India is ${world.Asia.India} while Germany is ${world.Europe.Germany} `)

// 6. Write a program in JavaScript that tells if the name you supplied is in an array or the name is not in an 
// array.
// const arr = ['Joan', 'Favour', 'Racheal','Ekene', 'Chinedu' ]
// for (let i= 0; i<= arr.length; i++) {
//     const person = prompt('Enter name:')
//     if(arr.includes(person)) {
//         console.log(person)
       
//     }else{
//         console.log('Not found')
//     }
        
//     }


// 7. Write a program in JavaScript that will sum all the numbers in an array 10, 20, 30, 40, 70,
//  200, 300 and also determine the average. 

// const num =[10, 20,30,40,70,200,300]
// sum=0
// for (let i = 0; i< num.length; i++) {
//     const result = sum +=num[i]
//     console.log(result) 
//     let total = result/2
//     console.log(total);
// }

// 8. Write a program in JavaScript that will print the lowest number among three numbers supplied
// let arrNum =[ 5, 3, 1, 2]
// let lowest=arrNum[0] 
// for (let index = 0; index < arrNum.length; index++) {
//     if (lowest > arrNum[index]) {
//         lowest = arrNum[index]
//     }
//     console.log(lowest)
// }
// let max=arrNum[0];
// for (let i = 0; i < arrNum.length; i++) {
//     if(max < arrNum[i]) {
//         max= arrNum[i]
//     }
//     console.log(max)
// }

// 9. Create a function in JavaScript that will determine average of numbers in an array. 
// const isArray=[8, 4, 16, 32, ]
// let sum = 0
// for (let i = 0; i < isArray.length; i++) {
//     let average = sum+=isArray[i]/isArray.length
//   console.log(average)  
// }


// 10. Write a program to calculate the area of a circle given the formular below 
// function area(pie, r) {
//     const areaCircle = pie *r**2
//     return areaCircle
    
// }
// console.log(area(22/7, 7))

// 11. Write a program to calculate the perimeter of a rectangle given the formula below
// function Perimeter(l,w) {
//     const p = 2*(l+w) 
//     return p   
// }
// console.log(Perimeter(200, 100))

// 12. Calculate the area of a Rhombus given the formula below
// function Rhombus(p,q) {
//     const A = p * q/2
//     return A    
// }
// console.log(Rhombus(400, 250));

// 13. Write a program in javascript that will output the area of a cone using the formular below




