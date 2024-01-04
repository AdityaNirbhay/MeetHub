document.querySelector(".generate-meet").addEventListener("click", function(){
    document.body.classList.add("active-popup");
});

document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.body.classList.remove("active-popup");
});

function toggleMeetingDetails() {
    var meetingDetails = document.querySelector(".meeting-details");
    var randomMeetingId = generateRandomMeetingId();
    document.querySelector("#randomMeetingId").innerText = randomMeetingId;
    meetingDetails.classList.toggle("hidden");
}

function generateRandomMeetingId() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}

function joinMeeting() {
    // Implement join meeting functionality
    console.log("Joining meeting...");
}