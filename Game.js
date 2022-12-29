AFRAME.registerComponent("game-play", {
    schema: {
      elementId: { type: "string", default: "#coin1" },      
    },
    
    update: function() {
      this.isCollided(this.data.elementId);
    },
  
    isCollided: function(elementId) {
      const element = document.querySelector(elementId);
      element.addEventListener("collide", e => {
        if (elementId.includes("#coin")) {          
          console.log("coin collision");
          
        }
        else if(elementId.includes("#fish")){
          console.log("fish collision");
        }         
      });
    },

    startTimer: function (duration, timerEl) {
      var minutes;
      var seconds;
  
      setInterval(()=> {
        if (duration >=0) {
          minutes = parseInt(duration / 60);
          seconds = parseInt(duration % 60);
  
          if (minutes < 10) {
            minutes = "0" + minutes;
          }
          if (seconds < 10) {
            seconds = "0" + seconds;
          }
  
          timerEl.setAttribute("text", {
            value: minutes + ":" + seconds,
          });
  
          duration -= 1;
        } 
        else {
          this.gameOver();        
        }
      },1000)
    },
    isCollided: function (elemntId) {
      var element = document.querySelector(elemntId);
      element.addEventListener("collide", (e) => {
        if (elemntId.includes("#treasure")) {
          element.setAttribute("visible", false);
          this.updateScore();
          this.updateTargets();
        } 
        else {
          this.gameOver();
        }
      });
    },
    updateTargets: function () {
      var element = document.querySelector("#treasure");
      var count = element.getAttribute("text").value;
      var currentTargets = parseInt(count);
      currentTargets -= 1;
      element.setAttribute("text", {
        value: currentTargets,
      });
    },
    updateScore: function () {
      var element = document.querySelector("#score");
      var count = element.getAttribute("text").value;
      var currentScore = parseInt(count);
      currentScore += 50;
      element.setAttribute("text", {
        value: currentScore,
      });
    },
    gameOver: function () {
      var planeEl = document.querySelector("#scuba_driver");
      var element = document.querySelector("#game_over_text");
      element.setAttribute("visible", true);
      planeEl.setAttribute("dynamic-body", {
        mass: 1
      });
    },
  
    
  });
  