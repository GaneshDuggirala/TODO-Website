// let tasks=document.getElementById('tasks')
// let delet=document.createElement('p')
// let button=document.getElementById("button")
// button.addEventListener('click',()=>{
//     let task_wrote=document.getElementById('area').value
//     const task=document.createElement('p')

//     delet.textContent('Delete')
//     delet.style.fontSize='22px'
//     delet.style.color='black'
//     delet.style.fontWeight='700'
//     delet.style.height='20px'
//     delet.style.width='40px'
//     delet.style.padding='10px'
//     delet.style.backgroundColor='lightgray'
//     delet.style.textAlign='center'
//     delet.style.border='2px solid black'
//     delet.style.borderRadius='8px'
    



//     task.textContent=task_wrote
//     task.style.fontSize='22px'
//     task.style.color='black'
//     task.style.fontWeight='700'
//     task.style.height='20px'
//     task.style.width='40px'
//     task.style.padding='10px'
//     task.style.backgroundColor='lightgray'
//     task.style.textAlign='center'
//     task.style.border='2px solid black'
//     task.style.borderRadius='8px'
//     tasks.appendChild(task)
//     tasks.appendChild(delet)
// })


let tasks = document.getElementById('tasks');
let button = document.getElementById("button");

// Center the task container
tasks.style.display = 'flex';
tasks.style.flexDirection = 'column';
tasks.style.alignItems = 'center';
tasks.style.justifyContent = 'center';
tasks.style.marginTop = '20px';

button.addEventListener('click', () => {
    let task_wrote = document.getElementById('area').value;

    // Create task container for the task and delete button
    const taskContainer = document.createElement('div');
    taskContainer.style.display = 'flex';
    taskContainer.style.alignItems = 'center';
    taskContainer.style.justifyContent = 'space-between';
    taskContainer.style.width = '350px';
    taskContainer.style.padding = '10px';
    taskContainer.style.marginBottom = '10px';
    taskContainer.style.backgroundColor = '#F4F4F4';
    taskContainer.style.border = '1px solid #DDD';
    taskContainer.style.borderRadius = '8px';
    taskContainer.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';

    // Create task element
    const task = document.createElement('span');
    task.textContent = task_wrote;
    task.style.fontSize = '16px';
    task.style.color = '#333';
    task.style.fontWeight = '600';

    // Create delete button
    const delet = document.createElement('button');
    delet.textContent = 'Delete';
    delet.style.fontSize = '14px';
    delet.style.color = 'white';
    delet.style.backgroundColor = '#F44336'; // Red shade
    delet.style.border = 'none';
    delet.style.borderRadius = '5px';
    delet.style.cursor = 'pointer';
    delet.style.padding = '5px 10px';
    delet.style.transition = 'background-color 0.3s';

    // Add hover effect for delete button
    delet.addEventListener('mouseenter', () => {
        delet.style.backgroundColor = '#D32F2F'; // Darker red on hover
    });
    delet.addEventListener('mouseleave', () => {
        delet.style.backgroundColor = '#F44336';
    });

    // Add delete functionality
    delet.addEventListener('click', () => {
        tasks.removeChild(taskContainer);
    });

    // Append task and delete button to the task container
    taskContainer.appendChild(task);
    taskContainer.appendChild(delet);

    // Append task container to the tasks section
    tasks.appendChild(taskContainer);
});

