    function login(){
  event.preventDefault(); 
    
      const usuario = document.getElementById("nome").value;
      const rm = document.getElementById("rm").value;
      const botao= document.getElementById("botao");
      const msg = document.getElementById("titulo");

      // Usuário e senha fixos
      if(usuario === "Sofia" && rm === "26582"){
        location.href= "entrada.html";
      } else {
        botao.style.color = " #61023d";
        botao.innerText = "Nome ou RM incorretos!";
      }
    }