/* Challenge Mentors

Write all your code at the end of the file

1. Loop through the array, and for each object, `console.log()` out the sentence only for
mentors that are in Barcelona and one of the skills is React
"Hi, my name is {firstName} {lastName}. I work in Barcelona and i know React."

2. To those that work in Barcelona, set "Jun1" in the class attribute, 
and add a new skill to the list "SQL".
To add elements in an array you can use .push()
var animals = ["dog","cat"];
animals.push("horse"); //["dog","cat","horse"]

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]

3. Create an object method with the name .addSkill() to be able to add skills from it

4. Create a function to add a skill to all members in a list of mentors

function addSkill(mentors,newSkill){
  //your code here
}

5. Create a function to remove a skill to all members in a list of mentors

function removeSkill(mentors,newSkill){
  //your code here
}

6. Create a function mentorWithMoreSkills() that returns the name of the mentor with more number of skills

7. Create an object method .addStudentLikes() that increments by one the attribute studentLikes

8. Create a function that adds a student like to all mentors in the array

function addStudentLikes(mentors){
  //your code here
}
*/

var mentors = [
  {
    firstName: "Antonio",
    lastName: "Miranda",
    skills: ["JS", "React", "Node"],
    class: "Mar1",
    studentLikes: 0,
    addSkill: newSkills => {
      if (!this.skills.includes(newSkills)) {
        this.skills.push(newSkills)
      }
    },
    addLikes : newLikes => {
      this.studentLikes.push(newLikes)
    },
    job:
    {
      company: "Google",
      position: "Senior developer",
      city: "Barcelona"
    }
  },
  {
    firstName: "Leo",
    lastName: "Messi",
    skills: ["Play football"],
    class: "Mar3",
    studentLikes: 0,
    addSkill: newSkills => {
      if (!this.skills.includes(newSkills)) {
        this.skills.push(newSkills)
      }
    },
    addLikes : newLikes => {
      this.studentLikes.push(newLikes)
    },
    job:
    {
      company: "FC Barcelona",
      position: "Player",
      city: "Barcelona"
    }
  },
  {
    firstName: "John",
    lastName: "VanDamme",
    skills: ["React", "Angular", "Python", "Node"],
    class: "Mar4",
    studentLikes: 0,
    addSkill: newSkills => {
      if (!this.skills.includes(newSkills)) {
        this.skills.push(newSkills)
      }
    },
    addLikes : newLikes => {
      this.studentLikes.push(newLikes)
    },
    job:
    {
      company: "Facebook",
      position: "Software Manager",
      city: "Chicago"
    }
  },
  {
    firstName: "Giorgio",
    lastName: "Polvara",
    skills: ["HTML", "JS", "React"],
    class: "Mar2",
    studentLikes: 0,
    addSkill: newSkills => {
      if (!this.skills.includes(newSkills)) {
        this.skills.push(newSkills)
      }
    },
    addLikes : newLikes => {
      this.studentLikes.push(newLikes)
    },
    job:
    {
      company: "Amazon",
      position: "Senior developer",
      city: "Barcelona"
    }
  },

];

//YOUR CODE HERE

//exercise 1
for (let i = 0; i < mentors.length; i++) {
  if (mentors[i].job.city === "Barcelona" && mentors[i].skills.includes("React")) {
    console.log(`Hi, my name is ${mentors[i].firstName} ${mentors[i].lastName} I work in Barcelona and i know React.`)
  }
}

//exercise 2
for (let i = 0; i < mentors.length; i++) {
  if (mentors[i].job.city === "Barcelona") {
    mentors[i].class = "Jun1"
    if (!mentors[i].skills.includes("SQL")) {
      mentors[i].skills.push("SQL")
    }
  }
  console.log(`Hi, my name is ${mentors[i].firstName} ${mentors[i].lastName}. I work in Barcelona. Class is ${mentors[i].class} and skills ${mentors[i].skills}`)
}

//exercise 4
let addSkill = (mentorsList, newSkills) => {
  for (let i = 0; i < mentorsList.length; i++) {
    if (!mentorsList[i].skills.includes(newSkills)) {
      mentorsList[i].skills.push(newSkills)
    }
  }
}

//exercise 5
function removeSkill(mentors, skill) {
  for (let i = 0; i < mentors.length; i++) {
    mentorsList[i].skills.splice(skill)
  }
}

//exercise 6
function mentorWithMoreSkills(listOfMentors){
   let mentorWithMaxSkills = null;
   let maxSkills = 0;
 for (let i = 0; i < listOfMentors.length; i++){
   if (listOfMentors[i].skills.length >= maxSkills){
     maxSkills = listOfMentors[i].skills.length
     mentorWithMaxSkills = listOfMentors[i]
   }
 }
 return mentorWithMaxSkills
}

let mentorA = mentorWithMoreSkills(mentors);
console.log(`Mentor with more skills is ${mentorA.firstName}`)

// exercise 8
function addLikes(mentorsList, newLikes){
  for(let i = 0; i < mentorsList.length; i++){
    mentorsList[i].studentLikes.push(newLikes)
  }
}