var start = new Date().getTime(); 
        function getRandomColor() { 
          
          var letters = '0123456789ABCDEF'.split(''); //taken from stakoverflow
          var color = '#';
          for (var i = 0; i < 6; i++ ){
            color += letters[Math.floor(Math.random() * 16)];
          }
          
          return color;
          
        }
      
      function makeShapeAppear() {
        var top = Math.random() * 400; 
        var left = Math.random() * 400;
        var width = (Math.random() * 200) + 100; //giving minimum width so the object is always visible
        if (Math.random() > 0.5) {
          document.getElementById("shape").style.borderRadius = "50%"; //make object appear as a circle 50% of time
        } else {
          document.getElementById("shape").style.borderRadius = "0%"; //make object appear as a square 50% of time
        }
        document.getElementById("shape").style.backgroundColor = getRandomColor(); //random color each time
        document.getElementById("shape").style.width = width + "px";
        document.getElementById("shape").style.height = width + "px";
        document.getElementById("shape").style.top = top + "px";
        document.getElementById("shape").style.left = left + "px";
        document.getElementById("shape").style.display = "block"; 
        start = new Date().getTime(); //time is measured when shape appears
      }
      function appearAfterDelay() { 
        setTimeout(makeShapeAppear, Math.random() * 2000); //up to two seconds
      }
      appearAfterDelay();
      document.getElementById("shape").onclick = function() {
        document.getElementById("shape").style.display = "none"; //make the shape disappear upon clicking
        var end = new Date().getTime(); //time is first measured when page is loaded
        var timeTaken = (end - start) / 1000;
        document.getElementById("timeTaken").innerHTML = timeTaken + "s"; //to make it clear the time displayed is in seconds
        appearAfterDelay();
      }