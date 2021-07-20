

const tBody = document.querySelector('#table-body')
tBody.addEventListener('load', CreateTable)

function CreateTable() {

    // const params = (new URL(document.location)).searchParams
    // const eventName  = params.get('event') 
    // const eventDate = params.get('date')
    // const eventList = []
    // const dateList = []

    const eventName = localStorage.getItem('EVENT')
    const eventDate = localStorage.getItem('DATE')

    //nside for
    const tr = document.createElement('tr')
    tr.setAttribute('id', 'eventNumber')

    //elements # on table
    var count = 0
    tr.onclick = function() {
        count += 1;
        tr.innerHTML = count;
    };

    const th = document.createElement('th')
    const tableBodyName = document.createElement('tb')
    const tableBodyDate = document.createElement('tb')
    tableBodyName.setAttribute('id', 'result-name')
    tableBodyDate.setAttribute('id', 'result-date')

    th.appendChild(tableBodyName)
    th.appendChild(tableBodyDate)
    tr.appendChild(th)

    document.getElementById('result-name').innerHTML = eventName
    document.getElementById('result-date').innerHTML = eventDate
    
}