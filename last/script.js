let schedules = [];

function createSchedule() {
    let className = document.getElementById('class-name').value;
    let startTime = document.getElementById('start-time').value;
    let endTime = document.getElementById('end-time').value;

    let schedule = { className, startTime, endTime };
    schedules.push(schedule);

    displaySchedules();
}

function displaySchedules() {
    let scheduleList = document.getElementById('schedule-list');
    scheduleList.innerHTML = '';
    schedules.forEach((schedule, index) => {
        let scheduleItem = document.createElement('div');
        scheduleItem.classList.add('schedule-item');
        scheduleItem.innerHTML = `
            <p><strong>Class Name:</strong> ${schedule.className}</p>
            <p><strong>Start Time:</strong> ${schedule.startTime}</p>
            <p><strong>End Time:</strong> ${schedule.endTime}</p>
        `;
        scheduleList.appendChild(scheduleItem);
    });
}
