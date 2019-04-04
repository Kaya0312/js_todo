fetch('data.json')
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        data.map(item => {
            const { task, status, priority } = item;

            let ul = document.createElement('ul');

            ul.innerHTML = 
            `
            <li><b>${task}</b></li>
            <li>
            ${priority==='Important' ? '<span>Important</span>':''}
            </li>
            <li onClick="deleteItem(event)"> Delete </li>
            `;

            document.getElementById('result').appendChild(ul);            
        });
       })

const input = document.querySelector('.additem');
input.addEventListener('submit', addItem);

function addItem(event) {
    event.preventDefault();

    const input = document.querySelector('.userInput');
    const warning = document.querySelector('.warning');

    if(!input.value) {
        warning.innerHTML = "Please enter a task";
    }

    if(input.value !== "") {        
        event.preventDefault();
        warning.innerHTML = "";

        const userInput = event.target.querySelector('input').value;
        const checkbox = document.querySelector('.priority');

        const listContainer = document.getElementById('result');

        let newItem = document.createElement('ul');
        
        newItem.innerHTML = 
        `
        <li><b>${escapeHtml(userInput)}</b></li>
        <li> ${checkbox.checked? '<span>Important</span>':''} </li>
        <li onClick="deleteItem(event)">Delete</li>    
        `;
    
        // document.getElementById('result').appendChild(newItem);

        listContainer.insertBefore(newItem, listContainer.firstChild);



        event.target.querySelector('input').value = "";    
    }   
}

function deleteItem(event) {
    event.target.parentNode.remove();
}

function escapeHtml(str) {
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#39;');
    return str;
}