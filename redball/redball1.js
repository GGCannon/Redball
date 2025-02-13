
/*
I learned new things

event listener - is a function that waits for a specific event 
to occur on a particular element, such as a button click, mouse 
movement, or key press. When the event happens, the event 
listener executes a specified function in response.

Simple Ver:
Event: An action or occurrence, like a user clicking a button.
Listener: A function that waits for the event to happen and then runs some code in response.
*/

// For the Buttons
document.addEventListener('DOMContentLoaded', (event) => { //Gets the red ball element by its ID
    const redball = document.getElementById('redball');
    let topPosition = 50;
    let leftPosition = 50;// Initializes the top and left positions of the red ball

    document.getElementById('moveUp').addEventListener('click', () => { // Adds an event listener for the "move up" button
        topPosition -= 10;// Decreases the top position by 10 pixels
        redball.style.top = `${topPosition}px`;// Updates the top position of the red ball
    });

    document.getElementById('moveDown').addEventListener('click', () => {// Adds an event listener for the "move down" button
        topPosition += 10; // Increases the top position by 10 pixels
        redball.style.top = `${topPosition}px`;// Updates the top position of the red ball
    });

    document.getElementById('moveLeft').addEventListener('click', () => {// Adds an event listener for the "move left" button
        leftPosition -= 10;// Decreases the left position by 10 pixels
        redball.style.left = `${leftPosition}px`;// Update the left position of the red ball
    });

    document.getElementById('moveRight').addEventListener('click', () => {// Adds an event listener for the "move right" button
        leftPosition += 10;// Increases the left position by 10 pixels
        redball.style.left = `${leftPosition}px`;// Updates the left position of the red ball
    });
});

//Code for arrow keys
window.onload = function() {
    var redball = {
        left: 100,
        top: 100
    };

    // This function updates the position of the red ball on the screen.
    function updateRedballPosition() {
        var ballElement = document.getElementById('redball');
        ballElement.style.left = redball.left + 'px';
        ballElement.style.top = redball.top + 'px';
    }

    // Call this function after updating the position
    document.onkeydown = function(e) {
        e = e || window.event;
        if (e.keyCode == 37) { // Left arrow key
            redball.left -= 5;
        }
        if (e.keyCode == 38) { // Up arrow key
            redball.top -= 5;
        }
        if (e.keyCode == 39) { // Right arrow key
            redball.left += 5;
        }
        if (e.keyCode == 40) { // Down arrow key
            redball.top += 5;
        }
        updateRedballPosition();
    };
};