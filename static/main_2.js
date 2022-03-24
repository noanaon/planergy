var progressBar = document.getElementById('prog');
var progressNumber = 90;



document.getElementById("flexSwitchCheckDefault1").addEventListener("click", function() {
        setInterval(function(){
            progressNumber--;
            progressBar.style.width = progressNumber + '%';
            progressBar.setAttribute('aria-valuenow', progressNumber);
            console.log(progressNumber);
            if (progressNumber==0){
                window.alert("Be careful!");
            } 
        }, 100);
    }
)







