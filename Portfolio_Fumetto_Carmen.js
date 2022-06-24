var modal = document.getElementById("myModal");

        var img = document.getElementById("myImg");
        var modalImg = document.getElementById("img01");
       
        function mostraImmagine(imageName) {
          modal.style.display = "block";
          modalImg.src = "Immagini/" + imageName;
          }

        var span = document.getElementsByClassName("close")[0];

        span.onclick = function () {
          modal.style.display = "none";
        };