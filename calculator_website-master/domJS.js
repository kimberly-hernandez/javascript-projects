/*
1.What is the DOM in relation to web development?
DOM- document object model
Connects web pages to scripts/programming languages by representing the structuring of the document (HTML) in memory

2.On your own: What is the difference between document.getElementById() and document.querySelector().

We access elements by ids or class in .getElementById().
We access elements by css selectors, id, or class with.querySelector().

3. What method could I use on the document object to find an HTML element by one of the classes in the elements class list if document.querySelector() was not available?
document.getElementByClassName() 

4.On your own: What is the difference between using *element*.addEventListener() vs *element*.onclick?
With addEventListener, you can attach multiple events to the same element, but not with onclick.

5. add button tag to html, then reference it by id and store in variable in js.
*/

const button = document.getElementById('hello');
//console.log(button);
button.textContent = 'Click Me';
button.style.color = 'white';
button.style.background ='black';


let count = 0;

//6.
button.addEventListener('click',function(){
  // console.log("my event listener is working");
  
  count++;
  counter.innerHTML = count;
  document.body.style.backgroundColor= randomColor();

});

//7.
let counter = document.getElementById('counter');
//console.log(bodySpan);

//8. add a new event listener that responds to right click


button.addEventListener('contextmenu', function(event){
    event.preventDefault();  //prevents menu from popping up
    
    count--;
    counter.innerHTML = count;
   document.body.style.backgroundColor= randomColor();
   // console.log("right click worked");
})

//9. Given the following function that returns a random color from an array, change 
//the background color of the HTML document every time the button is clicked or right
//clicked.

function randomColor() {
    const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
    
    let randomIndex = Math.floor(Math.random() * ((colors.length - 1) - 0 + 1) + 0)
    
    return colors[randomIndex]
}

//10





let quizQuestions = [
    {
        "id": 79680,
        "answer": "anarchy",
        "question": "In 1921 the black flag flew at the funeral of Peter Kropotkin, philosopher of this government-negating ideology",
        "value": 1000,
        "airdate": "2007-02-27T12:00:00.000Z",
        "created_at": "2014-02-11T23:38:41.721Z",
        "updated_at": "2014-02-11T23:38:41.721Z",
        "category_id": 10459,
        "game_id": null,
        "invalid_count": null,
        "category": {
            "id": 10459,
            "title": "political science",
            "created_at": "2014-02-11T23:38:40.866Z",
            "updated_at": "2014-02-11T23:38:40.866Z",
            "clues_count": 5
        }
    },
    {
        "id": 79681,
        "answer": "Africa",
        "question": "In 2000 Rift Valley fever scared WHO by making its first appearance outside this continent",
        "value": 1000,
        "airdate": "2007-02-27T12:00:00.000Z",
        "created_at": "2014-02-11T23:38:41.751Z",
        "updated_at": "2014-02-11T23:38:41.751Z",
        "category_id": 10460,
        "game_id": null,
        "invalid_count": null,
        "category": {
            "id": 10460,
            "title": "who says",
            "created_at": "2014-02-11T23:38:40.880Z",
            "updated_at": "2014-02-11T23:38:40.880Z",
            "clues_count": 5
        }
    },
    {
        "id": 79682,
        "answer": "yew",
        "question": "\"It had to be\" this evergreen tree that is a homonym for a second-person-singular pronoun",
        "value": 1000,
        "airdate": "2007-02-27T12:00:00.000Z",
        "created_at": "2014-02-11T23:38:41.780Z",
        "updated_at": "2014-02-11T23:38:41.780Z",
        "category_id": 10461,
        "game_id": null,
        "invalid_count": null,
        "category": {
            "id": 10461,
            "title": "also a 3-letter tree",
            "created_at": "2014-02-11T23:38:40.895Z",
            "updated_at": "2014-02-11T23:38:40.895Z",
            "clues_count": 5
        }
    },
    {
        "id": 79683,
        "answer": "Alvin Ailey",
        "question": "In 1977 Madonna won a scholarship to the studio of this alliteratively named N.Y. choreographer",
        "value": 1000,
        "airdate": "2007-02-27T12:00:00.000Z",
        "created_at": "2014-02-11T23:38:41.809Z",
        "updated_at": "2014-02-11T23:38:41.809Z",
        "category_id": 10462,
        "game_id": null,
        "invalid_count": null,
        "category": {
            "id": 10462,
            "title": "prime madonna",
            "created_at": "2014-02-11T23:38:40.909Z",
            "updated_at": "2014-02-11T23:38:40.909Z",
            "clues_count": 5
        }
    },
    {
        "id": 79684,
        "answer": "Harry Potter",
        "question": "(Cheryl of the Clue Crew has a new review from the zoo--the London Zoo in Regent's Park, London.)  At the zoo in Regent's Park this character first discovers his unusual powers when he talks to the snakes",
        "value": 200,
        "airdate": "2007-02-26T12:00:00.000Z",
        "created_at": "2014-02-11T23:38:42.318Z",
        "updated_at": "2014-02-11T23:38:42.318Z",
        "category_id": 10463,
        "game_id": null,
        "invalid_count": null,
        "category": {
            "id": 10463,
            "title": "literary london",
            "created_at": "2014-02-11T23:38:42.190Z",
            "updated_at": "2014-02-11T23:38:42.190Z",
            "clues_count": 5
        }
    }
]

//tbody.innerHTML =quizQuestions;

let tbody  = document.getElementById('tbodyID');
//console.log(tbody);

for (let i = 0; i < quizQuestions.length; i++) {

   let tr = "<td>" + quizQuestions[i].id + "</td>" + "<td>" + quizQuestions[i].question
      + "</td>" + "<td>" + quizQuestions[i].category.title + 
       "</td>" + "<td>" + quizQuestions[i].value +
        "</td>" + "<td>" + quizQuestions[i].answer +  "</td>";

 
    tbody.innerHTML += tr;
}



$(document).ready( function () {
    $('#quizQuestionsTable').DataTable();
} );