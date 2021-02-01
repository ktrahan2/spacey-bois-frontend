const SendHighScore = ( playerName, playerScore ) => {
    
    //need to fix go server or change to ruby server. 
    return (
        fetch('http://localhost:7000/addscores', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                    username: playerName,
                    score: playerScore
            })
        }).then(response => response.json())
        .catch(error => console.error(error))  
    )
}

 
export default SendHighScore