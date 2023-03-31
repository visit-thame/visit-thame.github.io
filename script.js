function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

const accommodation_images = ["img/spread-eagle.jpg", "img/travelodge.jpg", "img/the-oxfordshire.png"];
const recreational_images = ["img/elms-park.png", "img/cuttle-brook.jpg", "img/skatepark.jpg", "img/phoenix-trail.jpg"];
const food_images = ["img/burger-king.jpg", "img/subway.jpg", "img/thame-fried-chicken.jpg", "img/the-thatch.jpg"];
const shopping_images = ["img/waitrose.jpg", "img/sainsburys.png", "img/m&s-simply.png", "img/co-op.png"];

document.getElementById('accommodation_image').src = String(randomChoice(accommodation_images));
document.getElementById('recreational_image').src = String(randomChoice(recreational_images));
document.getElementById('food_image').src = String(randomChoice(food_images));
document.getElementById('shopping_image').src = String(randomChoice(shopping_images));