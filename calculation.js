//https://ntrs.nasa.gov/citations/19660007973
//This code was written summer 2020, before I entered college, to let me fly vehicles to the moon in Kerbal Space Program with Realism overhaul, 
//from launch sites that were too high in inclination to simply launch into the plane of the moon. This is not the place to explain what KSP and RSS are, see the readme.

const x = 0;
const y = 1;
const z = 2;
const asumith = 90; //Due east launch, fixed for simplicty. 0° would be due north. Could be varied across the allowable launch asumiths for more opportunities
const siteDec = 37.9367; //Latitude of launch site. This is the lattitude for wallops, in virginia.

//input lunar position from https://ssd.jpl.nasa.gov/horizons/app.html#/ (horizons). This is the position of the moon at impact. I assumed a 3-day transfer, 
//so would usde horisons to get the position of the moon 3 days after my launch date.
//naturally, there are way better ways to find transfer time than merely guestimating a time of impact, but estimating 3 days after launch is "close enough"
var m1 = [3.323580430902253*Math.pow(10,5),1.422627094469626*Math.pow(10,5),-3.220575107542072*Math.pow(10,4)];
var m2 = [3.335842684730923*Math.pow(10,5),-1.354346075936884*Math.pow(10,5),-5.834508083459274*Math.pow(10,4)];
var m3 = [-1.593170894374846*Math.pow(10,5),3.672792218932178*Math.pow(10,5),-3.165504772843079*Math.pow(10,4)];
var m4 = [3,3,0.3];
var moonPosArr = [m1,m2,m3,m4];
for(var i = 0; i< moonPosArr.length; i++){
    console.log(computeLAN(moonPosArr[i]));
}

//This is an implemintation of https://ntrs.nasa.gov/citations/19660007973, and returns the right acensions of the planes you can launch into. 
//This is also the longitude of the acending node that Mechjeb 2 autopiliot in KSP can launch into, and so is the final output, as I can then input it into the game, and launch into the correct plane.
function computeLAN(moonPos) {
    
    //intermediate variables

    var moonPosUnit = unitVector(moonPos);
    var w = [-1, -1, -1]; //x,y,z
    var w2 = [-1, -1, -1]; //the negative of the quadratic formula
    var rightAscencion = -1; //intermediate in finding time
    var rightAscencion2 = -1; //negative of the quadratic
    var LANs = [-1,-1];

    //unit vecotor normal to the plane we're looking for

    w[z] = Math.cos(degrees_to_radians(siteDec)) * Math.sin(degrees_to_radians(asumith));
    w2[z] = w[z];
    w[y] = ((-1 * w[z] * moonPosUnit[y] * moonPosUnit[z]) + (moonPosUnit[x] * Math.sqrt(1 - Math.pow(moonPosUnit[z], 2) - Math.pow(w[z], 2)))) / (Math.pow(moonPosUnit[x], 2) + Math.pow(moonPosUnit[y], 2));
    w2[y] = ((-1 * w2[z] * moonPosUnit[y] * moonPosUnit[z]) - (moonPosUnit[x] * Math.sqrt(1 - Math.pow(moonPosUnit[z], 2) - Math.pow(w2[z], 2)))) / (Math.pow(moonPosUnit[x], 2) + Math.pow(moonPosUnit[y], 2));
    w[x] = ((-w[y] * moonPosUnit[y]) - (w[z] * moonPosUnit[z])) / moonPosUnit[x];
    w2[x] = ((-w2[y] * moonPosUnit[y]) - (w2[z] * moonPosUnit[z])) / moonPosUnit[x];

    //finding right ascenction, using the cos variant, output in radians

    rightAscencion = Math.acos(((w[z] * w[x] * Math.sin(siteDec)) + (w[y] * Math.cos(siteDec) * Math.cos(asumith))) / ((Math.pow(w[z], 2) - 1) * Math.cos(siteDec)));
    rightAscencion2 = Math.acos(((w2[z] * w2[x] * Math.sin(siteDec)) + (w2[y] * Math.cos(siteDec) * Math.cos(asumith))) / ((Math.pow(w2[z], 2) - 1) * Math.cos(siteDec)));

    LANs = [radians_to_degrees(rightAscencion) - 90, radians_to_degrees(rightAscencion2) - 90];

    return LANs;
}



// This code was rendered unneeded via Longitude of ascending node = right acencion realization. I initially wanted to get a launch time, but that was difficult, and also not something i could easily enter into KSP.

//calculating time - may use KSP_RSS specific value for future me, also, why the fuck are you using this garbage guidance software?

//var longitude_in_hours = 75.4699/15; //longitude of wallops
//var siderial_Greenwich = radians_to_degrees(rightAscencion)/15 + longitude_in_hours;
//var siderial_Greenwich2 = radians_to_degrees(rightAscencion2)/15 + longitude_in_hours;






//helper functions
function unitVector(vector) {
    var magnitude = Math.sqrt(Math.pow(vector[x], 2) + Math.pow(vector[y], 2) + Math.pow(vector[z], 2));
    var unitVector = [vector[x] / magnitude, vector[y] / magnitude, vector[z] / magnitude];

    return unitVector;
}
function degrees_to_radians(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
}
function radians_to_degrees(radians) {
    var pi = Math.PI;
    return radians * (180 / pi);
}


