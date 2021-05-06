class AkiraChix{
    constructor(stream1,stream2,stream3){
        this.stream1=stream1;
        this.stream2=stream2;
        this.stream3=stream3;
    }
    getSchool(){
        return `This school has three classes namely: ${this.stream1},${this.stream2} and ${this.stream3}`  
    };
    getStudents(){
        let student=[{
    name:"Janet",age:20,nationality:"Ugandan",hobby:["listening to music","dancing"]},
   { name:"Wato",age:19,nationality:"Kenyan",hobby:["preaching","dancing"]},
   {name:"Gilly",age:20,nationality:"Kenyan",hobby:["swimming","eating","travelling"]},
   {name:"Barbie",age:21,nationality:"Kenyan",hobby:"swimming"},
        ]
       

        var student1=
            {name:"Winnie",age:23,nationality:"Rwandan",hobby:["hiking","listening to music","travelling"]}

    //    using rest operator to get values in an object
            let {name,...rest}=student1
        console.log(rest.hobby)
        // looping through keys and values
        for(let[key,value] of Object.entries(student1)){
             console.log(`${key}:${value}`)
      }
     return student[1]

    }
}
let akiraChix=new AkiraChix("AnitaB","Lovelace","Lisalab");
console.log(akiraChix.getSchool());
console.log(akiraChix.getStudents())

function miaka(age){
    if (age< 18)
    console.log("You can't go out, its cold")
    else if(age>18 && age<22)
    console.log("you can go out but carry your sweaters")
    else if(age>24)
    console.log("Be responsible")
    else
    console.log("You can go home, you are not part of us.")

}
miaka(12);
miaka(20);
miaka(25);
// function calc(num1,num2,op){
//    let  num1=prompt("Enter first number: ")
//    let op= prompt("Enter operator: ")
//    let num2=prompt("Enter second number: ")
//     if (op=="+")
//     console.log(num1+num2);
//     else if (op=="-")
//     console.log(num1-num2);
//     else if (op=="/")
//     console.log(num1/num2);
//     else if (op=="*")
//     console.log(num1*num2);
//     else
//     console.log("this is not an operator");
// }
// calc();
var pupil={
    name: "Milane",
    age: 25,
    nationality: "Sudanese",
    hobby: "art",
}
 
var pupil2=Object.create(pupil)
pupil2.name2="Jamal";
pupil2.age2=16;
pupil2.nationality2="Tanzanian";
pupil2.hobby2="Singing";

for(let[key,value] of Object.entries(pupil2)){
    console.log(`${key}:${value}`)
}
