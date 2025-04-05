function openVideo() {
    document.getElementById("videoModal").style.display = "block";
  }

  function closeVideo() {
    const modal = document.getElementById("videoModal");
    modal.style.display = "none";
    modal.querySelector("video").pause();
  }

  window.onclick = function(event) {
    const modal = document.getElementById("videoModal");
    if (event.target === modal) {
      closeVideo();
    }
  }