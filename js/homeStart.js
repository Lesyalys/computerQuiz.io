import {addTeamInput} from './addTeamInput.js';
import { showCorrectAnswer } from './showCorrectAnswer.js';
import { addPointsToTeam } from './addPointsToTeam.js';
import { resetGame } from './resetGame.js';
import { closeModal } from './closeModal.js';
import {state,elements} from'./const.js';
import { riveSet } from './riveSetting.js';
// import { darckShem } from './darckShem.js';
// import { riveSet } from './riveSetting.js';


function init() {
    // Добавляем первое поле для команды по умолчанию
    document.body.classList.toggle('theme');
    riveSet();
    addTeamInput();
    
    // Слушатели событий
    // elements.addTeam.addEventListener('click', riveSet);
    elements.showAnswer.addEventListener('click', showCorrectAnswer);
    elements.addPoints.addEventListener('click', addPointsToTeam);
    elements.closeModal.addEventListener('click', closeModal);
    elements.restartGame.addEventListener('click',resetGame);
    // elements.darckShem.addEventListener('click',darckShem);
}



elements.closeModal.addEventListener('click', () => {
    state.questionClosedManually = true;
    closeModal();
});

window.onload = init;