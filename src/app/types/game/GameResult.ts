
// representation of a gameresult object
export class GameResult {

    constructor(id: string, winner: string, userName: string, date: Date, playerchoice: string, serverChoice: string){
        this.id = id;
        this.winner = winner;
        this.userName = userName;
        this.date = date;
        this.playerChoice = playerchoice;
        this.serverChoice = serverChoice;
    }

    id: string | undefined;
    winner: string| undefined;
    userName: string| undefined;
    date: Date| undefined;
    playerChoice: string| undefined;
    serverChoice: string| undefined;
};