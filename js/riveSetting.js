import {Rive} from '@rive-app/canvas';
import {addTeamInput} from './addTeamInput.js';

export function riveSet() {
    //delitBtn
    // const canvasRive = document.querySelector('.team-input');
    // const rive = new Rive({
    //     artboard: 'pasted',
    //     src: "../public/rive/deleteBtn.riv",
    //     canvas: canvasRive,
    //     autoplay: true,
    //     stateMachines: "sm1",    
    //     onLoad: () => {
    //         const input = rive.stateMachineInputs('sm1');
    //         const trigger = input.find(i => i.name === 'Trigger 1');
    //         canvasRive.addEventListener('click', () => {
    //             trigger.fire();
    //         })
    //     }
    // });

    //addBtn
    // const addTeam = document.getElementById('addTeam');
    const addBtn = document.getElementById('addTeam');
    const addRive = new Rive({
        src: '/computerQuiz.io/rive/addBtn.riv',
        canvas : addBtn,
        autoplay : true,
        stateMachines: 'sm1',
        onLoad: () => {
            const input = addRive.stateMachineInputs('sm1');
            const trigger = input.find(i => i.name === 't1');

            // addBtn.addEventListener('click', () => {
            //     trigger.fire();
            // })
            addBtn.onclick = () => {
                trigger.fire();
                setTimeout(()=>{addTeamInput()},200)
                
            }
        }
    })

    // const logoNVSU = document.getElementById('logoNVSU');
    // const mode = document.getElementById('mode');
    // console.log(logoNVSU, ' ',mode)
    // const logoRive = new Rive({
    //     src: '/computerQuiz.io/rive/darkLight.riv',
    //     canvas : logoNVSU,
    //     autoplay : true,
    //     stateMachines: 'sm1',
    //     onLoad: () => {
    //         const input = logoRive.stateMachineInputs('sm1');
    //         const trigger1 = input.find(i => i.name === 't1');
    //         const trigger2 = input.find(i => i.name === 't2');

    //         // addBtn.addEventListener('click', () => {
    //         //     trigger.fire();
    //         // })
    //         logoNVSU.onclick = () => {
    //             console.log('clkick')
    //             const corHref = mode.getAttribute('href');

    //             if (corHref === 'css/style.css'){
    //                 console.log(logoRive)
    //                 trigger1.fire();
    //             setTimeout(()=>{
    //                 mode.setAttribute('href','css/dark.css')},200)
                    
        
    //             }
    //             else if (corHref === 'css/dark.css'){
    //                 console.log(logoRive)
    //                 trigger2.fire();
    //             setTimeout(()=>{
    //                 mode.setAttribute('href','css/style.css')},200)
        
    //             }
                
    //         }
    //     }
    // })
    
    // console.log(rive)
}