body {
  font-family: Arial, sans-serif;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #f0f0f0;
  margin: 0;
}

.calendar {
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  width: 350px;
  padding: 20px;
  text-align: center;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.header button {
  background: #3498db;
  border: none;
  color: white;
  font-size: 18px;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.header button:hover {
  background: #2980b9;
}

#monthYear {
  font-size: 20px;
  font-weight: bold;
}

.weekdays, .days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}

.weekdays div {
  font-weight: bold;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}

.days div {
  padding: 10px 0;
  border-radius: 50%;
  cursor: default;
}

.days div:hover {
  background: #3498db;
  color: white;
}

.today {
  background: #e74c3c;
  color: white;
  font-weight: bold;
}
