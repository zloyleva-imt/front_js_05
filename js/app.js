console.log('App was loaded...');

// if(true){
//     console.log('TRUE is true');
// }else{
//     console.log('FASLE is false');
// }

// const res = false?{a:'TRUE', b:'true'}:{a:'FALSE', b:'false'}
// console.log(`${res.a} is ${res.b}`);

// let day = 0;
// while(day < 15){
//     // logic
//     console.log('Go to work', day);
//     day = day + 1;
// }

// do{
//     console.log('Go to work : DO', day);
// }while(false)

// const stuff = [
//     {name: 'Oleh', salary: '4500', sex: 'male', age: 37},
//     {name: 'Ivan', salary: '500', sex: 'male', age: 22},
//     {name: 'John', salary: '2500', sex: 'male', age: 27},
//     {name: 'Maya', salary: '3500', sex: 'female', age: 30},
//     {name: 'Sveta', salary: '4000', sex: 'female', age: 35},
//     {name: 'Met', salary: '1500', sex: 'male', age: 30},
// ];

// for(let i = 0; i<stuff.length; i++){
//     if(stuff[i].sex == 'male' && stuff[i].salary > 1000){
//         console.log(`${stuff[i].name}. His salary is ${stuff[i].salary}`);
//     }else{
//         break;
//     }

//     // (stuff[i].sex == 'male' && stuff[i].salary > 1000)
//     //     ?console.log(`${stuff[i].name}. His salary is ${stuff[i].salary}`):null;
//     // ;
//     console.log('Call to third-party API', i);
// }

// for(let item of stuff){
    // console.log(`${item.name}. His salary is ${item.salary}`)
    // if(item.name == 'Oleh'){
    //     console.log(`Hello sir, ${item.name}`);
    // }else if(item.name == 'Ivan'){
    //     console.log(`Hello mr, ${item.name}`);
    // }else if(item.name == 'John'){
    //     console.log(`Hello, ${item.name}`);
    // }else{
    //     console.log(`Hello, nobody`);
    // }

    // switch(true){ // true === (item.name === 'Oleh')
    //     case (item.name === 'Oleh') :
    //         console.log(`Hello sir, ${item.name}`);
    //         break;
    //     case (item.salary === '4500'):
    //         console.log(`Hello mr, ${item.name}`);
    //         break;
    //     case 'John':
    //         console.log(`Hello, ${item.name}`);
    //         break;
    //     default:
    //         console.log(`Hello, nobody`);
    // }
// }

let res = [];
// debugger;
const arr_size = 10;
for(let i=0;i<arr_size;i++){
    // debugger;
    // res[Math.round(Math.random()*100)] = Math.round(Math.random()*100);
    res.push(Math.round(Math.random()*100));
}
console.log('START', res);

let reverse_arr = []

// for(let i=0;i<res.length;i++){
//     reverse_arr.unshift(res[i]);
// }
// console.log('END', reverse_arr);
for(let i=res.length-1;i>=0;i--){
    reverse_arr.push(res[i]);
}
console.log('END', reverse_arr);