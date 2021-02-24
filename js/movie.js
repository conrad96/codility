class movie 
{
    constructor(title, genre, director,releaseYear, rating)
    {
        this.title = title;
        this.genre = genre;
        this.director = director;
        this.rating = rating;
        this.releaseYear = releaseYear;
    }

    getOverview()
    {
        return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
    }
}

let M1 = new movie('lord of the rings', 'adventure', 'speilberg', '2002', '5.0')
let M2 = new movie('Guardians of the galaxy', 'fantasy', 'James Gunn', '2003', '4.5')

console.log(M1.getOverview());
console.log(M2.getOverview());