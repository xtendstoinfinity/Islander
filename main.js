class Property {
    constructor(name, location, price, image, tags){
        this.name = name;
        this.location = location
        this.price = price;
        this.image = image
        this.tags = tags;
    }
}
let properties = [
    new Property(
        "Burj Khalifa",
        "Dubai, UAE",
        "$2.7 billion",
        "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0b/de/fe/bc.jpg",
        ["Residential", "Luxury", "Apartment"]
    ),
    new Property(
        "Taj Mahal",
        "Agra, India",
        "$35 billion",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1200px-Taj_Mahal_%28Edited%29.jpeg",
        ["Commercial", "Luxury", "Residential"]
    ),
    new Property(
        "The Piramids of Giza",
        "Gizz",
        "$1.2 trillion",
        "https://images.immediate.co.uk/production/volatile/sites/7/2019/07/33-GettyImages-154260931-216706f.jpg?resize=1366,892",
        ["Ancient", "Commercial","Haunted"]
    ),
    new Property(
        "Just a regular house",
        "Murthal, India",
        "$1.1 million",
        "https://www.vacationstravel.com/wp-content/uploads/2021/08/Untitled-design-26-1.jpg",
        ["Commercial","Resiential","Duplex","Bungalow","Warehouse","Rental"]
    ),
    new Property(
        "James' Residence",
        "Jamesville, Iceland",
        "$1.4 million",
        "https://i.ytimg.com/vi/S56zCqE50kw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDwMMZjZu92k--aVXd5J3yNxL6b8Q",
        ["Commercial","Resiential","Duplex","Bungalow","Rental","Farmhouse"]
    ),
    new Property(
        "Plot 7471",
        "Kanpur, India",
        "$4.6 million",
        "https://imagecdn.99acres.com/media1/32833/16/656676423M-1759660003799.jpg",
        ["Commercial","Rental","Plot","Industrial"]
    ),
    new Property(
        "Plot 2998",
        "Bokaro, India",
        "$3.2 million",
        "https://nammafamilybuilder.com/wp-content/uploads/2022/02/Farm-land-for-sale.jpg",
        ["Commercial","Rental","Plot","Industrial","Farmland"]
    ),
    new Property(
        "Plot 6769",
        "New Delhi, India",
        "$17 million",
        "https://land.copernicus.eu/en/gaetano-cessati-d91hdmcta0k-unsplash.jpg/@@images/image/huge",
        ["Commercial","Rental","Plot","Industrial","Farmland"]
    ),
    new Property(
        "Rishihood University",
        "Sonipat, India",
        "$10",
        "https://images.financialexpressdigital.com/2022/06/Rishohood-01.png",
        ["Commercial","Rental","Plot","Industrial","Residential","Farmland","Haunted","Office"]
    ),
    new Property(
        "Oggy's House",
        "Ohio, USA",
        "$69 million",
        "https://i.pinimg.com/736x/4c/78/4f/4c784f33a7e20b7260407b9975b982d0.jpg",
        ["Residential","Rental","Office","Commercial","Luxury","Duplex","Bungalow"]
    ),
    new Property(
        "Club House",
        "Mickeytown, China",
        "$29 million",
        "https://m.media-amazon.com/images/S/pv-target-images/9751f7e2d8c4acc718772d35a3806d5649efc41161170f2d047ce2eabaea434f._SX1080_FMjpg_.jpg",
        ["Commercial","Industrial","Residential","Office","Haunted","Farmhouse","Warehouse","Luxury"]
    ),
    new Property(
        "Putin's House",
        "Mother Russia",
        "$1.5 billion",
        "https://focus.sundayworld.com/thumbor/vsGkHtMBezB_yhdqcwIw48DIZLA=/1280x960/smart/prod-mh-ireland/7d039070-de7a-11ec-96c5-0257d57b707f.jpg",
        ["Residential","Luxury","Farmhouse"]
    ),
    new Property(
        "Dust2 mid",
        "CS:GO, Valve",
        "$450 million",
        "https://cdn.fastly.steamstatic.com/apps/csgo/images/dust2/small_screens/shot4a.jpg?v=1",
        ["Plot","Rent","Residential","Industrial","Warehouse"]
    ),
    new Property(
        "B apps",
        "Mirage, CS:GO",
        "$49 million",
        "https://i.ytimg.com/vi/3SzdgQ56BH4/maxresdefault.jpg",
        ["Apartment","Residential","Commercial","Warehouse","Office"]
    )
];
let container = document.getElementsByClassName("content_area")[0];


function addContent(property) {
    let card = document.createElement("div");
    card.className = "content";
    card.addEventListener("click", () => {
        displayPopup(property);
    });
    card.innerHTML = `
        <div class="img_dock">
            <img draggable="false" src="${property.image}">
        </div>
        <div class="content_info">
            <div>${property.name}</div>
            <div>${property.location}</div>
            <div class="property-price">${property.price}</div>
            <div>
                <button class="buy_button" onclick="window.location.href='login.html'">Buy</button>
            </div>
        </div>
    `;
    container.appendChild(card);
}

function LoadAll(){
    for(let property of properties){
        addContent(property);
    }
}
LoadAll();

let tags = document.getElementsByClassName("category_tag");
let search = document.getElementById("search_bar");
search.addEventListener("keydown", (e) =>{
    if(e.key == "Enter"){
        if(search.value != ""){
            container.innerHTML = ""
            for(property of properties){
                if(search.value.toLowerCase() == property.name.toLowerCase()){
                    addContent(property);
                }
            }
        }
        else{
            container.innerHTML = ""
            LoadAll();
        }
    }
});


for (let tag of tags) {
    tag.addEventListener("click", (e) => {
        container.innerHTML = ""
        for(let property of properties){
            if(e.target.innerText=="All"){
                addContent(property);
            }
            else if(property.tags.includes(e.target.innerText)){
                addContent(property);
            }
        }
    });
}
function displayPopup(property){
    let overlay = document.getElementById("popup_overlay");
    let box = document.getElementById("popup_box");

    let tagHTML = "";
    for (let t of property.tags) {
        tagHTML += `<span class="tag">${t}</span>`;
    }

    box.innerHTML = `
        <div class="popup_close" onclick="closePopup()">✖</div>
        <img src="${property.image}" draggable="false">
        <h2>${property.name}</h2>
        <p><strong>Location:</strong> ${property.location}</p>
        <p><strong>Price:</strong> ${property.price}</p>
        <p><strong>Description:</strong>  
            This is a placeholder description for the property.  
            You can replace this text with whatever detailed info you want.
        </p>
        <h3>Tags</h3>
        <div>${tagHTML}</div>
        <br>
        <button class="buy_button" onclick="window.location.href='login.html'">
            Buy
        </button>
    `;

    overlay.classList.remove("hidden");
}
function closePopup(){
    document.getElementById("popup_overlay").classList.add("hidden");
}
document.getElementById("popup_overlay").addEventListener("click", (e) => {
    if (e.target.id === "popup_overlay") {
        closePopup();
    }
});