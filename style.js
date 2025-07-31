const daysContainer = document.getElementById('days');
const monthYear = document.getElementById('monthYear');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentDate = new Date();

function renderCalendar(date) {
  daysContainer.innerHTML = '';
  
  const year = date.getFullYear();
  const month = date.getMonth();
  
  // Set month-year heading
  monthYear.textContent = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  
  // First day of the month
  const firstDay = new Date(year, month, 1).getDay();
  
  // Number of days in month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  // Add blank days before first day
  for(let i=0; i < firstDay; i++) {
    const blank = document.createElement('div');
    daysContainer.appendChild(blank);
  }
  
  // Add days
  for(let day=1; day <= daysInMonth; day++) {
    const dayDiv = document.createElement('div');
    dayDiv.textContent = day;
    
    // Highlight today
    if (
      day === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
    ) {
      dayDiv.classList.add('today');
    }
    
    daysContainer.appendChild(dayDiv);
  }
}

prevBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

// Initial render
renderCalendar(currentDate);
