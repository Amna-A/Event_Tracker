
const myForm = document.querySelector('#myform')
const eventName = document.querySelector('#event')
const dueDate = document.querySelector('#date')
const eventList = document.querySelector('#event-list')

myForm.addEventListener('submit', getEvent)

function getEvent(e){
    //prevent it from actually submitting to a file
    e.preventDefault()

    // let submit = true

    //check if form is empty
    if(eventName.value ===null || eventName.value ===''){
        eventError = "Please enter an event";
        document.querySelector("#event_error").innerHTML = eventError;
        // submit = false;
    }
    if(dueDate.value === null || dueDate.value ===''){
        dateError = "Please enter a due date for the event";
        document.querySelector("#date_error").innerHTML = dateError;
        // submit = false;
    }
    else{
        // console.log('success!')
        const li = document.createElement('li')
        //add class for styling
        li.classList.add('event-items');

        //add remove button
        const removeButton = document.createElement('button')
        const removeText = document.createTextNode("remove")
        removeButton.appendChild(removeText)
        //add class for styling
        removeButton.classList.add('remove-button');

        //add edit button
        const editButton = document.createElement('button')
        const editText = document.createTextNode("edit")
        editButton.appendChild(editText)
        //add class for styling
        editButton.classList.add('edit-button');
        
        
        if (li !== null){
            li.appendChild(document.createTextNode(`${eventName.value}  -  ${dueDate.value}`))
        }
        li.appendChild(removeButton)
        li.appendChild(editButton)
        eventList.appendChild(li)
        
        //clear the fields after submit
        eventName.value = ''
        dueDate.value = ''

        //remove event function
        removeButton.setAttribute('onclick','deleteEvent(this);'); 

        //edit event function 
        editButton.setAttribute('onclick', 'editEvent(this);')  
    }
}
// Function to remove items
function deleteEvent(el) {
    const element = el.parentNode
    element.remove()
}
//function to edit the event name and date
function editEvent(el){

}

//remove error msg when user type needed fields
function removeWarning() {
    document.getElementById(this.id + "_error").innerHTML = "";
}
document.getElementById("event").onkeyup = removeWarning;
document.getElementById("date").onkeyup = removeWarning;