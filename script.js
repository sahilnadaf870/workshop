
function rl(){
    // user registration and login
document.getElementById("registerForm").addEventListener("submit", function(event){
    event.preventDefault();

    let username = document.getElementById("regUsername").value;
    let password = document.getElementById("regPassword").value;

    if(username === "" || password === ""){
        alert("All fields are required");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let userExists = users.some(user => user.username === username);
    if(userExists){
        alert("Username already taken!");
        return;
    }

    users.push({username, password});
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! You can now log in");
    document.getElementById("registerForm").reset();
});

//login user

document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    let message = document.getElementById("message");

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let validUser = users.find(user => user.username === username && user.password === password);

    if(validUser){
        message.style.color = "green";
        message.textContent = "Login successful";
    }else{
        message.style.color = "red";
        message.textContent = "Invaild username or password";
    }

    document.getElementById("loginForm");
});
}




// place location details


const locations = [
    {id: 1, name:"Banglore", Image: "https://hblimg.mmtcdn.com/content/hubble/img/dest_img/mmt/activities/m_Bangalore_dest_landscape_l_869_1229.jpg "},
    {id: 2, name:"Coorg", Image:"https://hblimg.mmtcdn.com/content/hubble/img/coorg/mmt/destination/m_destination-coorg-landscape_l_400_640.jpg "},
    {id: 3, name:"Chikmangalur", Image:"https://hblimg.mmtcdn.com/content/hubble/img/chikmangalur/mmt/destination/m_destination-chikmagalur-landscape_l_400_640.jpg  "},
    {id: 4, name:"Mysore", Image:"https://hblimg.mmtcdn.com/content/hubble/img/destimg/mmt/activities/m_Mysore_destjulimg_1_l_663_1179.jpg  "},
    {id: 5, name:"Gokarna", Image:"https://hblimg.mmtcdn.com/content/hubble/img/gokarna/mmt/destination/m_destination_gokarna_landscape_l_400_640.jpg "},
    {id: 6, name:"Kabini", Image:"https://hblimg.mmtcdn.com/content/hubble/img/kabini/mmt/destination/m_destination_kabini_landscape_l_400_640.jpg  "},
    {id: 7, name:"Murudeshwar",Image:"https://hblimg.mmtcdn.com/content/hubble/img/murudeshwar/mmt/destination/m_destination_murudeshwar_landscape_l_400_640.jpg"},
    {id: 8, name:"Sakleshpur", Image:"https://hblimg.mmtcdn.com/content/hubble/img/sakleshpur/mmt/destination/m_destination_sakleshpur_landscape_l_400_640.jpg"},
    {id: 9, name:"Bidar", Image:"https://hblimg.mmtcdn.com/content/hubble/img/bidar/mmt/destination/m_destination_bidar_landscape_l_400_640.jpg"},
    {id: 10, name:"Hoskote",Image:"https://hblimg.mmtcdn.com/content/hubble/img/Hoskote/mmt/activities/m_Hoskote_1_l_360_640.jpg"},
    {id: 11, name:"Dandeli",Image:"https://hblimg.mmtcdn.com/content/hubble/img/dandeli/mmt/destination/m_Destination_Dandeli_l_536_804.jpg"},
    {id: 12, name:"Nagarhole", Image:"https://hblimg.mmtcdn.com/content/hubble/img/nagarhole/mmt/destination/m_nagarhole-landscape_l_400_640.jpg"},
    {id: 13, name:"Lonawala and Khandala", Image:"https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1289/Lonavala-And-Khandala.jpg"},
    {id: 14, name:"Shiradi", Image:"https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1211/Sai%20Baba.jpg"},
    {id: 15, name:"Mumbai", Image:"https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/1268/mumbai-harbour.jpg"}
    // {id: 10, name:"", price:"", Image:""},
    
]

//render locations

function renderLocation(locations, locationList){
    const container = document.getElementById(locationList);
    container.innerHTML="";
    locations.forEach(location => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("location-item");
        productDiv.innerHTML=`
            <img src="${location.Image}"/>
            <h3>${location.name}</h3>
            <button onclick="addToCart(${location.id})">Book</button>`;
        container.appendChild(productDiv);
    });
}
if(document.getElementById("locationList"))renderLocation(locations, "locationList");

// search button

function searchLocation(query){
    const filterProducts = locations.filter(location =>
        location.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    )

    renderLocation(filterProducts, "locationList")
}

//add event listener to button
document.getElementById("searchButton")?.addEventListener("click",()=>{
    const query = document.getElementById("locationSearch").value;
    searchLocation(query);
})



