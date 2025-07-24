const timeline = document.getElementById("timelineClips");

function addToTimeline(type) {
  const clip = document.createElement("div");
  clip.className = "clip";
  clip.textContent = type;
  timeline.appendChild(clip);
}
