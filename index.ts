#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student{
    name: string

    constructor(Name:string){
        this.name=Name
    }
}
class Person{
    students:Student[]=[]
    addStudent(obj:Student){
        this.students.push(obj)
    }
}
const persons= new Person()
const projectStart=async(persons:Person)=>{
    do{
    console.log(chalk.green.bold("\t  WELCOME!\n"));

const ans = await inquirer.prompt({
    name:"select",
    type:"list",
    message:(chalk.blue("Whom would you like to interact with ?\n")),
    choices:["staff" , "student" , "exit"]
})
if (ans.select=="staff"){
    console.log(chalk.blue(" You approach the staff room. Please feel free to ask any question.\n"));
}
else if(ans.select=="student"){
    const ans= await inquirer.prompt({
        name: "student",
        type:"input",
        message:(chalk.blue("Enter the student's name you wish to engage with:\n"))
    })
    const student=persons.students.find(val=>val.name== ans.student)
    if(!student){
        const name = new Student(ans.student)
        persons.addStudent(name)
        console.log(chalk.blue(` Hello i am ${name.name}. Nice to meet you!\n`));
        console.log(chalk.blue(" New student added\n"));
        console.log(chalk.blue(" Current student list :\n"));
        console.log(persons.students);
    }
    else {
        console.log(chalk.blue(` Hello i am ${student .name}. Nice to see you again!\n`));
        console.log(chalk.blue(" Existing student list:\n"));
        console.log(persons.students);
    
    }
    
}else if(ans.select=="exit"){
    console.log(chalk.blue(" Exiting the program...\n"));
    process.exit()
}
}while(true)
}
projectStart(persons)