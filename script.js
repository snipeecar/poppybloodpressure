function submit() {
    var systolic = document.getElementById("systolic").value;
    var diastolic = document.getElementById("diastolic").value;

    if (systolic && diastolic) {
        var reading = "Systolic: " + systolic + " mmHg, Diastolic: " + diastolic + " mmHg";
        
        var listItem = document.createElement("li");
        listItem.textContent = reading;

        // Add CSS class based on blood pressure status
        var status = getBloodPressureStatus(systolic, diastolic);
        listItem.classList.add(status);

        var readingsList = document.getElementById("readings-list");
        readingsList.appendChild(listItem);
    }

    document.getElementById("systolic").value = "";
    document.getElementById("diastolic").value = "";
}

function getBloodPressureStatus(systolic, diastolic) {
    // Define the normal blood pressure range
    var systolicMin = 90;
    var systolicMax = 120;
    var diastolicMin = 60;
    var diastolicMax = 80;

    // Check if both systolic and diastolic readings are within the normal range
    if (systolic >= systolicMin && systolic <= systolicMax && diastolic >= diastolicMin && diastolic <= diastolicMax) {
        return "normal-reading";
    } else {
        return "abnormal-reading";
    }

}
