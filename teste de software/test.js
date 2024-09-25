describe('Lista de Tarefas', function() {
    let taskInput, addTaskButton, taskList;

    beforeEach(function() {
        document.body.innerHTML = `
            <input type="text" id="task-input" placeholder="Digite uma tarefa">
            <button id="add-task">Adicionar Tarefa</button>
            <ul id="task-list"></ul>
        `;
        taskInput = document.getElementById('task-input');
        addTaskButton = document.getElementById('add-task');
        taskList = document.getElementById('task-list');

        // Carregar o script.js
        const script = document.createElement('script');
        script.src = 'script.js';
        document.head.appendChild(script);
    });

    it('deve adicionar uma tarefa à lista', function() {
        taskInput.value = 'Nova Tarefa';
        addTaskButton.click();

        expect(taskList.children.length).toBe(1);
        expect(taskList.children[0].textContent).toContain('Nova Tarefa');
    });

    it('deve remover uma tarefa da lista', function() {
        taskInput.value = 'Tarefa a remover';
        addTaskButton.click();
        const removeButton = taskList.children[0].querySelector('button');
        removeButton.click();

        expect(taskList.children.length).toBe(0);
    });
});
