function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

var randomArray = [
    'Alligator','Anteater','Bear'
    ,'Bird','Bull','Cat'
    ,'Chicken','Cow','Cub'
    ,'Deer','Dog','Duck'
    ,'Eagle','Elephant','Frog'
    ,'Goat','Gorilla','Hamster'
    ,'Hippo','Horse','Kangaroo'
    ,'Koala','Lion','Monkey'
    ,'Mouse','Octopus','Ostrich'
    ,'Penguin','Pig','Rabbit'
    ,'Rhino','Sheep','Squirrel'
    ,'Tiger','Wolf'
]; 
var firstRandomElement = randomArray[Math.floor(Math.random()*randomArray.length)];
var avatar = document.createElement('div');
avatar.className = "villager__species";
avatar.innerHTML = firstRandomElement;

document.body.appendChild(avatar);

var color_pal =  document.createElement('div');
color_pal.className = "villager__palette";

var color_1 =  document.createElement('div');
var color_2 =  document.createElement('div');
var color_3 =  document.createElement('div');
var color_4 =  document.createElement('div');

color_1.style.backgroundColor = getRandomColor();
color_2.style.backgroundColor = getRandomColor();
color_3.style.backgroundColor = getRandomColor();
color_4.style.backgroundColor = getRandomColor();

color_pal.appendChild(color_1);
color_pal.appendChild(color_2);
color_pal.appendChild(color_3);
color_pal.appendChild(color_4);

document.body.appendChild(color_pal);

var personalities =[
'Sisterly'
,'Snooty'
,'Cranky'
,'Smug'
,'Peppy'
,'Normal'
,'Lazy'
,'Jock'
];
var personality = personalities[Math.floor(Math.random()*personalities.length)];
var pers = document.createElement('div');
pers.className = "villager__personality";
pers.innerHTML = personality;

document.body.appendChild(pers);


var styles =[
    'Sporty', 'Cute', 'Iconic', 'RocknRoll', 'Official'
    , 'Ornate', 'Flashy', 'Modern', 'Historical', 'Basic'
];

var style = styles[Math.floor(Math.random()*styles.length)];
var st = document.createElement('div');
st.className = "villager__style";
st.innerHTML = style;

document.body.appendChild(st);
//http://www.animalcrossingcommunity.com/Topic/4468132/1/Villagers_catchphrase_List
catchphr =[
    ,'Tubby/tubbo'
    ,'chubby/chubbo'
    ,'Buddy/buddy boy'
    ,'chimp/chimpy/chimpet'
    , 'Honey,hunny'
    ,'Neighbor'
    ,'Corn hole'
    ,'Comrad'
    ,'Boss'
    ,'sly'
    ,'slick'
    ,'Hot stuff'
    ,'Snowflake'
    ,'Bear'
    ,'Puddin pop'
    ,'Show off'
    ,'Cub'
    ,'baby'
    ,'idiot'
    ,'Colt'
    ,'Pup/puppy'
    ,'Kitten'
    ,'Shrimp'
    ,'Smarty'
    ,'Calf'
    ,'dummy'
    ,'Sweetie'
    ,'Nice guy/Nice girl'
    ,'Mate'
    ,'Sweet heart'
    ,'sugar'
    ,'My friend'
    ,'Angle'
    ,'Pumpkin'
    ,'Dude/Dood'
    ,'Queen'
    ,'Snow angle'
    ,'bum'
    ,'man'
    ,'punk'
    ,'Bacon'
    ,'Chocolate'
    ,'Caramel'
    ,'Hick/Hicker'
    ,'Icy'
    ,'Sonny'
    ,'Dog'
    ,'Goofball'
    ,'Clown'
    ,'Nerd'
    ,'Hill billy'
    ,'Captain'
    ,'Swindler'
    ,'Poser'
    ,'Phony'
    ,'Derr'
    ,'Honey bun'
    ,'Boy'
    ,'girl'
    ,'Frosting'
    ,'Monster'
    ,'Icing'
    ,'Emerald'
    ,'Kitty cat'
    ,'Handsome'
    ,'Pertty'
    ,'Squeaker'
    ,'Smelly'
    ,'Piggy'
    ,'fatso'
    ,'Sneaky'
    ,'Tiny'
    ,'Prince'
    ,'Princess'
    ,'Greaser'
    ,'Hoe'
    ,'Cookie'
    ,'Muffin'
    ,'Peanut'
    ,'coco'
    ,'flower'
    ,'Noob'
    ,'cup cake'
    ,'Dead weight'
    ,'Meat bag'
    ,'Girl friend'
    ,'Smiggs'
    ,'Bro'
    ,'sis'
    ,'Hooser'
    ,'Pal'
    ,'Work horse'
    ,'B-B-buddy'
    ,'Foxy'
    ,'ace'
    ,'Bender'
    ,'soul mate'
    ,'Smoker'
    ,'Joker'
    ,'Speedy'
    ,'hero'
    ,'Its a mii'
    ,'Mother'
    ,'Father'
    ,'Killer'
];

var catchph = catchphr[Math.floor(Math.random()*catchphr.length)];
var cp = document.createElement('div');
cp.className = "villager__catchp";
cp.innerHTML = catchph;

document.body.appendChild(cp);