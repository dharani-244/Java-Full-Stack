function greet_afternoon()
{
    let text=document.getElementById("greet");
    text.innerText="good afternoon";

}
function turn_on(){
    let light=document.getElementById("on");
    light.src="/Java-Full-Stack/files/tubeon.jpeg";
}
function turn_off(){
    let light=document.getElementById("on");
    light.src="/Java-Full-Stack/files/tubeoff.jpeg";
}
function change_color()
{
    let colour=document.getElementById("cap");
    colour.style.backgroundColor="black";
     let c1=document.getElementById("data");
    c1.style.backgroundColor="white";
    let c2=document.getElementById("greet");
    c2.style.backgroundColor="white";
}
