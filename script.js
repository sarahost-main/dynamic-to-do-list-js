// S'assurer que le DOM est complètement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', () => {

    // Sélectionner les éléments DOM
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Fonction pour ajouter une tâche
    function addTask() {
        const taskText = taskInput.value.trim(); // Récupérer et nettoyer la saisie

        if (taskText === '') {
            alert('Please enter a task!'); // Vérification que l'utilisateur a saisi quelque chose
            return;
        }

        // Création de l'élément li pour la tâche
        const li = document.createElement('li');
        li.textContent = taskText;

        // Création du bouton de suppression
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // Événement pour supprimer la tâche
        removeBtn.onclick = () => {
            taskList.removeChild(li);
        };

        // Ajouter le bouton de suppression à la tâche
        li.appendChild(removeBtn);

        // Ajouter la tâche à la liste
        taskList.appendChild(li);

        // Réinitialiser le champ de saisie
        taskInput.value = '';
    }

    // Ajouter un écouteur d'événement au bouton "Add Task"
    addButton.addEventListener('click', addTask);

    // Permettre l'ajout de tâche en appuyant sur "Enter"
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
