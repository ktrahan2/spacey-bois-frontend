import { store } from '../../index'

export default function getPrompts() {

    let storeState = store.getState()
    let playerName = storeState.addPlayerName
    let playerWeapon = storeState.addStartingEquipment[0]
    let diceResult = store.diceResult
    // console.log(storeState)

    //example of making prompts more complex, won't do more than one for project week
    const prompt8and9AttackResponse = () => {
        if (diceResult === 6) {
            let optionValue1 = "Move the bodies"
            let optionValue2 = "Help Grips"
            if (playerWeapon === "Blaster" || playerWeapon === "Krieger Blaster Pistol") {
                let text = `You fire off a few precision rounds silencing the inspectors before they even move."\n Vapor: 'Wow check out the itchy finger on ${playerName}. I knew there was something about them I liked.'\n Nines: 'We need to get out of here before the station realizes what happened and closes the Jump Gate.\n ${playerName} can you put these bodies back on the Malklaith shuttle or help Grips clean up the Science Bay.'`
                let response = {
                    text: text,
                    optionValues: [optionValue1, optionValue2],
                    nextPrompt: [12, 13]
                }
                return response
            } else if (playerWeapon === "Psyblade") {
                let text = `You reveal your Psyblade and cut through the inspectors before they can even let out a sound."\n Vapor: 'Wow check out the itchy finger on ${playerName}. I knew there was something about them I liked.'\n Nines: 'We need to get out of here before the station realizes what happened and closes the Jump Gate.'\n ${playerName} can you put these bodies back on the Malklaith shuttle or help Grips clean up the Science Bay.'`
                let response = {
                    text: text,
                    optionValues: [optionValue1, optionValue2],
                    nextPrompt: [12, 13]
                }
                return response
            }
        } else if (diceResult === 4 || diceResult === 5) {
            let optionValue1 = "Move the bodies"
            let optionValue2 = "Help Grips"
            if (playerWeapon === "Blaster" || playerWeapon === "Krieger Blaster Pistol") {
                let text = `Firing, you hit all but one of them before they can return fire.\n Your leg ignites with a fiery burst of pain.\n Vapor: 'Wow check out the itchy finger on ${playerName}. Better luck next time.'\n Nines: 'We need to get out of here before the station realizes what happened and closes the Jump Gate.'\n ${playerName} can you put these bodies back on the Malklaith shuttle or help Grips clean up the Science Bay.'`
                let response = {
                    text: text,
                    optionValues: [optionValue1, optionValue2],
                    nextPrompt: [12, 13]
                }
                return response
            } else if (playerWeapon === "Psyblade") {
                let text = `You charge the inspectors, able to cut down all but one before he gets a shot off.\n Your leg ignites with a fiery burst of pain.\n Vapor: 'Wow check out the itchy finger on ${playerName}. Better luck next time.'\n Nines: 'We need to get out of here before the station realizes what happened and closes the Jump Gate.'\n ${playerName} can you put these bodies back on the Malklaith shuttle or help Grips clean up the Science Bay.'`
                let response = {
                    text: text,
                    optionValues: [optionValue1, optionValue2],
                    nextPrompt: [12, 13]
                }
                return response
            }
        } else {
            let optionValue1 = "Get carried to the Medical Bay"
            let optionValue2 = "Shrug it off and try to take yourself"
            if (playerWeapon === "Blaster" || playerWeapon === "Krieger Blaster Pistol") {
                let text = `The inspectors react just after your first shot and begin to return fire. You feel a burst of pain ignite through your body. As you slump to the ground you see your hands and stomach are covered in blood.\n The rest of your crew is able to finish off the remaining inspectors.\n Nines: This is all f*ucked, we need to get out of here. Vapor take ${playerName} up to the medical bay and prepare for a bumpy ride.`
                let response = {
                    text: text,
                    optionValues: [optionValue1, optionValue2],
                    nextPrompt: [14, 14]
                }
                return response
            } else if (playerWeapon === "Psyblade") {
                let text = `The inspectors react just as you cut the first one down and begin to return fire. You feel a burst of pain ignite through your body. As you slump to the ground you see your hands and stomach are covered in blood.\n The rest of your crew is able to finish off the remaining inspectors.\n Nines: This is all f*ucked, we need to get out of here. Vapor take ${playerName} up to the medical bay and prepare for a bumpy ride.`
                let response = {
                    text: text,
                    optionValues: [optionValue1, optionValue2],
                    nextPrompt: [14, 14]
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
            promptText: `Welcome to the Nautilus ${playerName}, the name is Nines and I'll be your pilot. We are a bit short on time so you'll meet the rest of the crew later.\n We need to make this delivery quick fast and in a hurry. We are smuggling a scientist by the name of GreeGree to the Iota Sector. He needs it kept quiet so we need to get through the Jump Gate station without any hiccups, ya hear?\n 'Head down to the engine room to help out Chobani.'`,
            promptOptions: [
                {value: "Engine Room",
                    nextPrompt: 2,
                    type: "default"
                },
                
                //future potential starter options
                // {value: "Helm",
                //     nextPrompt: 3,
                //     type: "default"   
                // },
                // {value: "Cargo Bay",
                //     nextPrompt: 4,
                //     type: "default"
                // },
                // {value: "Crew Lounge",
                //     nextPrompt: 5,
                //     type: "default"
                // }
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
            promptText: "From down the hall you hear footsteps approaching. They stop just shy of the engine room door. You can hear Nines and an unfamiliar voice.\n Nines: 'Look I would love to keep showing you boys around but as you can see our Gedi and his apprentice have picked the engine room to meditate and I would hate to interrupt them.\n The inspector lets out a loud sigh, 'Look I don't want to be a pain but regulations are regulations.\n Vapor: 'Oh boy, this is going to be good.\n",
            promptOptions: [
                {value: `Pull out your ${playerWeapon}, and attack the inspectors`,
                    nextPrompt: 10,
                    type: "attack"
                },
                {value: "Maintain the ruse",
                    nextPrompt: 11,
                    type: "default" 
                }
            ]
        },
        {
            promptNumber: 9,
            promptEpisode: "Episode 1: Enter the Nautilus",
            promptTitle: "looking busy in engine room upon guard arrival",
            promptText: "From down the hall you hear footsteps approaching. You continue working as you hear them stop just shy of the engine room door. You can hear Nines and an unfamiliar voice.\n Nines: 'Look I would love to keep showing you boys around but as you can see our Gedi has picked the engine room to meditate and I would hate to interrupt him.\n The inspector lets out a loud sigh, Inspector: 'Look I don't want to be a pain but regulations are regulations.\n Vapor: 'Oh boy, this is going to be good.\n",
            promptOptions: [
                {value: `Pull out your ${playerWeapon}, and attack the inspectors`,
                    nextPrompt: 10,
                    type: "attack"
                },
                {value: "Maintain the ruse",
                    nextPrompt: 11,
                    type: "default" 
                }
            ]
        },
        // {
        //     promptNumber: 10,
        //     promptEpisode: "Episode 1: Enter the Nautilus",
        //     promptTitle: "attack the guards",
        //     promptText: `You don't trust that the ruse will work, so you pull out your ${playerWeapon} and start attacking the inspectors.\n ${prompt8and9AttackResponse().text}`,
        //     promptOptions: [
        //         {
        //             value: `${prompt8and9AttackResponse().optionValues[0]}`,
        //             nextPrompt: `${prompt8and9AttackResponse().nextPrompt[0]}`,
        //             type: "default"
        //         },
        //         {
        //             value: `${prompt8and9AttackResponse().optionValues[1]}`,
        //             nextPrompt: `${prompt8and9AttackResponse().nextPrompt[1]}`,
        //             type: "default" 
        //         }
        //     ]
        // },
        { 
            promptNumber: 11,
            promptEpisode: "Episode 1: Enter the Nautilus",
            promptTitle: "stay calm and continue the ruse",
            promptText: "You continue what you're doing, awaiting a reply from the inspectors.\n Inspector: 'What do you mean this is going to be good?'\n Vapor: 'Ah, you must not spend a lot of time around Gedi's. Don't you know they are religious fanatics. The last guy who interrupted his meditation, well let's just say he's not doing much interrupting these days'.\n Inspector: 'Well, I don't need the headache that comes with the paperwork for complaints about religious discrimination.'\n 'We'll finish checking the rest of the ship and be on our way.'",
            promptOptions: [
                {value: "Nice Patience, Continue",
                    nextPrompt: 20,
                    type: ""
                }
            ]
        },
        { 
            promptNumber: 12,
            promptEpisode: "Episode 1: Enter the Nautilus",
            promptTitle: "move the bodies",
            promptText: "Vapor gestures to one of the bodies and grabs the one closest to his feet.\n 'Let's get these guys back to their shuttle.'\n As you're dragging the body, you hear the inspectors radio start to chatter, asking for a status update on the inspection.",
            promptOptions: [
                {value: "Ignore the call",
                    nextPrompt: 15,
                    type: "default"
                },
                {value: "Pretend to be the inspector",
                    nextPrompt: 16,
                    type: "default" 
                }
            ]
        },
        { 
            promptNumber: 13,
            promptEpisode: "Episode 1: Enter the Nautilus",
            promptTitle: "help grips",
            promptText: "Grips: 'That was some talented work you did back there. Glad to have you on board. I'm the ships mechanic and lover of all things Way related.\n 'If you don't mind giving me a hand I just need this inspectors body removed, so I can clean up the Science Bay.'\n Muttering to himself, 'I can't believe the ring didn't do anything when he put it on, it turned Vapors hand black, how bazaar.",
            promptOptions: [
                {value: "Clean up the Science Bay",
                    nextPrompt: 17,
                    type: "default"
                },
            ]
        },
        { 
            promptNumber: 14,
            promptEpisode: "Episode 1: Enter the Nautilus",
            promptTitle: "go to medical bay",
            promptText: `As you open your eyes, you realize that you're in the medical bay. Vapor is standing over you smurking.\n 'Damn, ${playerName}, you sure are lucky ole Vapor here was kind enough to carry you this far. You passed out shortly after that fight you got us into.'\n 'If you couldn't of guessed, I'm really the one who runs this ship.'\n 'Don't let straight shooting Nines tell you otherwise.'\n 'Any ways once youre feeling up to it make your way to the crew lounge, Captain wants to debrief.'`,
            promptOptions: [
                {value: "Go to Crew Lounge",
                    nextPrompt: 19,
                    type: "default"
                },
            ]
        },
        { 
            promptNumber: 15,
            promptEpisode: "Episode 1: Enter the Nautilus",
            promptTitle: "ignore the call",
            promptText: `You ignore the call and continue dragging the body. After entering the inspectors shuttle, an alarm bell starts to ring.\n Vapor comes running past you and grabs a hold of your arm pulling you along with him. 'We have to get back to The Nautilus, Nines is going to disconnect any second.'\n You and Vapor make a mad sprint for the Nautilus, just making it through the closing doors.\n As you stand up to dust yourself off, you hear Nines over the intercoms.\n 'Everybody hold on tight this is going to be a bumpy ride.'`,
            promptOptions: [
                {value: "Buckle Up",
                    nextPrompt: 18,
                    type: "default"
                },
            ]
        },
        { 
            promptNumber: 16,
            promptEpisode: "Episode 1: Enter the Nautilus",
            promptTitle: "pretend to be the inspector",
            promptText: `You grab the inspectors radio, and answer the call.\n 'Yea everything is fine over here, we are just finishing up and returning to the shuttle. We'll be back before you know.'\n Fortunately for The Nautius crew the dispatcher is to busy to notice your voice is completely different and you didn't follow any protocols after entering the ship.\n The Nautilus receives the go ahead to pass through the Jump Gate.\n You hear the intercom: 'We're in the clear!!! Everyone meet in the Crew Lounge for a debriefing.`,            
            promptOptions: [
                {value: "Go to Crew Lounge",
                    nextPrompt: 19,
                    type: "default"
                },
            ]
        },
        { 
            promptNumber: 17,
            promptEpisode: "Episode 1: Enter the Nautilus",
            promptTitle: "clear up the science bay",
            promptText: `As you are drawing near the shuttle, you see Vapor finishing up a call on the inspectors radio.\n Vapor: 'Hurry up with that body, I just bought us a little bit of time to get out of here.'\n He annouces over The Nautlius intercoms, 'Don't worry everyone I got us out of another mess, you should be getting the all clear any second Nines.'\n Nines gets the go ahead and brings the Nautilus through the jump gate. Nines: 'Great work everyone, lets meet in the Crew Lounge to debrief.`,            
            promptOptions: [
                {value: "Go to Crew Lounge",
                    nextPrompt: 19,
                    type: "default"
                },
            ]
        },
        { 
            promptNumber: 18,
            promptEpisode: "Episode 1: Enter the Nautilus",
            promptTitle: "buckle up",
            promptText: `You feel The Nautilus violently disconnect from the shuttle. Pitching hard to the right, causing you to smack directly into the corridor wall.\n As the ship begins to invert you feel someone grab a hold of your arm. Vapor pulls you into the chair next to him and you buckle up.\n The ship starts to shake from incoming fire, you feel your body being thrown in different directions as Nines tries to out manuever the Malklaiths ships.\n Suddenly as if it never happened the shaking stops, and you see clear space outside the windows.\n You hear the intercom: 'Pheeew, we made it everyone. I have no idea where the f*ck we are, but its better than being dead. Lets meet in the Crew Lounge to debrief.'`,            
            promptOptions: [
                {value: "Go to Crew Lounge",
                    nextPrompt: 19,
                    type: "default"
                },
            ]
        },
        { 
            promptNumber: 19,
            promptEpisode: "Episode 1: Enter the Nautilus",
            promptTitle: "smooth sailing",
            promptText: `Nines: Fantastic work everyone, looks like we have an amazing addition to our crew. Glad to have you, ${playerName}. Someone let the scientist out of the hidden compartment so he can let us know where we are heading to next.'\n Vapor: 'I'll get him out, I want to know why he's so important we had to go through all this trouble.'\n Nines: 'On second thought, Grips why don't you take ${playerName} down to get GreeGree.'\n Grip:'Sure thing, come with me. I'll show you how the compartment works'.`,            
            promptOptions: [
                {value: "Fin",
                    nextPrompt: 21,
                    type: "default"
                },
            ]
        },
        { 
            promptNumber: 20,
            promptEpisode: "Episode 1: Enter the Nautilus",
            promptTitle: "ruse successful",
            promptText: `Nines: 'The inspectors bought it, we are getting the all clear.'\n 'Great job keeping them out of the engine room. If they had found our stealth device we would of been in a lot of trouble.'\n 'Lets meet up in the Crew Lounge to debrief.`,            
            promptOptions: [
                {value: "Go to Crew Lounge",
                    nextPrompt: 19,
                    type: "default"
                },
            ]
        },
    ]

    return prompts
}



