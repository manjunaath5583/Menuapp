let myData = {
                item_1:{
                    Name : "Buttermilk Pancakes",
                    Img  : "/assets/images/item-1.jpeg",
                    Text : "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
                },
                item_2:{
                    Name : "Diner Double",
                    Img  : "/assets/images/item-2.jpeg",
                    Text : "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
                },
                item_3:{
                    Name : "Godzilla Milkshake",
                    Img  : "/assets/images/item-3.jpeg",
                    Text : "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral"
                },
                item_4:{
                    Name : "Country Delight",
                    Img  : "/assets/images/item-4.jpeg",
                    Text : "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,"
                },
                item_5:{
                    Name : "Egg Attack",
                    Img  : "/assets/images/item-5.jpeg",
                    Text : "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"
                },
                item_6:{
                    Name : "Oreo Dream",
                    Img  : "/assets/images/item-6.jpeg",
                    Text : "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
                },
                item_7:{
                    Name : "Bacon Overflow",
                    Img  : "/assets/images/item-7.jpeg",
                    Text : "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"
                },
                item_8:{
                    Name : "American Classic",
                    Img  : "/assets/images/item-8.jpeg",
                    Text : "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
                },
                item_9:{
                    Name : "Quarantine Buddy",
                    Img  : "/assets/images/item-9.jpeg",
                    Text : "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
                },
                item_10:{
                    Name : "Steak Dinner",
                    Img  : "/assets/images/item-10.jpeg",
                    Text : "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
                }
}




function createCard(Name,Img,text){

    const card = document.createElement("div");
    card.className = "card mb-3";
    card.style.maxWidth = "540px";

    const cardDiv = document.createElement("div");
    cardDiv.className = "row g-0";

    const imageDiv = document.createElement("div");
    imageDiv.className = "col-md-4";

    const image = document.createElement("img");
    image.src = Img;
    image.className = "img-fluid rounded-start"

    const cardbodydiv = document.createElement("div");
    cardbodydiv.className = "col-md-8";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = Name;
    cardTitle.style.textDecoration = "underline";

    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.textContent = text;

    const spanMain = document.getElementById("Mainspan");
    spanMain.appendChild(card);
        
    card.appendChild(cardDiv);
    cardDiv.appendChild(imageDiv);
    imageDiv.appendChild(image);
    cardDiv.appendChild(cardbodydiv);
    cardbodydiv.appendChild(cardBody);
    cardBody.appendChild(cardTitle);
    cardbodydiv.appendChild(cardText);
}

function removeCard(){
    let allItems = document.getElementById("Mainspan")
    while(allItems.hasChildNodes()){
        allItems.removeChild(allItems.childNodes[0]);
    }
}


function buttonAbler(){
    const allButtons = document.querySelectorAll('#btn');
    for (let i=0; i<allButtons.length; i++){
        allButtons[i].disabled = false;
    }
}


// buttons 
const All = document.querySelectorAll('#btn')[0];
const Breakfast = document.querySelectorAll('#btn')[1];
const Lunch = document.querySelectorAll('#btn')[2];
const Shakes = document.querySelectorAll('#btn')[3];
const Dinner = document.querySelectorAll('#btn')[4];

All.onclick = function(){
    removeCard();
    for(let items in myData){
        createCard(myData[items].Name,myData[items].Img,myData[items].Text);
    }
    buttonAbler();
    All.disabled = true;
};



Breakfast.onclick = function(){
    removeCard();
    for(let items in myData){
        let bf =  ["Buttermilk Pancakes","Country Delight","Bacon Overflow"];
        for (let i=0;i<bf.length;i++){
            if (myData[items].Name === bf[i]){
                createCard(myData[items].Name,myData[items].Img,myData[items].Text);
            }
        }
    }
    buttonAbler();
    Breakfast.disabled = true;
};

Lunch.onclick = function(){
    removeCard();
    for(let items in myData){
        let lunch =  ["Diner Double","Egg Attack","American Classic"];
        for (let i=0;i<lunch.length;i++){
            if (myData[items].Name === lunch[i]){
                createCard(myData[items].Name,myData[items].Img,myData[items].Text);
            }
        }
    }
    buttonAbler();
    Lunch.disabled = true;
};

Shakes.onclick = function(){
    removeCard();
    for(let items in myData){
        let shakes =  ["Godzilla Milkshake","Oreo Dream","Quarantine Buddy"];
        for (let i=0;i<shakes.length;i++){
            if (myData[items].Name === shakes[i]){
                createCard(myData[items].Name,myData[items].Img,myData[items].Text);
            }
        }
    }
    buttonAbler();
    Shakes.disabled = true;
};

Dinner.onclick = function(){
    removeCard();
    for(let items in myData){
        let dinner =  ["Steak Dinner"];
        for (let i=0;i<dinner.length;i++){
            if (myData[items].Name === dinner[i]){
                createCard(myData[items].Name,myData[items].Img,myData[items].Text);
            }
        }
    }
    buttonAbler();
    Dinner.disabled = true;
};

for(let k in myData){
    createCard(myData[k].Name,myData[k].Img,myData[k].Text);
}
All.disabled = true;
