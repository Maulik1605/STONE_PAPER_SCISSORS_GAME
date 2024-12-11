let userscore=0;
let compscore=0;   
const choices=document.querySelectorAll(".choice");
console.log("choice was selected..");


let msg=document.querySelector("#msg");





let reset=document.querySelector("#reset");
reset.addEventListener("click",()=>{
    console.log("reset button was clickrd....");
    userscore=0;
    compscore=0;
    userscorepara.innerText=userscore;
    compscorepara.innerText=compscore;
})

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");


const gencompchoice=()=>{
    const option=["stone","paper","scissors"];
    const randinx=Math.floor(Math.random()*3);
    return option[randinx];

};

const drawgame=()=>{
    console.log("game was drow");
    console.log("you looes the game try again now!");
    msg.innerText="your game was DRAW! try again now!";
    msg.style.backgroundColor="black";
};

const showwiner=(userwin,getchoiceid,comchoice)=>{
    if(userwin)  //check the value if userwin a true that execute win otherwise loes....
    {
        userscore++;
        userscorepara.innerText=userscore;
        console.log("you win!..");
        msg.innerText=`you win your ${getchoiceid} bets ${comchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("you loos");
        msg.innerText=`you loes! ${comchoice} bets ${getchoiceid}`;
        msg.style.backgroundColor="red";
    }

};
const playgame=(getchoiceid)=>{
    console.log("user choice is= ",getchoiceid);
    const comchoice=gencompchoice();   //return as value to option return in comchoice object in stored....
    console.log("com choice is=",comchoice);
    // generate computer function ->modular;




    if(getchoiceid===comchoice)
    {
        //draw..
        drawgame();
    }
    else
    {
        let userwin=true;
        if(getchoiceid==="rock")
        {
            //scisors, paper           of the com. choice 
        userwin=comchoice==="paper" ? false:true;
        }else if(getchoiceid==="paper")
        {
            //scisors ,rock             of after selected choice have computer
        userwin=comchoice==="scissors" ?false:true;
        }
        else
        {
            //option paper, rock has computer...... 
            userwin = comchoice==="rock" ? false:true;
        }
        showwiner(userwin,getchoiceid,comchoice);
    }
}; 

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const getchoiceid=choice.getAttribute("id");
        console.log("button was clicked",getchoiceid);
        playgame(getchoiceid);
       

    })
})

