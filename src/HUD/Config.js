import { store } from '../index'

export default function getPrompts() {

    let storeState = store.getState()
    let playerName = storeState.addPlayerName
    let playerWeapon = storeState.addStartingEquipment[0]
    let diceResult = storeState.diceResult
    // console.log(storeState)

    //example of making prompts more complex, won't do more for project week
    const prompt8and9AttackResponse = () => {
        if (diceResult === 6) {
            let response = {
                text: "You defeat the inspectors without a scratch.",
                optionValues: []
            }
            return response
        } else if (diceResult === 4 || diceResult === 5) {
            let response = { 
                text: "You are able to defeat the inspectors, but take some damage during the exchange.",
                optionValues: ["hocus pocus"]
            }
            return response
        } else {
            if (storeState.addStartingEquipment.includes("Medkit")) {
                let optionValue1 = "Use your medkit to heal yourself"
                let optionValue2 = ""
                let response = {
                    text: "You just barely defeat the inspectors, and take heavy damage during the exchange.",
                    optionValues: [optionValue1, ]
                }
                return response 
            } else {
                let optionValue1 = "Find somewhere to rest up"
                let response = {
                    text: "You just barely defeat the inspectors, and take heavy damage during the exchange.",
                    optionValues: [optionValue1, ]
                }
                return response 
            }
            
        }
    }

    let prompts =
        [
        {
            promptNumber: 1,
            promptEpisode: "Episode 1: Enter the Nautilus",
            promptTitle: "Welcome to the Nautilus",
            promptText: `Welcome to the Nautilus ${playerName}, the name is Nines and I'll be your pilot. We are a bit short on time so you'll meet the rest of the crew later.\n We need to make this delivery quick fast and in a hurry. We are smuggling a scientist by the name of GreeGree to the Iota Sector. He needs it kept quiet so we need to get through the Jump Gate station without any hiccups, ya hear?\n Pick which part of the ship you want to be in for the journey.`,
            promptOptions: [
                {value: "Engine Room",
                    nextPrompt: 2,
                    type: "default"
                },
                {value: "Helm",
                    nextPrompt: 3,
                    type: "default"   
                },
                {value: "Cargo Bay",
                    nextPrompt: 4,
                    type: "default"
                },
                {value: "Crew Lounge",
                    nextPrompt: 5,
                    type: "default"
                }
            ]
        },
        {
            promptNumber: 2,
            promptEpisode: "Episode 1: Enter the Nautilus",
            promptTitle: "Engine Room",
            promptText: `You get down to the engine room and see a man meditating in the door way. His eyes open when you draw near, and a kind smile comes across his face.\n He says 'Ah you must be ${playerName}'. I'm Master Gedi Chobani, the ships mystic. The captain sent me down here to keep an eye on the engine room while we try to pass through the Jump Gate.\n You're welcome to join me if you'd like.`,
            promptOptions: [
                {value: "Join the Gedi Master",
                    nextPrompt: 6,
                    type: "default"
                },
                {value: "Try to work on something in the engine room",
                    nextPrompt: 7,
                    type: "default"   
                }
            ]
        },
        {
            promptNumber: 6,
            promptEpisode: "Episode 1: Enter the Nautilus",
            promptTitle: "Join the meditation",
            promptText: "You take a seat on the ground next to the Gedi Master and find it easy to slip into a meditative state in his presence.\n Stirred awake by a sudden noise, you hear a voice come over the intercoms. 'This is Nines, they aren't going to let us through the check point without inspecting the ship. Prepare to be boarded'.\n The Gedi tells you to relax and continue to meditate.",
            promptOptions: [
                {value: "Continue to meditate",
                    nextPrompt: 8,
                    type: "default"
                },
                {value: "Try to work on something in the engine room",
                    nextPrompt: 9,
                    type: "default"  
                }
            ]
        },
        {
            promptNumber: 7,
            promptEpisode: "Episode 1: Enter the Nautilus",
            promptTitle: "Look busy around the engine room",
            promptText: "You begin to do work around the engine room when you hear the intercoms engage.\n 'This is Nines, they aren't going to let us through the checkout point without checking the ship. Everyone relax and continue doing what you're doing. Prepare to be boarded.'",
            promptOptions: [
                {value: "Continue working",
                    nextPrompt: 9,
                    type: "default"
                },
                {value: "Join the Gedi in meditation",
                    nextPrompt: 8,
                    type: "default"  
                }
            ]
        },
        {
            promptNumber: 8,
            promptEpisode: "Episode 1: Enter the Nautilus",
            promptTitle: "meditating upon guard arrival",
            promptText: "From down the hall you hear footsteps approaching. You continue meditating as you hear them stop just shy of the engine room door. You can hear Nines and an unfamiliar voice.\n Nines: 'Look I would love to keep showing you boys around but as you can see our Gedi and his apprentice have picked the engine room to meditate and I would hate to interrupt them.\n Inspector: With hesitation in his voice, 'Look I don't want to be a pain but regulations are regulations.\n Vapor: 'Oh boy, this is going to be good.\n",
            promptOptions: [
                {value: `Pull out your ${playerWeapon}, and attack the inspectors`,
                    nextPrompt: 10,
                    type: "attack"
                },
                {value: "Hope the ruse holds",
                    nextPrompt: 11,
                    type: "default" 
                }
            ]
        },
        {
            promptNumber: 9,
            promptEpisode: "Episode 1: Enter the Nautilus",
            promptTitle: "looking busy in engine room upon guard arrival",
            promptText: "From down the hall you hear footsteps approaching. You continue working as you hear them stop just shy of the engine room door. You can hear Nines and an unfamiliar voice.\n Nines: 'Look I would love to keep showing you boys around but as you can see our Gedi has picked the engine room to meditate and I would hate to interrupt him.\n Guard: With hesitation in his voice, 'Look I don't want to be a pain but regulations are regulations.\n Vapor: 'Oh boy, this is going to be good.\n",
            promptOptions: [
                {value: `Pull out your ${playerWeapon}, and attack the inspectors`,
                    nextPrompt: 10,
                    type: "attack"
                },
                {value: "Hope the ruse holds",
                    nextPrompt: 11 
                }
            ]
        },
        {
            promptNumber: 10,
            promptEpisode: "Episode 1: Enter the Nautilus",
            promptTitle: "attack the guards",
            promptText: `You don't trust that the ruse will work, so you pull out your ${playerWeapon} and start attacking the guards.\n ${prompt8and9AttackResponse().text}`,
            promptOptions: [
                {value: `${prompt8and9AttackResponse().optionValues[0]}`,
                    nextPrompt: 12,
                    type: ""
                },
                {value: "",
                    nextPrompt: 13,
                    type: "" 
                }
            ]
        },
        { 
            promptNumber: 11,
            promptEpisode: "Episode 1: Enter the Nautilus",
            promptTitle: "stay calm and continue the ruse",
            promptText: "You continue what you're doing waiting for a reply from the inspectors.\n Inspector: 'What do you mean this is going to be good?'\n Vapor: 'Ah, you must not spend a lot of time around Gedi's. Don't you know they are religious fanatics. The last guy who interrupted his meditation, well let's just say he's not doing much interrupting these days'.",
            promptOptions: [
                {value: "",
                    nextPrompt: 10,
                    type: ""
                },
                {value: "",
                    nextPrompt: 11,
                    type: "" 
                }
            ]
        },
        { 
            promptNumber: 12,
            promptEpisode: "Episode 1: Enter the Nautilus",
            promptTitle: "",
            promptText: "nailed it",
            promptOptions: [
                {value: "",
                    nextPrompt: 10,
                    type: ""
                },
                {value: "",
                    nextPrompt: 11,
                    type: "" 
                }
            ]
        }
    ]

    return prompts
}



