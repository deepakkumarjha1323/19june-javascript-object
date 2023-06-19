// Lets Create a JavaScript Objects

let student1 = {
    // P:V
    name:'Deepak ',
    'lname':"Jha ",
    "age":'20 ',
    salary: 30000,
    address:" Kashipur, SPJ, BHR",
    qualification:' B.Sc(Che)',

    // Function/Method
    getMyFullDetails(){
        console.log("Hello "+ this.name + this.lname + this.age + this.salary + this.address + this.qualification+ ' Thank You...!!!');
    }
}

//Object.member
student1.getMyFullDetails();

//The syntax for accessing the property of an object is:
/*
    1.objectName.property
    2.objectName["property"]
    3.objectName[expression]   // x = "age"; person[x]
*/

// 1. ObjectName.Property
console.log(student1.name);

// 2. ObjectName["Property"]
console.log(student1["lname"]);

// 3. ObjectName[expression]
let a= "address"
console.log(student1[a]);
