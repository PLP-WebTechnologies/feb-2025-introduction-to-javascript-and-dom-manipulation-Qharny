// Wait for the DOM to fully load before executing code
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. TEXT MODIFICATION
    const changeTextBtn = document.getElementById('change-text-btn');
    const dynamicText = document.getElementById('dynamic-text');
    
    // Array of sample texts to cycle through
    const sampleTexts = [
        "JavaScript is fun and powerful!",
        "DOM manipulation allows dynamic content updates.",
        "This text was changed using JavaScript.",
        "You can create interactive web pages with JS."
    ];
    
    let textIndex = 0;
    
    changeTextBtn.addEventListener('click', function() {
        // Update text content and cycle through sample texts
        dynamicText.textContent = sampleTexts[textIndex];
        textIndex = (textIndex + 1) % sampleTexts.length;
    });
    
    // 2. STYLE MODIFICATION
    const colorInput = document.getElementById('color-input');
    const applyColorBtn = document.getElementById('apply-color-btn');
    const colorPreview = document.getElementById('colorPreview');
    const toggleHighlightBtn = document.getElementById('toggle-highlight-btn');
    
    // Apply color from input to preview
    applyColorBtn.addEventListener('click', function() {
        const colorValue = colorInput.value.trim();
        
        if (colorValue) {
            try {
                colorPreview.style.backgroundColor = colorValue;
                // Also change all buttons to this color
                const allButtons = document.querySelectorAll('button');
                allButtons.forEach(button => {
                    if (!button.parentElement.classList.contains('todo-item')) {
                        button.style.backgroundColor = colorValue;
                    }
                });
            } catch (error) {
                alert('Invalid color format. Please try again.');
            }
        }
    });
    
    // Toggle highlight class on the h2 elements
    toggleHighlightBtn.addEventListener('click', function() {
        const headings = document.querySelectorAll('h2');
        headings.forEach(heading => {
            heading.classList.toggle('highlight');
        });
    });
    
    // 3. COUNTER ELEMENT MANIPULATION
    const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    let count = 0;
    
    incrementBtn.addEventListener('click', function() {
        count++;
        updateCounter();
    });
    
    decrementBtn.addEventListener('click', function() {
        count--;
        updateCounter();
    });
    
    resetBtn.addEventListener('click', function() {
        count = 0;
        updateCounter();
    });
    
    function updateCounter() {
        counterElement.textContent = count;
        
        // Change color based on value
        if (count > 0) {
            counterElement.style.color = 'green';
        } else if (count < 0) {
            counterElement.style.color = 'red';
        } else {
            counterElement.style.color = 'black';
        }
    }
    
    // 4. ADD/REMOVE ELEMENTS
    const todoInput = document.getElementById('todo-input');
    const addTodoBtn = document.getElementById('add-todo-btn');
    const todoList = document.getElementById('todo-list');
    
    // Function to create a new todo item
    function createTodoItem(text) {
        // Create container element
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        
        // Create text element
        const todoText = document.createElement('span');
        todoText.textContent = text;
        
        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            // Remove this todo item when delete is clicked
            todoList.removeChild(todoItem);
        });
        
        // Assemble the todo item
        todoItem.appendChild(todoText);
        todoItem.appendChild(deleteBtn);
        
        return todoItem;
    }
    
    // Add new todo when button is clicked
    addTodoBtn.addEventListener('click', function() {
        const todoText = todoInput.value.trim();
        
        if (todoText) {
            // Create and add the new todo item
            const newTodo = createTodoItem(todoText);
            todoList.appendChild(newTodo);
            
            // Clear the input field
            todoInput.value = '';
        }
    });
    
    // Also allow adding todo by pressing Enter
    todoInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTodoBtn.click();
        }
    });
});