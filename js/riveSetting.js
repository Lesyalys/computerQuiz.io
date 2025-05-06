import {Rive} from '@rive-app/canvas';
import {addTeamInput} from './addTeamInput.js';

export function riveSet() {

    const addBtn = document.getElementById('addTeam');
    const addRive = new Rive({
        src: '/computerQuiz.io/rive/addBtn.riv',
        canvas : addBtn,
        autoplay : true,
        stateMachines: 'sm1',
        onLoad: () => {
            const input = addRive.stateMachineInputs('sm1');
            const trigger = input.find(i => i.name === 't1');

            addBtn.onclick = () => {
                trigger.fire();
                setTimeout(()=>{addTeamInput()},200)
                
            }
        }
    })



    const logoNVSU = document.getElementById('logoNVSU');
    // function getCurrentTheme(){
    //     return localStorage.getItem('theme') || 'dark';
    // }


    document.documentElement.setAttribute('data-theme',getCurrentTheme());


    const logoRive = new Rive({
        src: '/computerQuiz.io/rive/darkLight.riv',
        canvas : logoNVSU,
        autoplay : true,
        stateMachines: 'sm1',
        onLoad: () => {
            const input = logoRive.stateMachineInputs('sm1');
            const trigger1 = input.find(i => i.name === 't1');
            const trigger2 = input.find(i => i.name === 't2');

            logoNVSU.onclick = () => {
                const correntTheme = getCurrentTheme();

                if (correntTheme === 'dark'){
                    trigger1.fire();
                    document.documentElement.setAttribute('data-theme', 'light'),
                    localStorage.setItem('theme','light')
                }

                else {
                    trigger2.fire();
                    document.documentElement.setAttribute('data-theme','dark'),
                    localStorage.setItem('theme','dark')
                }
                
            }
        }
    })

}

export function getCurrentTheme(){
    return localStorage.getItem('theme') || 'light';
}
