let cedar = [
    {Fname: 'Brian',
    Lname: 'Baker',
    salary: 70000,
    location:'Thane',
    post: 'Software developer',
    experience: 3,
    age:35
    },
    {Fname: 'Ivana',
    Lname: 'Tinkle',
    salary: 90000,
    location:'kalyan',
    post: 'Sales manager',
    experience: 3,
    age:22
    },
    {Fname: 'Mona',
    Lname: 'Lott',
    salary: 80000,
    location:'Titwala',
    post: 'web developer',
    experience: 4,
    age:40
    },
    {Fname: 'Anita',
    Lname: 'Bath',
    salary: 100000,
    location:'mulund',
    post: 'Marketing intern',
    experience: 4,
    age:19
    },
    {Fname: 'Eileen',
    Lname: 'Dover',
    salary: 8000,
    location:'Thane',
    post: 'Creative head',
    experience: 10,
    age:42
    },
    {Fname: 'Ann',
    Lname: 'Chovey',
    salary: 14000,
    location:'kurla',
    post: 'Graphic designer',
    experience: 3,
    age:23
    },
    {Fname: 'Chris P',
    Lname: 'Bacon',
    salary: 10000,
    location:'dombivli',
    post: 'Software developer',
    experience: 2,
    age:34
    },
    {Fname: 'Justin',
    Lname: 'Time',
    salary: 26000,
    location:'vashi',
    post: 'Social media manager',
    experience: 3,
    age:34
    },
    {Fname: 'Madhav',
    Lname: 'rete',
    salary: 30000,
    location:'Thane',
    post: 'Content creator',
    experience: 4,
    age:24
    },
    {Fname: 'Noah',
    Lname: 'Lott',
    salary: 44000,
    location:'kalyan',
    post: 'Content writer',
    experience: 4,
    age:34
    }
];

/**
 * Exercise - 1
 */

for (const obj of cedar) {
  if(obj.location === 'kalyan' || obj.location === 'Thane'){
    console.log(`Name: ${obj.Fname} ${obj.Lname}, Address: ${obj.location}`);
  }
};

/**
 * Exercise - 2
 */

console.log('Employees with more than 25000:');
 let minSalary = cedar.filter((e) => e.salary > 25000)

console.log(minSalary)
 

/**
 * Exercise - 3
 */

  const keys = Object.keys(cedar);
 cedar.forEach( function (keys) {
    if(keys.post === 'Sales manager'){
      keys.salary += 2000;
    }
 } );

 


 /**
  * Exercise - 4
  */
console.log('Employees with most experience');

 let mostExperience = cedar.filter(e => e.experience > 3).sort();
console.log(mostExperience);
    


 /**
  * exercise -5
  */

 cedar.push(
  {
    Fname:'Sanjeev',
    Lname:'Kapoor',
    salary:30000,
    location:'kalyan',
    post:'Accountant',
    experience:'5 years',
    age:31
  }
 )

 /**
  * Exercise - 6
  */
  console.log('Employees more than 35 age:')
  let senior = cedar.filter((e) => e.age > 35)
  console.log(senior)
 
/**
 * Exercise - 7
 */

let nameSort = cedar.map((e) => e.Lname)
console.log('Employees in alphabatical order:');
console.log(nameSort.sort())

/**
 * Exercise 8
 */

let salarySort = cedar.map((e) => e.salary)
console.log('Employees salary in descending order:')
console.log(salarySort.sort((a,b) => a-b).reverse());


/**
 * Exercise -9
 */

  let totalSal = cedar.map(e => e.salary).reduce((res,curr) =>{return res = res+curr})
  console.log('Total salary paid to employees:');
  console.log(totalSal);

/**
 * Exercise - 10
 */

  console.log('Employees deleted named Madhav rete:')

for (let i = 0; i < cedar.length; i++) {
  if (cedar[i].Lname === 'rete') {
      cedar.splice(i, 1); // Remove the element at index i
      i--; // Adjust the loop counter since the array length has changed
  }
}

console.log(cedar);