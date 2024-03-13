let cedar = [
    {Fname: 'Brian',
    Lname: 'Baker',
    salary: 70000,
    location:'Thane',
    post: 'Software developer',
    experience: '3 years',
    age:35
    },
    {Fname: 'Ivana',
    Lname: 'Tinkle',
    salary: 90000,
    location:'kalyan',
    post: 'Sales manager',
    experience: '3 years',
    age:22
    },
    {Fname: 'Mona',
    Lname: 'Lott',
    salary: 80000,
    location:'Titwala',
    post: 'web developer',
    experience: '4 years',
    age:40
    },
    {Fname: 'Anita',
    Lname: 'Bath',
    salary: 100000,
    location:'mulund',
    post: 'Marketing intern',
    experience: '4 months',
    age:19
    },
    {Fname: 'Eileen',
    Lname: 'Dover',
    salary: 8000,
    location:'Thane',
    post: 'Creative head',
    experience: '10 years',
    age:42
    },
    {Fname: 'Ann',
    Lname: 'Chovey',
    salary: 14000,
    location:'kurla',
    post: 'Graphic designer',
    experience: '3 years',
    age:23
    },
    {Fname: 'Chris P',
    Lname: 'Bacon',
    salary: 10000,
    location:'dombivli',
    post: 'Software developer',
    experience: '2 years',
    age:34
    },
    {Fname: 'Justin',
    Lname: 'Time',
    salary: 26000,
    location:'vashi',
    post: 'Social media manager',
    experience: '3 years',
    age:34
    },
    {Fname: 'Al B',
    Lname: 'Zider',
    salary: 30000,
    location:'Thane',
    post: 'Content creator',
    experience: '4 years',
    age:24
    },
    {Fname: 'Noah',
    Lname: 'Lott',
    salary: 44000,
    location:'kalyan',
    post: 'Content writer',
    experience: '4 years',
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

for (const obj of cedar) {
  if(obj.salary > 25000){
    console.log(obj);
  }
};

/**
 * Exercise - 3
 */

  const keys = Object.keys(cedar);
 cedar.forEach( function (keys) {
    if(keys.post === 'Sales manager'){
      keys.salary += 2000;
    }
 } );

 console.log(cedar);


 /**
  * Exercise - 4
  */

 
    let maxValue = -Infinity;
 
    const keys1 = Object.keys(cedar);
 cedar.forEach( function (keys1) {
    if(keys1.experience < maxValue){
      console.log(`Experience:${keys.experience}`);
      
    }
 } );


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

 
 let min_sal = cedar.sort(e => e.salary > 10000)

console.log(min_sal)
 