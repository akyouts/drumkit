var len=document.querySelectorAll("button").length;
for(i=0;i<len;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function()
    {
        let butInnerHtml=this.innerHTML;
        animation(butInnerHtml)
        switch(butInnerHtml)
        {
            case "w":
                var audio=new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio=new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
             case "s":
                var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
             case "j":
                var audio=new Audio("sounds/snare.mp3");
                audio.play();
                break;

            case "k":
                var audio=new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "l":
                var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            default:
                console.log(this.innerHTML);
        }
    })
}
document.addEventListener("keydown", function(event){
    let key=event.key;
    animation(key)
    switch(key)
        {
            case "w":
                var audio=new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio=new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
             case "s":
                var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
             case "j":
                var audio=new Audio("sounds/snare.mp3");
                audio.play();
                break;

            case "k":
                var audio=new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "l":
                var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            default:
                alert("Sorry Wrong Key");
        }

})

function animation(keypress)
{
    
    document.querySelector("."+keypress).classList.add("pressed");
    setTimeout(()=>{
        console.log("hello")
        document.querySelector("."+keypress).classList.remove("pressed");
    },100);
    
    
}