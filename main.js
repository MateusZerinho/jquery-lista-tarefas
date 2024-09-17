$(document).ready(function() {
    // Evento de envio do formulário
    $('#task-form').submit(function(event) {
        event.preventDefault(); // Evita o recarregamento da página

        // Obtém o valor da tarefa
        const taskName = $('#task-name').val().trim();

        // Verifica se o campo de tarefa está vazio
        if (taskName === '') {
            alert('Digite o nome da tarefa');
            return;
        }

        // Adiciona a tarefa à lista
        $('#task-list').append(`<li>${taskName}</li>`);

        // Limpa o campo de tarefa
        $('#task-name').val('');
    });

    // Evento de clique nas tarefas para aplicar linha de "concluído"
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed'); // Alterna a classe 'completed' para aplicar o efeito
    });

    // Evento de clique no botão para limpar a lista
    $('#clear-list').click(function() {
        $('#task-list').empty(); // Remove todas as tarefas da lista
    });
});