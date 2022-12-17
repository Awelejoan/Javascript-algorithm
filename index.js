// const x = 12;
// y = 5;
// let message = "My name is Bola grace";
// message.indexOf("Bola"); 
// console.log(Number('10'))

// const person = {
//     name:'Joan',
//     age:25,
//     job:{
//         firstJob:'Teacher',
//         SecondJob:'website Development',
//         third:'Frontend dev',
//     }
// }
// console.log(person.job)

// // foreach loop
// const personData = [['Marian', 30], ['Joan', 25], ['Sarah', 20], ['favour', 17]]
// personData.forEach((person)=>{
//     person.forEach((item)=>{
//         console.log(item)
//     })
// })
studentsData = [['Jack', 24], ['Sara', 23],];
for (const i of studentsData) {
    for (const j of i) {
        console.log(j)
    }

}
// looping outer array elements
// for (let i = 0; i < studentsData.length; i++) {
//     // get the length of the inner array elements
//     let innerArrayLength = studentsData[i].length;
//     // looping inner array elements
//     for (let j = 0; j < innerArrayLength; j++) {
//         console.log(studentsData[i][j]);
//     }
// }


const n=10
for (let i = 0; i <=n; i++) {
   if (i%2==0) {
    console.log(i)
   }
    
}
const salaries= {
    Jack : 24000,
    Paul : 34000,
    Monica : 55000
    }
    for (const key in salaries) {
       console.log(`${key}=${salaries[key]}`);
    }
// else (score <= 40) {
//     console.log('You Failed')
// }