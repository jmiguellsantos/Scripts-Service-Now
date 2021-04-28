//A função onChange recebe de forma automática 5 parâmetros do ServiceNow. Embora que o usuário não faça nada pra passar os parâmetros, podemos usar ele no Script.
//Quando um usuário alterar o valor do campo Short Description, a lógica do OnChange é executado

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }
    
    //Gere um alerta mostrando oldValue e newValue

    alert("Você alterou a Short Description de" + oldValue + "para" + newValue + ".");
    

}