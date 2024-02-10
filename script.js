const tasks = [{
        name: "Dentist Appointment",
        description: "My yearly dental hygiene control at 3pm on Monday",


        priority: 3
    },
    {
        name: "Date Night",
        description: "Taking Patricia out on a date on Tuesday evening",
        priority: 4
    },

    {
        name: "Workout Section",
        description: "An hour at the gym; 3x a week  MON-THURS-SAT",
        priority: 2
    },

    {
        name: "Childcare",
        description: "Best day of my week ,spending time with m daughter SATURDAYS",
        priority: 5
    },

    {
        name: "Planning & Plotting",
        description: "Daily routine at 6 am .thinking and writing down notes on what to do ",
        priority: 3
    },

    {
        name: "Meditation Time",
        description: "4am-5am daily morning routine to spend time with myself and my maker",
        priority: 5
    },

    {
        name: "BootCamp",
        description: "Mondays to Thursdas, from 9am-4pm at the Code factory institute",
        priority: 5
    },

    {
        name: "Breakfast",
        description: "Daily routine in the morning from 7am-8am at Strock/Anker/Portobello",
        priority: 0
    },
    {
        name: "Football TIME",
        description: "Sunday evening routine for 6pm to 8pm at Donaustadt sports center",
        priority: 1
    },
];


function createTaskCard(task) {
    const card = document.createElement("div");
    card.classList.add("card", "mb-3");
    card.style.width = "18rem";

    card.innerHTML = `
        <img src="./images/hero.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${task.name}</h5>
            <p class="card-text">${task.description}</p>
            <p class="badge bg-${getPriorityColorClass(task.priority)}">${task.priority}</p>
            <button class="btn btn-primary" onclick="increasePriority(${tasks.indexOf(task)})">PRIORITY</button>
        </div>
    `;


    return card;
}

// Function to render tasks
function renderTasks() {
    const taskContainer = document.getElementById("duty");
    taskContainer.innerHTML = "";

    tasks.forEach(task => {
        const taskCard = createTaskCard(task);
        taskContainer.appendChild(taskCard);
    });
}

// Function to get Bootstrap color class based on priority
function getPriorityColorClass(priority) {
    if (priority <= 1) {
        return "success";
    } else if (priority <= 3) {
        return "warning";
    } else {
        return "danger";
    }
}

// Function to increase priority
function increasePriority(index) {
    if (tasks[index].priority < 5) {
        tasks[index].priority++;
    }
    renderTasks();
}


function sortTasks() {
    tasks.sort((a, b) => a.priority - b.priority);
    renderTasks();
}

renderTasks();


/*IMPORTANCE is use to replace the word PRIORITZ on the page*/