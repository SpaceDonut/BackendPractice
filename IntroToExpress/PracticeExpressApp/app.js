const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send("Hi there, welcome to my wonderful duwang!");
});

app.get("/speak/:animal", function (req, res) {
    //Colt bootcamp way
    let sounds = {
        pig: 'Oink',
        cow: 'Moo',
        dog: 'Woof Woof',
        weasel: 'WAARGH',
        cat: 'I hate you human!',
    }
    let animal = req.params.animal.toLowerCase();
    let sound = sounds[animal];

    console.log(`Name: ${animal} , sound: ${sound}`)
    res.send(`The ${animal} says '${sound}'`);

    //my random solution , without too much thinking
    // let animal = req.params.animal;
    // let print = (sound) => {
    //     console.log(`Name: ${animal} , sound: ${sound}`)
    //     res.send(`The ${animal} says '${sound}'`);
    // }
    // let sound = "";
    // switch (animal) {
    //     case "pig":
    //         // print('Oink')
    //         sound = 'Oink';
    //         break;
    //     case "cow":
    //         // print('Moo')
    //         sound = 'Moo';
    //         break;
    //     case "dog":
    //         // print('Woof Woof');
    //         sound = 'Woof Woof';
    //         break;
    //     case "weasel":
    //         // print('WAARGH')
    //         sound = 'WAARGH';
    //         break;
    //     case "cat":
    //         // print('MEWO~')
    //         sound = 'MEWO~';
    //         break;
    //     default:
    //       
    //       break;
    // }
    // console.log(`Name: ${animal} , sound: ${sound}`)
    // res.send(`The ${animal} says '${sound}'`);

});

app.get("/repeat/:val/:times", function (req, res) {
    let val = req.params.val;
    let times = Number(req.params.times);
    let print = "";
    console.log(`val: ${val} , times: ${times}`)
    for (let i = 0; i < times; i++) {
        // console.log(`before print - val: ${val}, i: ${i}, print: ${print} `)
        print += `${val} `;
        // console.log(`after print - val: ${val}, i: ${i}, print: ${print} `)
    }
    console.log(print)
    res.send(print);
});

app.get("*", function(req, res){
    console.log('Page not found');
    res.send('Sorry , page not found.. What are you doing with your life!?')
});

app.listen(3000, function () {
    console.log("Server started , listening to port 3000!")
});