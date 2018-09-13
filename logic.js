var topics = ["justin timberlake", "jamie fox", "lebron james", "mila kunis",
    "the rock", "kim kardashian", "jennifer lopez", "cardi b", "arnold schwarzenegger",
    "chris pratt", "kobe bryant", "robert downey jr", "kevin heart"]

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
        name + "&api_key=8hSW7KTGpdnQtB2M4voxHQE9E9pscp04&limit=10&rating=g&rating=pg";

    // AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var results = response.data;

        // clear gifs off the page
        $("#gifs-appear-here").empty();

        for (var i = 0; i < results.length; i++) {

            var gifDiv = $("<div>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var personImage = $("<img>");



            // We add the following props to the new img element: 
            //   src, data-still, data-animate, data-state, class
			/* 
			NOTE: the browser ignores any attribute that starts with "data-"
			The three "data-" attributes below are just for the click handler
			function (on line 64.) 
			Reference: https://www.w3schools.com/tags/att_global_data.asp
			*/
            personImage.attr({
                "src": results[i].images.fixed_height_still.url,
                "data-still": results[i].images.fixed_height_still.url,
                "data-animate": results[i].images.fixed_height.url,
                "data-state": "still",
                "class": "giphy"
            });

            // No on click still and animate
            //   personImage.attr("src", results[i].images.fixed_height.url); 

            
            
            //   appends gif and rating
            gifDiv.append(personImage);
            gifDiv.append(p);
            $("#gifs-appear-here").append(gifDiv);



            $(".giphy").on("click", function () {
                // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                var state = $(this).attr("data-state");
                // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                // Then, set the image's data-state to animate
                // Else set src to the data-still value
                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-animate"));
                    $(this).attr("data-state", "animate");
                } else  {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-state", "still");
                }
            });








        }

    });

});
















