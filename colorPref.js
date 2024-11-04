function myFavColors() {
    let favcolors = [];

    for (let i = 0; i < 3; i++) {
        let enterColor = prompt("Enter My Three Favorite colors.");
        favcolors.push(enterColor);
        alert("My Favorite Colors are: " + favcolors);
    }
    let pushcolor = prompt("Add another color you like.");
    favcolors.push(pushcolor);
    alert("Your new colors are: " + favcolors)

}
