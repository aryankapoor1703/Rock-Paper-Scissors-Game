let array=['rock', 'paper', 'scissors'];
let yourscore=0;
let computerscore=0;
function play(event)
{
    let you = event.target.id;
    let computer = array[Math.floor(Number(Math.random()*3))];
    document.getElementById('you').innerHTML="Your Choice: "+you;
    document.getElementById('computer').innerHTML="Computer Choice: "+computer;
    if(you==computer)
    {
        document.getElementById('result').innerHTML="Result: Draw";
    }
    else if((you=="rock"&&computer=="paper")||(you=="paper"&&computer=="scissors")||(you=="scissors"&&computer=="rock"))
    {
        document.getElementById('result').innerHTML="Result: Computer Wins!";
        computerscore++;
        document.getElementById('computerscore').innerHTML="Computer: "+computerscore;
    }
    else if((you=="rock"&&computer=="scissors")||(you=="paper"&&computer=="rock")||(you=="scissors"&&computer=="paper"))
    {
        document.getElementById('result').innerHTML="Result: You Win!";
        yourscore++;
        document.getElementById('yourscore').innerHTML="You: "+yourscore;
    }
    if(yourscore==5||computerscore==5)
    {
        if(yourscore==5){
            document.getElementById('winner').innerHTML="Winner: You";
            document.getElementById('choice').removeEventListener('click',play);
        }
        if(computerscore==5){
            document.getElementById('winner').innerHTML="Winner: Computer";
            document.getElementById('choice').removeEventListener('click',play);
        }
    }
}
document.getElementById('choice').addEventListener('click',play);
document.getElementById('again').addEventListener('click',()=>{
    document.getElementById('choice').addEventListener('click',play);
    document.getElementById('you').innerHTML="Your Choice: ";
    document.getElementById('computer').innerHTML="Computer Choice: ";
    document.getElementById('result').innerHTML="Result: ";
    document.getElementById('yourscore').innerHTML="You: 0";
    document.getElementById('computerscore').innerHTML="Computer: 0";
    document.getElementById('winner').innerHTML="Winner: ";
    computerscore=0
    yourscore=0
    document.getElementById('choice').addEventListener('click',play)
});