//back-end
function Movie(film, year, score, genre, director) {
  this.film = film;
  this.year = year;
  this.score = score;
  this.genre = genre;
  this.director = director;
  this.userInput = [];
}


//front-end
$(function() {
  $("#add-movie").submit(function(e){
    e.preventDefault();

    var film = $("#title").val();
    var year = $("#year").val();
    var score = $("#score").val();
    var genre = $("#genre").val();
    var director = $("#director").val();
    var newMovie = new Movie(film, year, score, genre, director);

    $("tbody").append("<tr><th>" + film + "</th>" + "<td>" + year + "</td>" + "<td>" + score + "</td>" + "<td>" + genre + "</td>" + "<td>" + director + "</td></tr>");

    $("#title").val("");
    $("#year").val("");
    $("#score").val("");
    $("#genre").val("");
    $("#director").val("");
  });
});
