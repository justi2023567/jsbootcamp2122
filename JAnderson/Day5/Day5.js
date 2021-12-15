// import express js module
const express = require('express');

// create an express application abject
const app = express()

app.set("view engine", "ejs")


class GameMatch {
  constructor() {
    this.id = gameList.length + 1000;
    this.turn = 0; //This is the index of this.players whose turn it is
    this.players = [];
    this.round = 0;
  }
}


class Character {
  constructor(name, race, profession) {
    this.id = characterList.length + 1000;
    this.name = name
    this.race = race
    this.profession = profession
    this.equipment = {
        head: {},
        chest: {},
        legs: {},
        arm_p: {},
        arm_s: {}
      },
      this.inventory = []
    this.abilities = []
    this.stats = {
        attack: 1,
        defense: 20,
        speed: 5,
        hp_current: 30,
        hp_max: 30
      },
      this.unequipItem = function(slot) {
        for (var slotName in this.equipment) {
          console.log(slotName)
          if (slotName == slot) {
            this.equipment.slotName = {}

          }
        }
      },
      //This method searchs for an item in the item list
      //And adds it to this character's inventory
      this.pickupItem = function(searchName) {
        for (var item of item_list) {
          console.log(item.name);
          if (item.name == searchName) {
            console.log("Found a match!");
            this.inventory.push(item);
            break;
          }
        }
      }
  }
}


// This holds all possible items
var item_list = [{
    name: 'Sword',
    slots: 'arm_p',
    bonuses: {
      attack: 5
    }
  },
  {
    name: 'Shield',
    slots: 'arm_s',
    bonuses: {
      defense: 5
    }
  }
];

//
// Create Character list with two default characters
//

var gameList = [];
var characterList = [];
characterList.push(new Character('Goo Man', 'Goo', 'Trash Eater'))
characterList.push(new Character('Man', 'Man', 'Trash Eater'))

for (var character of characterList) {
  character.pickupItem('Sword');
}

characterList[0].pickupItem('Sword');

// create a GET endpoint
app.get('/game', (req, res) => {
  //search for the game in the game list
  var foundGame = gameList.find(game => game.id == req.query.gameid);
  //If a game was found, we can manipulate it
  if (foundGame) {
    //Check to see if the user sent the addcharacter query param (&addcharacter=xxxx)
    if (req.query.addcharacter) {
      //Check to see if there is a romm in this game's player list to add a character
      if (foundGame.players.length < 2) {
        // Find the character with the given addcharacter id
        var foundProfile = characterList.find(character => character.id == req.query.addcharacter);
        // If the character exists, add its id to this game's character list
        if (foundProfile) {
          foundGame.players.push(foundProfile.id)
        }
      }
    }
    //Render a template called 'profile' from the views folder
    //And send it a variable called "sendData"
    res.render('game', {
      sendData: foundGame
    })
  } else {
    res.redirect('/newgame');
  }
});


//This endpoint creates a new character
app.get('/newgame', (req, res) => {
  gameList.push(new GameMatch());
  res.redirect('/game/?gameid=' + gameList[gameList.length - 1].id)
})

// create a GET endpoint
app.get('/profile', (req, res) => {
  var foundProfile = characterList.find(character => character.id == req.query.characterid);
  if (foundProfile) {
    //Render a template called 'profile' from the views folder
    //And send it a variable called "sendData"
    res.render('profile', {
      sendData: characterList[0]
    })
  } else {
    res.redirect('/newprofile');
  }
});

//This endpoint creates a new character
app.get('/newprofile', (req, res) => {
  characterList.push(new Character('Man', 'Man', 'Man'))
  res.redirect('/profile/?characterid=' + characterList[characterList.length - 1].id)
})

// start a http listen server
app.listen(3000)
