const students = [
    {id: 21, name: "Omar Sunny"},
    {id: 41, name: "Manna"},
    {id: 31, name: "Moury"},
    {id: 77, name: "Dipjol"},
]

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id>40)
console.log(bigger);

