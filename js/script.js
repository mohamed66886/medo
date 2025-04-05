window.addEventListener('load', function() {
    setTimeout(function() {
      document.getElementById('loader').style.display = 'none';
    }, 2000); // يمكنك تغيير المدة حسب احتياجك
  });

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