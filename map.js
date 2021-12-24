  /**
   * To run this file in Gitpod, use the 
   * command node map.js in the terminal
   */

  // Using a for loop
  let nums = [1, 2, 3, 4, 5];
  let results = [];

  for (let num of nums) {
      results.push(num * 2);
  }
  console.log(results)

  // Using map()
  const multiByTwo = function(num) {
      return num * 2
  }
  const mapResults = nums.map(multiByTwo);
  console.log(mapResults);
  // Simplified w/ map()

  const simplify = nums.map(function(num) {
      return num * 2
  });

  console.log(simplify);
  // Simplfied w/ map() + arrow function
  const moreSimple = nums.map(num => num * 2);
  console.log(moreSimple);

  // With objects:
  const students = [{
          id: 1,
          name: 'Mark',
          profession: 'Developer',
          skill: 'JavaScript'
      },
      {
          id: 2,
          name: 'Ariel',
          profession: 'Developer',
          skill: 'HTML'
      },
      {
          id: 3,
          name: 'Jason',
          profession: 'Designer',
          skill: 'CSS'
      },
  ];

  const studentsWithIds = students.map(students => [students.name, students.id, ]);
  console.log(studentsWithIds);

  const studentsProffesion = students.map(students => [students.name, students.profession]);

  console.log(studentsProffesion);

  // Add students age as a parameter
  const studentsAgeAdded = students.map(i => {
      i.age = 25;
      return i;
  });

  // did it thanks for stackoverflow and the guy Vladimir !! Yuppiyeee
  // if only i could put different ages...

  console.log(studentsAgeAdded);