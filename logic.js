var topics = ["justin timberlake", "jamie fox", "lebron james", "mila kunis",
    "the rock", "kim kardashian", "jennifer lopez", "cardi b", "arnold schwarzenegger"]

addButtons();
function addButtons() {
    topics.forEach(function (topicName) {
        // create a new button
        var newButton = $("<button>");
        // add values to the new button from our array
        newButton.html(topicName);
        newButton.addClass("buttons");
        newButton.on("click", function () {
            var itemValue = topicName;
            console.log(itemValue);
        })
        // append the new button to the page
        $("#root").append(newButton);
    })

}

//on click variable to retrieve celebrity name from button for query URL
var name = $(".buttons").click(function () {
    console.log(this.innerHTML);
    name = this.innerHTML;
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    name + "&api_key=8hSW7KTGpdnQtB2M4voxHQE9E9pscp04&limit=10&rating=g";
    
    // AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#gifs-appear-here").prepend(gifDiv);
        }
        
    });
    
});

    














