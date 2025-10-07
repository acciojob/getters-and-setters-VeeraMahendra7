//complete this code
class Person {
	constructor(name,age){
		this.name = name;
		this.age = age;
	}
	getName(){
		return this.name;
	}
	setAge(age){
		this.age = age;
	}
}

class Student extends Person {
	Student(){
		super(name,age);
	}
	study(){
		console.log(`${super.name} is studying`);
	}
}

class Teacher extends Person {
	Teacher(){
		super(name,age);
	}
	teach(){
		console.log(`${super.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
