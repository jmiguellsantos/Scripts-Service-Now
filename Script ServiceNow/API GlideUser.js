//A GlideUser tem propriedades e métodos para:
//É obervado aqui, que a validação do lado do cliente em qualquer aplicativo da web é facilmente contornada.

/* 
-Recuperar o usuário
-Determinar se um usuário tem uma função específica atribuída*/

//acessada por meio do objeto g_user<metodo ou o nome da propriedade>

alert("g_user.firstBane = " + g_user.firstname 
+ ", \n g_user.lastname = " + g_user.lastname
+ ", \n g_user.username = " + g_user.userName
+ ", \n g_user.userID = " + g_userID); //retorna informações do usuário mostrando a diferença entre os valores das propriedades firstName, lasName, userName e userID.


//cada  registro tem um sys_id exclusivo de 32 caracteres.


g_user.hasRole('client_script_admin'); //Verifica se o usuário atualmente conectado tem a capacidade de criar e editar scripts de cliente (função client_script_admin)
//Não apenas vai retornar se o usuário possui a função específica, mas também vai retornar se o usuário possui a função de administrador


g_user.hasRoleExactly('client_script_admin');
//Testando se o usuário conectado no momento tem função explicitamente atribuida.

