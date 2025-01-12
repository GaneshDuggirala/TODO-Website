# Todo List Web Application

This is a simple **Todo List** web application built using **HTML**, **CSS**, and **JavaScript**. It allows users to add tasks, view them, and delete them once completed. It provides a clean and minimalistic user interface and is a great project to help improve your front-end development skills.

![image](https://github.com/user-attachments/assets/a029b82a-c372-4778-b4d9-609f800069ae)
  <!-- Add this line after your description -->

## Features

- **Add Task**: Add tasks by typing into the input field and clicking the "Add" button.
- **View Tasks**: The tasks you add will be displayed below the input field.
- **Delete Task**: Each task comes with a "Delete" button that allows you to remove the task from the list.

## Technologies Used

- **HTML**: The structure of the application.
- **CSS**: Styling the application for a clean and responsive layout.
- **JavaScript**: Handling the interactivity and functionality of adding and deleting tasks.

## How It Works

1. **HTML Structure**:
   - The `index.html` file contains the main structure of the app. It includes:
     - A header (`<div class="header">`) for displaying the app title.
     - An input field (`<input id="area">`) where users can type their tasks.
     - A button (`<button id="button">`) to add the task to the list.
     - A container (`<div id="tasks">`) where all the tasks are displayed.
   
2. **CSS Styling**:
   - The `style.css` file contains the styling rules for the application:
     - The `.header` class styles the title of the app, making it bold and purple.
     - The `.todo` class styles the task input section, aligning the elements in the center.
     - Input fields (`#area`) and buttons (`#button`) are styled to provide a clean and functional UI.
     - Tasks are displayed with specific styles to look distinct, and the delete button has a red background with a hover effect.

3. **JavaScript Functionality**:
   - The `index.js` file contains the logic to handle user interaction:
     - When the user clicks the "Add" button, the app retrieves the value from the input field (`#area`).
     - A new task is created dynamically using the `createElement` method in JavaScript, and the task text is displayed within a `<span>` element.
     - Each task has a "Delete" button that is also dynamically created. When clicked, the task and the delete button are removed from the page using the `removeChild` method.
     - The tasks are displayed in a vertical stack, each with its associated delete button, and the layout is managed with Flexbox to center the content.

4. **Task Deletion**:
   - When the "Delete" button next to a task is clicked, the task and the button are removed from the task container. This is handled by the event listener attached to the delete button.
   - The tasks are dynamically added and removed using DOM manipulation, ensuring the page updates without requiring a reload.

With this setup, you can easily add and remove tasks, providing a simple yet functional Todo List web application.
