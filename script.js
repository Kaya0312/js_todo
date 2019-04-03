console.log('Hello World');

const container = document.querySelector('.list');

fetch('data.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);

        // map over 'data'
        const showItem = data.map(item => {
            let li = document.createElement('li');
            let input = document.createElement('input');
            input.setAttribute('type', 'button');
            input.value = 'X';
            
            li.innerHTML = `${item.todo}`;
            li.appendChild(input);

            
            
            container.appendChild(li);
           
            
            
        });

        console.log("OUTCOME", showItem);



        console.log(showItem);
        
        onFormSubmit = (event) => {
            event.preventDefault();
            console.log('SUBMITTED');
            const getInput = event.target.querySelector('input').value;
            console.log(getInput);
            
            myJString = {"todo": getInput};
            
            data.push(myJString);
            event.target.querySelector('input').value = "";
            console.log(data);
            
            
        }
        const form = document.querySelector('.add');
    
        form.addEventListener('submit', onFormSubmit);

    })
    .catch(function (err) {
        console.log(err);
    });
