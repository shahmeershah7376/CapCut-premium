const canvas = document.getElementById("editorCanvas");

function makeDraggable(el) {
  let isDragging = false;
  let offsetX, offsetY;

  el.addEventListener("mousedown", function (e) {
    isDragging = true;
    offsetX = e.clientX - el.offsetLeft;
    offsetY = e.clientY - el.offsetTop;
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      el.style.left = e.clientX - offsetX + "px";
      el.style.top = e.clientY - offsetY + "px";
    }
  });

  document.addEventListener("mouseup", () => (isDragging = false));
}

// Add Text
document.getElementById("addTextBtn").addEventListener("click", () => {
  const text = prompt("Enter text:");
  if (text) {
    const div = document.createElement("div");
    div.textContent = text;
    div.className = "draggable";
    div.style.left = "20px";
    div.style.top = "20px";
    div.style.color = "#000";
    canvas.appendChild(div);
    makeDraggable(div);
    addToTimeline("Text");
  }
});

// Add Image
document.getElementById("addImageBtn").addEventListener("click", () => {
  document.getElementById("imageInput").click();
});

document.getElementById("imageInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = (event) => {
    const img = document.createElement("img");
    img.src = event.target.result;
    img.className = "draggable";
    img.style.maxWidth = "150px";
    img.style.left = "30px";
    img.style.top = "30px";
    canvas.appendChild(img);
    makeDraggable(img);
    addToTimeline("Image");
  };
  reader.readAsDataURL(file);
});

// Add Video
document.getElementById("addVideoBtn").addEventListener("click", () => {
  document.getElementById("videoInput").click();
});

document.getElementById("videoInput").addEventListener("change", (e) => {
  const file = e.target.files[0];
  const videoURL = URL.createObjectURL(file);
  const video = document.createElement("video");
  video.src = videoURL;
  video.controls = true;
  video.className = "draggable";
  video.style.maxWidth = "200px";
  video.style.left = "40px";
  video.style.top = "40px";
  canvas.appendChild(video);
  makeDraggable(video);
  addToTimeline("Video");
});
