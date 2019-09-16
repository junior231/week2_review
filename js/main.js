import team from "./modules/DataObject.js";

// IIFE - Immediately Invoked Function Expression

(() => {
    console.log('fired!')
    // grab the bio container and get ready to populate its content
    const bioInfo = document.querySelector('.bio-wrapper').children;

    // 


    function showProfData() {
        // change data on the page here
         // this is the label on the button (the name )
        let currentProf = this.textContent;

        // this refers to the heading tag (the first child of the bio-wrapper div)
        bioInfo[0].textContent = team[currentProf].name;
        // this refers to the the paragraph tag (the second child of the bio-wrapper div)
        bioInfo[1].textContent = team[currentProf].role;

        bioInfo[3].src = "images/" + team[currentProf].avatar;

    }
   

    for (let prof in team) {
        console.log(prof);
        //create a button for every prof (every entry) in our object
        let teamButton = document.createElement('button');

        // set the button's label (text) to the prof name (the current entry in the object )
        teamButton.textContent = prof;

        // ad sosme event handling so that  when we click on our new button, we can show the right data
        teamButton.addEventListener('click', showProfData);

        // add the button to the top section of our web page
        document.querySelector("#section1").appendChild(teamButton);
    }

   
})();