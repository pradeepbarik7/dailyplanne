const planner = document.getElementById('planner');
const hours = [
  { time: "9 AM", hour: 9 },
  { time: "10 AM", hour: 10 },
  { time: "11 AM", hour: 11 },
  { time: "12 PM", hour: 12 },
  { time: "1 PM", hour: 13 },
  { time: "2 PM", hour: 14 },
  { time: "3 PM", hour: 15 },
  { time: "4 PM", hour: 16 },
  { time: "5 PM", hour: 17 },
];

const currentHour = new Date().getHours();

hours.forEach(({ time, hour }) => {
  const task = localStorage.getItem(time) || '';
  const block = document.createElement('div');
  block.className = 'time-block';

  if (hour < currentHour) block.classList.add('past');
  else if (hour === currentHour) block.classList.add('present');
  else block.classList.add('future');

  block.innerHTML = `
    <span>${time}</span>
    <input type="text" id="${time}" value="${task}">
    <button onclick="saveTask('${time}')">💾</button>
  `;

  planner.appendChild(block);
});

function saveTask(time) {
  const input = document.getElementById(time);
  localStorage.setItem(time, input.value);
}

function clearAll() {
  localStorage.clear();
  location.reload();
}
