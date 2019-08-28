/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movies) {

    let x = movies.reduce((sum, curr) => {
        return sum += curr.rate
    }, 0);
    return x / movies.length

}





// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let filtered = movies.filter((a) => a.genre.includes("Drama"));
    let x = filtered.reduce((sum, curr) => {
        return sum += Number(curr.rate)
    }, 0)
    if (filtered <= 0) {
        return 0
    } else {
        let avg = x / filtered.length
        console.log(avg)
        return parseFloat(avg.toFixed(2))
    }
}
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration() {

}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average