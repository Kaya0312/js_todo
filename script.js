fetch('data.json')
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        // localStorage.setItem('json', JSON.stringify(data));

        data.map(item => {
            const { task, status, priority } = item;

            let ul = document.createElement('ul');

            ul.innerHTML = 
            `
            <li><b>${task}</b></li>
            <li> ${priority} </li>
            <li onClick="deleteItem(event)"> Delete </li>
            `;

            document.getElementById('result').appendChild(ul);
            
        });

        // let storedNames = JSON.parse(localStorage.getItem("json"));
        // console.log(storedNames);
       })

const input = document.querySelector('.additem');
input.addEventListener('submit', addItem);



function addItem(event) {
    const input = document.querySelector('.userInput');
    const warning = document.querySelector('.warning');

    console.log(input.value);

    if(input.value === "") {
        event.preventDefault();
        warning.innerHTML = "Please enter a task";
    }


    if(input.value !== "") {
        
        event.preventDefault();

        warning.innerHTML = "";

        const userInput = event.target.querySelector('input').value;
    
        let newItem = document.createElement('ul');
        
        newItem.innerHTML = 
        `
        <li><b>${userInput}</b></li>
        <li>Important</li>
        <li onClick="deleteItem(event)">Delete</li>    
        `;
    
        document.getElementById('result').appendChild(newItem);
        event.target.querySelector('input').value = "";
    
        console.log("SUBMITTED");




    }



   
}




function deleteItem(event) {
    console.log("CLICKED");
    console.log(event.target.parentNode);

    event.target.parentNode.remove();
}
