// Add current date to index page
var currentDate = document.getElementById("currentDay");
var currentDateEl = moment().format("dddd, MMMM Do");
console.log(currentDateEl);
currentDate.append(currentDateEl);

// Add time blocks to display work hours 
var workHours = [9,10,11,12,13,14,15,16,17];
var hourBlock = document.getElementById("container"); 
hourBlock.setAttribute("class", " ");
console.log(hourBlock);

for (var i = 0; i < workHours.length; i++) {
// Create row for display of hours, description and btn
var newRow= document.createElement("div");
newRow.setAttribute( "class", "row");
hourBlock.append(newRow);

// Create column for hours
var timeEl = document.createElement("div");
timeEl.setAttribute("class", "col-md-1 hour");
timeEl.textContent = workHours[i] % 13 + parseInt(workHours[i]/13);
if (i  < 3) {
    timeEl.append(" AM");
}
else {
    timeEl.append(" PM"); 
}
newRow.append(timeEl);

// Create input row
var taskDes = document.createElement("textarea");
taskDes.setAttribute("id","box "+ workHours[i], "class", "col-md-10 description", "row", "2");
newRow.append(taskDes);

// check if textarea has data saved in local storage
var taskTitle = localStorage.getItem("box "+ workHours[i]);
console.log(taskTitle);
if (taskTitle !== null) {
    taskDes.innerText = taskTitle;
}

// Assign correct color for time slot
var currentTime = moment().format("HH");
console.log(currentTime);
if (currentTime == workHours[i]) {
    taskDes.setAttribute("class", "present col-6 time-block");
}
if (currentTime < workHours[i]) {
    taskDes.setAttribute("class", "future col-6 time-block");
}
if (currentTime > workHours[i]) {
    taskDes.setAttribute("class", "past col-6 time-block");
}

// Create save btn
var saveBtn = document.createElement("button");
saveBtn.setAttribute("class","saveBtn col-1");
saveBtn.textContent = "Save";
newRow.append(saveBtn);
// User clicks button to save description 
// Function for saving data to local storage
function saveValue (event){
    // get value from input box
    var currentTask = event.currentTarget.previousElementSibling.id;
    console.log(currentTask);
    var task = event.currentTarget.previousElementSibling.value;
    console.log(task);
    localStorage.setItem(currentTask, task);
    }

saveBtn.onclick = saveValue;
}
