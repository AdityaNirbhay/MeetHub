function toggleMeetingDetails() {
    var meetingDetails = document.getElementById("meetingDetails");
    var randomMeetingId = generateRandomMeetingId();
    document.getElementById("randomMeetingId").innerText = randomMeetingId;
    meetingDetails.style.display = (meetingDetails.style.display === "block") ? "none" : "block";
}

function generateRandomMeetingId() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}