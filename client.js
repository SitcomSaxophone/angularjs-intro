let myApp = angular.module('MyApp', []); // defining myApp with angular module



myApp.controller('WelcomeController', function () {
    let self = this;

    self.message = '';
    self.pointyThings = [
        {
            name: 'knives', sharpness: 10, isPoisonous: false
        },

        {
            name: 'wits', sharpness: 20, isPoisonous: true
        },

        {
            name: 'sea urchins', sharpness: 5, isPoisonous: true
        }
    ];
    self.greet = function () {
        console.log(`Hello ${self.message}!!`);
        // $('#outputList').empty();
        // self.pointyThings.push(self.message);
        // for (let value of self.pointyThings) {
        //     $('#outputList').append(`<li>${value}</li>`);
        // }
    }

})