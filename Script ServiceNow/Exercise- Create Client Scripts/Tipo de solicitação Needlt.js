/*Regra Geral do Script
Definir os valores da lista de opções de O que é necessário com base no valor do campo Tipo de Solicitação
Defina o valor Solicitado para o usuário conectado no momento
*/

//Request type - Tipo de solicitação e tem opções: Instalações(Facilities, Legal(Jurídico), Recursos Humanos(Human Resources))

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === ''){
        return;   
    }
    var whatneeded = g_form.getValue('u_what_needed');

        /*Limpe todas as opções da lista de opções de campo whatneeded(O que é necessário) */
        g_form.clearOptions('u_what_needed');
    
    //Se o valor do Campo Tipo de solicitação for hr, adicione
    
    //duas opções de hora e outra para lista de opções de campo O que é necessário  
    if(newValue == 'hr'){
g_form.addOption('u_what_needed', 'hr1', 'Human Resouces 1');

g_form.addOption('u_what_needed', 'hr2', 'Human Resouces 2');

g_form.addOption('u_what_needed', 'other', 'Other');
    }
    //Se o valor do campo Tipo de solicitação for instalações, adicione
    
    //duas opções de instalações e outra para o campo O que é necessário
    
    //Lista de escolha
    if(newValue == 'facilities'){
g_form.addOption('u_what_needed', 'facilities1', 'Facilities1');

g_form.addOption('u_what_needed', 'facilities2', 'Facilities2');

g_form.addOption('u_what_needed', 'other', 'Other');

    //Se o valor do campo Tipo de solicitação for legal, adicione
    
    //duas escolhas legais e outra para o campo O que é necessário
    
    //lista de escolha
    if(newValue == 'legal'){
g_form.addOption('u_what_needed', 'legal1', 'legal1');       

g_form.addOption('u_what_needed', 'legal2', 'legal2');

g_form.addOption('u_what_needed', 'other', 'Other');
        //Se o formulário estiver carregando e não for um novo registro, defina o valor u_what-needed para o
        //Valor de registro antes de ser carregado
        if(isLoading && !g_form.isNewRecord()){
            g_form.setValue('u_what_needed',
            whatneeded)
        }
    }
}
}
