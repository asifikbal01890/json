const student =[
    {
        id: 1,
        name: 'raju rastoki',
        age: 21,
        roll: "02",
        isMale: true
    },
    {
        id: 2,
        name: 'sajib vottacharzo',
        age: 21,
        roll: "03",
        gender: "male"
    }
]

const studentJson = JSON.stringify(student);
const studentJS = JSON.parse(studentJson)
// console.log(student);
// console.log(studentJson);
// console.log(studentJS);
