let accessKey = "";
let plan = "Free";

function validateKey() {
  accessKey = document.getElementById('accessKeyInput').value;
  if(accessKey) {
    document.getElementById('loginScreen').style.display = "none";
    document.getElementById('planScreen').style.display = "block";
  }
}

function closePlanScreen() {
  document.getElementById('planScreen').style.display = "none";
  document.getElementById('mainUI').style.display = "block";
  document.getElementById('planTag').innerText = "Plan: " + plan;
  loadSignal("btc_signal.json");
}

function loadSignal(file) {
  fetch(file)
    .then(res => res.json())
    .then(data => {
      document.getElementById('signal').innerText = data.signal;
      document.getElementById('confidenceTag').innerText = "Confidence: " + data.confidence;
      document.getElementById('marketSentiment').innerText = "Market Sentiment: " + data.sentiment;
      document.getElementById('signalInsightPopup').innerText = data.reason;
    });
}

function showInsight() {
  let popup = document.getElementById("signalInsightPopup");
  popup.style.display = popup.style.display === "block" ? "none" : "block";
}