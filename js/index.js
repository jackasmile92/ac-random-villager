function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
 
var villager = document.createElement('div');
villager.className = "villager";

var firstRandomElement = randomArray[Math.floor(Math.random()*randomArray.length)];
var avatar = document.createElement('div');
avatar.className = "villager__species";
var title = document.createElement('div');
title.className = "villager__title";

title.innerHTML = firstRandomElement ;
avatar.appendChild(title);

let imageTag = document.createElement('img');
imageTag.src = './img/' + firstRandomElement + '.png';

avatar.appendChild(imageTag);
villager.appendChild(avatar);
//document.body.appendChild(avatar);

var color_pal =  document.createElement('div');
color_pal.className = "villager__palette";

var pal =  document.createElement('div');
pal.className = "palette";
pal.innerHTML = "Palette:" ;

var colors = document.createElement('div');
colors.className = "colors";

var color_1 =  document.createElement('div');
var color_2 =  document.createElement('div');
var color_3 =  document.createElement('div');
var color_4 =  document.createElement('div');

color_1.style.backgroundColor = getRandomColor();
color_2.style.backgroundColor = getRandomColor();
color_3.style.backgroundColor = getRandomColor();
color_4.style.backgroundColor = getRandomColor();

colors.appendChild(color_1);
colors.appendChild(color_2);
colors.appendChild(color_3);
colors.appendChild(color_4);

color_pal.appendChild(pal);
color_pal.appendChild(colors);

var bottom = document.createElement('div');
bottom.className = "villager__bottom";

bottom.appendChild(color_pal);

var personality = personalities[Math.floor(Math.random()*personalities.length)];
var pers = document.createElement('div');
pers.className = "villager__personality";

var ps1 = document.createElement('div');
ps1.innerHTML = "Personality: ";

var ps2 = document.createElement('div');
ps2.innerHTML = personality;
pers.appendChild(ps1);
pers.appendChild(ps2);

bottom.appendChild(pers);

var style = styles[Math.floor(Math.random()*styles.length)];
var st = document.createElement('div');
st.className = "villager__style";

var st1 = document.createElement('div');
st1.innerHTML = "Style: ";

var st2 = document.createElement('div');
st2.innerHTML = style;
st.appendChild(st1);
st.appendChild(st2);

bottom.appendChild(st);


var catchph = catchphr[Math.floor(Math.random()*catchphr.length)];
var cp = document.createElement('div');
cp.className = "villager__catchp";

var cp1 = document.createElement('div');
cp1.innerHTML = "Catchphrase: ";

var cp2 = document.createElement('div');
cp2.innerHTML = catchph;
cp.appendChild(cp1);
cp.appendChild(cp2);

bottom.appendChild(cp);
villager.appendChild(bottom);

document.body.appendChild(villager);