export class Game{
    public player:string[] =[];
    public stack:string[] =[];
    public playerCard:string[] =[];
    public currentPlayer:number =0;

    constructor(){
        for (let index = 1; index < 14; index++) {
            this.stack.push('ace_' + index)  
            this.stack.push('clubs_' + index)  
            this.stack.push('hearts_' + index)  
            this.stack.push('diamonds_' + index)  
        }
        shuffle(this.stack);
    } 
}


function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
};