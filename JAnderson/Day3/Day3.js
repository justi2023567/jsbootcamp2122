// import express js module
const express = require('express');

// create an express application abject
const app = express()

app.set("view engine", "ejs")

// create one character object
var character = {
  name: 'Goo Man',
  race: 'Goo',
  profession: 'Trash Eater',
  equipment: {
    head: {},
    chest: {},
    legs: {},
    arm_p: {},
    arm_s: {}
  },
  inventory: [],
  abilities: [],
  stats: {
    attack: 1,
    defense: 20,
    hp_current: 30,
    hp_max: 30
  },
  unequipItem: function(slot) {
    for (var slotName in this.equipment) {
      console.log(slotName)
      if (slotName == slot) {
        this.equipment.slotName = {}

      }
    }
  },
  //This method searchs for an item in the item list
  //And adds it to this character's inventory
  pickupItem: function(searchName) {
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

// create a GET endpoint
app.get('/', (req, res) => {
  character.pickupItem('Sword')
  character.unequipItem('arm_p');
  res.render('profile', { sendData: character })
  //Each of the character stats
  //One per paragraph
});

// start a http listen server
app.listen(3000)
