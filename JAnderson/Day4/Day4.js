// import express js module
const express = require('express');

// create an express application abject
const app = express()

app.set("view engine", "ejs")

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

var characterList = []
characterList.push(new Character('Goo Man', 'Goo', 'Trash Eater'))

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

characterList[0].pickupItem('Sword');
characterList[0].unequipItem('arm_p');

// create a GET endpoint
app.get('/profile/:characterid', (req, res) => {
  var foundProfile = characterList.find(character => character.id == req.params.characterid);
  if (foundProfile) {
    //Render a template called 'profile' from the views folder
    //And send it a variable called "sendData"
    res.render('profile', {
      sendData: characterList[0]
    })
  } else {
    res.redirect('/new');
  }

});

//This endpoint creates a new character
app.get('/new', (req, res) => {
  characterList.push(new Character('Man', 'Man', 'Man'))
  res.redirect('/profile/' + characterList[characterList.length - 1].id)
})

// start a http listen server
app.listen(3000)
