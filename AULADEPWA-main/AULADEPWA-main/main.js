    function login(){
  event.preventDefault(); 
    
      const usuario = document.getElementById("nome").value;
      const rm = document.getElementById("rm").value;
      const botao = document.getElementById("botao");

      // Usuário e senha fixos
      if(usuario === "Sofia" && rm === "26582"){
        botao.style.color = "green";
        botao.innerText = "Login realizado com sucesso!";
      } else {
        botao.style.color = "red";
        botao.innerText = "Usuário ou senha incorretos!";
      }
    }