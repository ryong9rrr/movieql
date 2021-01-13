export let movies = [
    {
        id : 0,
        name: "Harry Porter",
        score: 8.2
    },
    {
        id : 1,
        name: "New World",
        score: 7.5
    },
    {
        id : 2,
        name: "Nameless Gangster: Rules of the Time",
        score: 9.7
    },
    {
        id : 3,
        name: "Bad Deal",
        score: 8.6
    }
];

export const getMovies = () => movies;


export const getById = (id) => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
}

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);

    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: movies.length,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}