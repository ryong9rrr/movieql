const yong = {
    name: "Yong Sang Yoon",
    age: 28,
    gender: "male"
}

const resolvers = {
    Query: {
        person: ()=> yong
    }
}

export default resolvers;