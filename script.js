// var elem1 = document.querySelector("#elem1");
// var elemImage = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove", function(){
//     elemImage.Style.left = dets.clientX+ "px"
//     elemImage.Style.top = dets.clientY+ "px"
// })

// var elem1 = document.querySelectorAll(".elem1");
// elem1.forEach(function(val){
//     val.addEventListener("mouseenter", function(){
//      val.style.backgroundColor = "red"
//     });
//     val.addEventListener("mouseleave", function(){
//         val.style.backgroundColor = "transparent"
//        });
// })

var elem = document.querySelectorAll(".elem");

elem.forEach(function(val){
    val.addEventListener("mouseenter", function(){
        val.childNodes[3].style.opacity = 1
    });
    val.addEventListener("mouseleave", function(){
        val.childNodes[3].style.opacity = 0
    });
    val.addEventListener("mousemove", function(dets){
    // elemImage.style.left = dets.clientX + "px";
    // elemImage.style.top = dets.clientY + "px";
    val.childNodes[3].style.left = dets.clientX + "px";
    val.childNodes[3].style.top = dets.clientY + "px";

    });

});




// var elemImage = document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove", function(event){
//     elemImage.style.left = event.clientX + "px";
//     elemImage.style.top = event.clientY + "px";
// });


// var elem1 = document.querySelectorAll(".elem");

// elem1.forEach(function(val) {
//     var elemImage = val.querySelector('img'); // Assuming you're working with an image inside each .elem

//     val.addEventListener("mouseenter", function() {
//         val.children[3].style.opacity = 1; // Assuming the desired child is the fourth element child
//     });

//     val.addEventListener("mouseleave", function() {
//         val.children[3].style.opacity = 0;
//     });

//     val.addEventListener("mousemove", function(dets) {
//         if (elemImage) { // Ensure elemImage is defined
//             elemImage.style.left = dets.clientX + "px";
//             elemImage.style.top = dets.clientY + "px";
//         }
//     });
// });


// elem1.addEventListener("mouseenter", function(event){
//     elemImage.style.opacity = 1
// });

// elem1.addEventListener("mouseleave", function(event){
//     elemImage.style.opacity = 0
// });
