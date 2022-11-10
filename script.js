

function login(){
  const userCorreto ="jean";
  const passwordCorreto = "123";



  const user = document.getElementById("user");//
  const password = document.getElementById("password");
  
  if (user.value === "" || password.value === "" ){
    return alert ("Por favor preencha os campos!");// Validação de usuario e senha preenchidos
  }

  if(user.value !== userCorreto || password.value !== passwordCorreto){
    return alert ("Email ou senha incorretos!")//Validação de usuario e senha corretos.
  }
  return alert("Bem vindo (a) : " + user.value);//alerta para apresentar que tanto o usuario quanto a senha digitada é correta

};
