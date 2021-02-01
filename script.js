// ORIGINAL CODE ------- JUST UN COMMNET THE LINES BELOW!!!_____

var data;
var bubbleWidth = 12;

//political party color variables
var demColor = 'rgba(53,25,255, 0.5)';
var repColor = 'rgba(217,0,56, 0.5)';
var indiColor = 'rgba(255,255,0, 0.25)';

// loads JSON with 116th Congressional House member stats 
function preload() {
  data = loadJSON("members.json");
}
function setup() {
  createCanvas(750, windowHeight * .6);
  var button = select('#submit');
  button.mousePressed(repLookUp);
  background(200, .0);
}
function repLookUp() {
  createCanvas(750, windowHeight * .6);
  if(data) {
      for (var i = 0; i < data.members.length; i++) {
        noStroke();
        // stroke('rgba(255,255,255, 0.33)');
      var party = data.members[i].party[0]; // defines variable for party affiliation 
      var voteStat = data.members[i].votes_against_party_pct; // defines variable for vote against party percentage
      var voteLocation = ((750) / (100.01 / voteStat)); // converts the stat to a percentage of the canvas
        if(party === "D") { // DEMOCRAT fill & postision
          fill(demColor);
          ellipse(voteLocation, random(height), bubbleWidth, bubbleWidth);
        };
        if (party === "R") { // REPUBLICAN fill & postision 
          fill(repColor);
          ellipse((750) - voteLocation, random(height), bubbleWidth, bubbleWidth);
        }; 
        if(party === "I") { // INDEPENDENT fill & postision 
          fill(indiColor);
          ellipse(voteLocation, random(height), bubbleWidth, bubbleWidth);
        }
      }
    }
  }