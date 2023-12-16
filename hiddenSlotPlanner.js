//seeded random function, courtesy of http://davidbau.com/archives/2010/01/30/random_seeds_coded_hints_and_quintillions.html
(function(a,b,c,d,e,f){function k(a){var b,c=a.length,e=this,f=0,g=e.i=e.j=0,h=e.S=[];for(c||(a=[c++]);d>f;)h[f]=f++;for(f=0;d>f;f++)h[f]=h[g=j&g+a[f%c]+(b=h[f])],h[g]=b;(e.g=function(a){for(var b,c=0,f=e.i,g=e.j,h=e.S;a--;)b=h[f=j&f+1],c=c*d+h[j&(h[f]=h[g=j&g+b])+(h[g]=b)];return e.i=f,e.j=g,c})(d)}function l(a,b){var e,c=[],d=(typeof a)[0];if(b&&"o"==d)for(e in a)try{c.push(l(a[e],b-1))}catch(f){}return c.length?c:"s"==d?a:a+"\0"}function m(a,b){for(var d,c=a+"",e=0;c.length>e;)b[j&e]=j&(d^=19*b[j&e])+c.charCodeAt(e++);return o(b)}function n(c){try{return a.crypto.getRandomValues(c=new Uint8Array(d)),o(c)}catch(e){return[+new Date,a,a.navigator.plugins,a.screen,o(b)]}}function o(a){return String.fromCharCode.apply(0,a)}var g=c.pow(d,e),h=c.pow(2,f),i=2*h,j=d-1;c.seedrandom=function(a,f){var j=[],p=m(l(f?[a,o(b)]:0 in arguments?a:n(),3),j),q=new k(j);return m(o(q.S),b),c.random=function(){for(var a=q.g(e),b=g,c=0;h>a;)a=(a+c)*d,b*=d,c=q.g(1);for(;a>=i;)a/=2,b/=2,c>>>=1;return(a+c)/b},p},m(c.random(),b)})(this,[],Math,256,6,52);

const seed = document.getElementById("seed");

function display() {
let upgradeIDs = [621,622,623,624,625,626,627,628,629,630,631,632,633,634,635,636,637,698,763,861,134,135,136,137,138,139,140,143,144,145,146,147,148,149,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229];

let upgradeNames = ['Fortune #001','Fortune #002','Fortune #003','Fortune #004','Fortune #005','Fortune #006','Fortune #007','Fortune #008','Fortune #009','Fortune #010','Fortune #011','Fortune #012','Fortune #013','Fortune #014','Fortune #015','Fortune #016','Fortune #017','Fortune #018','Fortune #019','Fortune #020','Skull cookies','Ghost cookies','Bat cookies','Slime cookies','Pumpkin cookies','Eyeball cookies','Spider cookies','Christmas tree biscuits','Snowflake biscuits','Snowman biscuits','Holly biscuits','Candy cane biscuits','Bell biscuits','Present biscuits','Chicken egg','Duck egg','Turkey egg','Quail egg','Robin egg','Ostrich egg','Cassowary egg','Salmon roe','Frogspawn','Shark egg','Turtle egg','Ant larva','Golden goose egg','Faberge egg','Wrinklerspawn','Cookie egg','Omelette','Chocolate egg','Century egg','\"egg\"'];

let hiddenSlots=['pinSpecial','pinStats','pinMisc'];

let content = '<table>';
content += '<tr>';
content += '<th>Upgrade</th>';
content += '<th>Location</th>';
content += '</tr>';


for (i = 0; i < upgradeIDs.length; i++) {
	Math.seedrandom(seed.value+'-hiddenSlotUpgrade-'+upgradeIDs[i]);
	if (Math.random()<0.15) {
		content += '<tr><td>';
		content += upgradeNames[i];
		content += '</td><td>';
		content += hiddenSlots[Math.floor(Math.random()*hiddenSlots.length)];
		content += '</td></tr>';
	}
}

content += "</table>";
console.log(content);
output.innerHTML = content;
}
