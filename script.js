const container=document.getElementById("userList")
async function fetchData() {
    try{
    const response= await fetch("https://jsonplaceholder.typicode.com/users");
    const data= await response.json();
    console.log(data);
    dispalyUsers(data);
    
}catch(error){
    console.log("Error");    
}
}
fetchData();
function dispalyUsers(data){
data.forEach((user)=>{
    const child=document.createElement("div");
    child.classList.add("card");
    child.innerHTML=
            `<h2>Name : ${user.name}</h2>
            <p><strong>phone :</strong> ${user.phone}</p>   
            <p><strong>Company name :</strong>${user.company.name}</p>  
            <p><strong>email:</strong>${user.email}</p>
            <p><strong>City:</strong>${user.address.city}</p>`
container.appendChild(child); 
} );
}
