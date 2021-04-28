//
//Enviar notificações para o gerente de usuário
//

function get5RecentRecords() {

    var list = [];
    var task = new GlideRecord('task');

    task.addQuery('active', true);
    task.orderByDesc('sys_update_on');
    task.setLimit(5)
    task.query();


    while (task.next()){

        list.push(task);

    }

    return list;

}