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
timeEl.setAttribute("class", "col-1");
timeEl.textContent = workHours[i] % 12;
if (i  < 3) {
    timeEl.append(" AM");
}
else {
    timeEl.append(" PM"); 
}
newRow.append(timeEl);

// Create input row
var taskDes = document.createElement("input");
taskDes.setAttribute("id","box "+ workHours[i]);
taskDes.textContent = "";
newRow.append(taskDes);

// Assign correct color for time slot
var currentTime = moment().format("HH");
console.log(currentTime);
if (currentTime == workHours[i]) {
    taskDes.setAttribute("class", "present col-6 description");
}
if (currentTime < workHours[i]) {
    taskDes.setAttribute("class", "future col-6 description");
}
if (currentTime > workHours[i]) {
    taskDes.setAttribute("class", "past col-6 description");
}

// Create save btn
var saveBtn = document.createElement("button");
saveBtn.setAttribute("class","saveBtn col-1");
saveBtn.textContent = "Save";
newRow.append(saveBtn);
}

// Function to get data from local storage
function saveValue (event){
    event.preventDefault();
    document.getElementById("saveBtn ").click();

}
// Function for saving data to local storage

// Function to evaluate hours for prs, current and future

// User clicks button to save description 
saveBtn.onclick = saveValue;