        function adicionarTarefa() {
            const tarefaInput = document.getElementById('tarefaInput');
            const listaTarefas = document.getElementById('listaTarefas');
            const tarefaTexto = tarefaInput.value.trim();

            if (tarefaTexto !== '') {
                const li = document.createElement('li');
                li.textContent = tarefaTexto;

                const botaoRemover = document.createElement('button');
                botaoRemover.textContent = 'Remover';
                botaoRemover.onclick = function() {
                    listaTarefas.removeChild(li);
                };

                li.appendChild(botaoRemover);
                listaTarefas.appendChild(li);
                tarefaInput.value = '';
            }
        }
