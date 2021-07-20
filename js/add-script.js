
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
        li.setAttribute("id", "event-items");

        //add label for event name & date
        const nameLabel = document.createElement('label')
        const dateLabel = document.createElement('label')


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
            //nameLabel.appendChild(document.createTextNode(`${eventName.value}  -  ${dueDate.value}`))
            nameLabel.innerText = eventName.value + "  on  "
            dateLabel.innerText = dueDate.value
            li.appendChild(nameLabel)
            li.appendChild(dateLabel)
            //li.appendChild(document.createTextNode(`${eventName.value}  -  ${dueDate.value}`))
        }
        li.appendChild(removeButton)
        li.appendChild(editButton)
        eventList.appendChild(li)
        
        //clear the fields after submit
        eventName.value = ''
        dueDate.value = ''

        //add remove event function
        //removeButton.setAttribute('onclick','deleteEvent(this);'); 
        removeButton.onclick = deleteEvent

        //add edit event function 
        editButton.setAttribute('onclick', 'editEvent(this);')  

    }
}
function handleSubmit() {
    const eventName = document.getElementById('event').value
    const eventDate = document.getElementById('date').value

    localStorage.setItem('EVENT', eventName)
    localStorage.setItem('DATE',eventDate)

    return false
}
// Function to remove items
function deleteEvent() {
    const element = this.parentNode
    element.remove()
}
//function to edit the event name and date
function editEvent(el){
    const e = el   
    //const buttonText  = button.innerText
    // const fullText = button.parentElement.innerText;
    // const eventName = fullText.substr(0,fullText.indexOf("-"))
    // // eventName.contentEditable = true

    const listItem = e.parentNode
    const labels = listItem.querySelectorAll("label")
    const namelabel = labels[0]
    const datelabel = labels[1]

    //replace event name label with input
    const nameInput = document.createElement('input')
    nameInput.setAttribute('type', 'text')
    nameInput.setAttribute('placeholder' , namelabel.innerText.substr(0,namelabel.innerText.indexOf("o")))
    nameInput.setAttribute('id', 'update-event')

    //replace event date with date input
    const dateInput = document.createElement('input')
    dateInput.setAttribute('type', 'date')
    dateInput.setAttribute('placeholder' , datelabel.innerHTML)
    dateInput.setAttribute('id', 'update-date')

    //replace name
    //nameInput.innerHTML = namelabel.innerHTML
    namelabel.parentNode.insertBefore(nameInput, namelabel);
    namelabel.parentNode.removeChild(namelabel);

    //replace date
    //dateInput.innerHTML = datelabel.innerHTML
    datelabel.parentNode.insertBefore(dateInput, datelabel);
    datelabel.parentNode.removeChild(datelabel);


    //change edit text and class
    e.classList.add("edit-button-update");
    e.classList.remove("edit-button");
    e.innerText = 'done'

    e.removeAttribute('onclick')
    e.setAttribute('onclick','ToggleEditButton()')
   
}

function ToggleEditButton(){

    console.log("inside toggle name input: ")
    //console.log(nameInput.parentNode)
    const b = document.querySelector('.edit-button-update')
    const nameInput = document.getElementById('update-event')
    const dateInput = document.getElementById('update-date')

    const newNameLabel = document.createElement('label')
    newNameLabel.innerText = nameInput.value + "  on  "
    nameInput.parentNode.insertBefore(newNameLabel, nameInput)
    nameInput.parentNode.removeChild(nameInput);

    const newDateLabel = document.createElement('label')
    newDateLabel.innerText = dateInput.value
    dateInput.parentNode.insertBefore(newDateLabel,dateInput)
    dateInput.parentNode.removeChild(dateInput)

    //}
    b.removeAttribute('onclick')
    b.setAttribute('onclick','editEvent(b)')
 
    //b.onclick = editEvent

    //change edit text and class
    b.innerText = 'edit'
    b.classList.add("edit-button");

    console.log(b.parentNode)

    b.classList.remove("edit-button-update");
   
   
}

//remove error msg when user type needed fields
function removeWarning() {
    document.getElementById(this.id + "_error").innerHTML = "";
}
document.getElementById("event").onkeyup = removeWarning;
document.getElementById("date").onkeyup = removeWarning;