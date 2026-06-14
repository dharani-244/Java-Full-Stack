document.getElementById("details")
.addEventListener("submit",function(event)
{
    event.preventDefault();
    let name=document.getElementById("name").value;
    let phone=document.getElementById("phone").value; 
    let age=document.getElementById("age").value;
    let dob=document.getElementById("dob").value;
    let gender=document.querySelector('input[name="gender"]:checked').value;
    let Document=[];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(item) {
        Document.push(item.value);
        
    })

     let address=document.getElementById("address").value;
    document.getElementById("p1").innerText="Name:"+name;
    document.getElementById("p2").innerText="Phone no:"+phone;
    document.getElementById("p3").innerText="Age:"+age;
    document.getElementById("p4").innerText="Gender:"+gender;
    document.getElementById("p5").innerText="Address:"+address;
    document.getElementById("p6").innerText="dob:"+dob;
    document.getElementById("p7").innerText="document:"+Document;

     let image=document.getElementById("image").files[0];
     if(image)
     {
        let read=new FileReader();
        read.onload=function(e)
        {
            document.getElementById("dp").src=e.target.result;
            };
            read.readAsDataURL(image);
        }
});
    
