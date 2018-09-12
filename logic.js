var topics = ["justin timberlake", "jamie fox", "lebron james", "mila kunis", "the rock", "kim kardashian", "jennifer lopez", "cardi b", "arnold schwarzenegger"]
// addButtons();
// function addButtons() {
//     topics.forEach(function (topicName) {
//         // create a new button
//         var newButton = $("<button>");
//         // add values to the new button from our array
//         newButton.html(topicName);
//         // append the new button to the page
//         $("#root").append(newButton);
//     })

// }

addButtons();
function addButtons() {
    topics.forEach(function (topicName) {
        // create a new button
        var newButton = $("<button>");
        // add values to the new button from our array
        newButton.html(topicName);
        newButton.addClass("buttons");
        newButton.on("click",function(){
            var itemValue = topicName;
            console.log(itemValue);
        })
        // append the new button to the page
        $("#root").append(newButton);
    })

}







