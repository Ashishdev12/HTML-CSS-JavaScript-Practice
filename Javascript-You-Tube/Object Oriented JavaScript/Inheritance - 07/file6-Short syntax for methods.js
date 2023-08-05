// short syntax for methods


// const user1 = {
//     firstName : "AShish",
//     age: 8,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }   
// }

const user1 = {
    firstName : "Ashish",
    age: 8,
    about(){
        console.log(this.firstName, this.age);
    }   
}



user1.about();