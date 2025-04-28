import {state,elements} from'./const.js';
import { checkStartConditions } from "./checkStartConditions.js";
import { delTeamInput } from './delTeamInput.js';
import { startGame } from './startGame.js';
import {Rive} from '@rive-app/canvas';


export function addTeamInput() {

    const teamId = state.teams.length;
    const teamInput = document.createElement('div');
    teamInput.className = 'team-input';
    teamInput.innerHTML = `
        <label>Команда ${teamId + 1}</label>
        <div class="input-area">
            <input id="team-${teamId}" placeholder="Название команды">
            <div class="button remove" id="remove-${teamId}">
            <canvas id ="delBtn"></canvas>
            </div>
            </div>
        </div>
    `;
    const canvasRive = teamInput.querySelector(`#delBtn`);
    const rive = new Rive({
        artboard: 'pasted',
        src: "/computerQuiz.io/rive/deleteBtn.riv",
        canvas: canvasRive,
        autoplay: true,
        stateMachines: "sm1",    
        onLoad: () => {
            const input = rive.stateMachineInputs('sm1');
            const trigger = input.find(i => i.name === 'Trigger 1');
            canvasRive.addEventListener('click', () => {
                trigger.fire();
            })
        }
    });
        elements.teamsContainer.appendChild(teamInput);
        document.getElementById(`remove-${teamId}`).addEventListener('click', delTeamInput);
        
        // Добавляем пустую команду в состояние
        state.teams.push({
            id: teamId,
            name: '',
            points: 0
        });
        
        // Слушатель изменения названия команды
        document.getElementById(`team-${teamId}`).addEventListener('input', (e) => {
            const id = e.target.attributes[0].nodeValue;
            const id_num = +id.slice(id.indexOf("-")+1);
            state.teams[id_num].name = e.target.value.trim();
            checkStartConditions();
        });
        
        // Активируем кнопку "Начать игру", если есть хотя бы 2 команды
        if (state.teams.length >= 2) {
            elements.startGame.classList.remove("disabled");
            elements.startGame.addEventListener('click', startGame);
        }        


}
