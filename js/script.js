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

