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
            <li> Status : ${status}</li>
            <li> Proprity: ${priority} </li>
            `;

            document.getElementById('result').appendChild(ul);
            
        });

        // let storedNames = JSON.parse(localStorage.getItem("json"));
        // console.log(storedNames);
       })

const input = document.querySelector('.additem');
input.addEventListener('submit', addItem);
function addItem(event) {
    event.preventDefault();

    const userInput = event.target.querySelector('input').value;
    // myJString = {"todo": userInput};
    console.log(userInput);
    let newItem = document.createElement('ul');
    
    newItem.innerHTML = 
    `
    <li><b>${userInput}</b></li>
    <li></li>
    <li></li>
    `;






    document.getElementById('result').appendChild(newItem);
    event.target.querySelector('input').value = "";

    console.log("SUBMITTED");
}
