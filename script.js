// График выручки
const ctx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Weekly Revenue ($)',
            data: [500, 1000, 1500, 2000, 2500, 3000, 3500],
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderColor: '#fff',
            borderWidth: 2,
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: {
                    color: '#fff'
                }
            },
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: {
                    color: '#fff'
                }
            }
        }
    }
});

// Модальное окно с клиентами
function openModal() {
    document.getElementById('clientModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('clientModal').style.display = 'none';
}

// Добавление новой задачи
function addTask() {
    const taskText = document.getElementById('newTask').value;
    if (taskText.trim() !== '') {
        const taskList = document.getElementById('taskList');
        const newTask = document.createElement('li');
        newTask.innerHTML = `${taskText} <span class="task-status status-in-progress" onclick="changeTaskStatus(this)">progress</span>`;
        taskList.appendChild(newTask);
        document.getElementById('newTask').value = '';
    }
}

// Изменение статуса задачи
function changeTaskStatus(element) {
    if (element.classList.contains('status-in-progress')) {
        element.classList.remove('status-in-progress');
        element.classList.add('status-completed');
        element.textContent = 'Completed';
    } else if (element.classList.contains('status-completed')) {
        element.classList.remove('status-completed');
        element.classList.add('status-upcoming');
        element.textContent = 'Upcoming';
    } else if (element.classList.contains('status-upcoming')) {
        element.classList.remove('status-upcoming');
        element.classList.add('status-in-progress');
        element.textContent = 'In progress';
    }
}
