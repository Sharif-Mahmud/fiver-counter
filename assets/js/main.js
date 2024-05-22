const fiver_order = document.getElementById("fiver_order");
const counter = document.querySelector(".counter");

fiver_order.addEventListener("submit", function(e){
  e.preventDefault();

  
  let date = this.querySelector('input[type="date"]').value;
  let time = this.querySelector('input[type="time"]').value;

  
  



  setInterval(() => {
        let startTime = new Date();
        let endTime = new Date(date + " " + time);
        let timeDeff = Math.floor(Math.abs(endTime.getTime() - startTime.getTime()));

        let totalSec = Math.floor(timeDeff / 1000);
        let totalMin = Math.floor(totalSec / 60);
        let totalHours = Math.floor(totalMin / 60);
        let totalDay = Math.floor(totalHours / 24);

        let hours = totalHours - totalDay * 24;
        let minutes = totalMin - totalDay * 24 * 60 - hours * 60;
        let seconds = totalSec - totalDay * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

        counter.innerHTML = `

          ${totalDay > 9 ? totalDay : "0" + totalDay} : ${ hours > 9 ? hours : "0" + hours } : ${minutes > 9 ? minutes : "0" + minutes} : ${seconds > 9 ? seconds : "0" + seconds }
        
        `;

  }, 1000);

  

});