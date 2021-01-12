export const people = [
    {
        id : "0",
        name: "Kang",
        age: 29,
        gender: "male"
    },
    {
        id : "1",
        name: "Yong Sang Yoon",
        age: 28,
        gender: "male"
    },
    {
        id : "2",
        name: "Beenzino",
        age: 32,
        gender: "male"
    },
    {
        id : "3",
        name: "Son",
        age: 31,
        gender: "male"
    },
    {
        id : "4",
        name: "livelimlim",
        age: 27,
        gender: "female"
    },
    {
        id : "5",
        name: "SuperBee",
        age: 28,
        gender: "male"
    }
];


export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}