function verify1(){
            var inp = document.getElementById("q1").value;
            var spn = document.getElementById("s1");
          
            if (inp=="wolverine"){
                spn.textContent="Correct";
            } else{
                spn.textContent="Incorrect";
            }
        }
        function verify2(){
            var inp = document.getElementById("q2").value;
            var spn = document.getElementById("s2");
          
            if (inp=="natalie rushman"){
                spn.textContent="Correct";
            } else {
                spn.textContent="Incorrect";
            }
        }
        function verify3(){
            var inp = document.getElementById("q3").value;
            var spn = document.getElementById("s3");
          
            if (inp=="what if i tell you a team is being put up?"){
                spn.textContent="Correct";
            } else {
                spn.textContent="Incorrect";
            }
        }
        function verify4(){
            var inp = document.getElementById("q4").value;
            var spn = document.getElementById("s4");
          
            if (inp=="harley"){
                spn.textContent="Correct";
            } else {
                spn.textContent="Incorrect";
            }
        }
        function verify5(){
            var inp = document.getElementsByName("q5");
           
            var spn = document.getElementById("s5");
          
            if (inp[1].checked){
                spn.textContent="Correct";
            } else {
                spn.textContent="Incorrect";
            }
        }
        function verify6(){
            var inp = document.getElementsByName("q6");
            var spn = document.getElementById("s6");
          
            if (inp[2].checked){
                spn.textContent="Correct";
            } else {
                spn.textContent="Incorrect";
            }
        }
        function verify7(){
            var inp = document.getElementById("q7").value;
            var spn = document.getElementById("s7");
            if (inp=="yes"){
                spn.textContent="Correct";
            }
            if(inp=="no"){
                spn.textContent="Incorrect";
            }
            
        }
        function verify8(){
            var inp = document.getElementById("q8").value;
            var spn = document.getElementById("s8");
          
            if (inp=="thor"){
                spn.textContent="Correct";
            } else {
                spn.textContent="Incorrect";
            }
        }
