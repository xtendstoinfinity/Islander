class Property {
    constructor(name, location, price, image, tags){
        this.name = name;
        this.location = location
        this.price = price;
        this.image = image
        this.tags = tags;
    }
}

let tags = document.getElementsByClassName("category_tag");
for (let tag of tags) {
    tag.addEventListener("click", (e) => {
        if(e.target.innerText in 
    });
}