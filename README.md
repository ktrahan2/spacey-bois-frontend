# Spacey Bois

Spacey Bois is a text-based adventure game based off a role-playing game called Scum and Villainy.  

# Table Of Contents 
- [Description](https://github.com/ktrahan2/spacey-bois-frontend/blob/main/README.md#description)
- [How It Works](https://github.com/ktrahan2/spacey-bois-frontend#how-it-works)
- [Example Code](https://github.com/ktrahan2/spacey-bois-frontend#example-code)
- [Technology Used](https://github.com/ktrahan2/spacey-bois-frontend#technology-used)
- [Setting up for the Application](https://github.com/spacey-bois-frontend#setting-up-for-the-application)
- [Main Features](https://github.com/ktrahan2/spacey-bois-frontend#main-features)
- [Features in Progress](https://github.com/ktrahan2/spacey-bois-frontend#features-in-progress)
- [Contact Information](https://github.com/ktrahan2/spacey-bois-frontend#contact-information)
- [Link to Backend Repo](https://github.com/ktrahan2/spacey-bois-frontend#link-to-backend-repo)

## Description

Spacey Bois frontend is made with React-Redux and vanilla CSS. The game is based around a role-playing game called Scum and Villainy. It allows the user to create a character with a name and class type. Then the user is prompted with different options in order to advance the storyline. The storyline prompts are mostly generic but there is an example of one custom prompt showing what happens when a user makes an attack roll. At the end the player is given a score which is then add into the database and rendered on the /highscores route on the frontend. 

## How It Works

[Belay Land](https://youtu.be/mLFRHayBuT4)

## Example Code 
```
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
            }.....
    }    
```
```
   
```
```
    
```

## Technology Used

- React-Redux
- JSX
- CSS


## Setting up for the application

To start the server run

```
    npm install
```

``` 
    npm start 
```

## Main Features

- User can create a character with a name and class type
- User can play through a list of prompts that progress the storyline
- User can see the list of highscores

## Features in Progress

- Enable users to save their game 
- Transfer config.js to the backend

## Contact Information

[Kyle Trahan](https://www.linkedin.com/in/kyle-trahan-8384678b/)

## Link to Backend Repo

https://github.com/ktrahan2/spacey-bois-backend

