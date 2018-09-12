console.log('js');

let myApp = angular.module('MyApp', []); // defining myApp with angular module

myApp.controller('WelcomeController', function () {
    let self = this;

    self.message = 'Hello';
    self.greet = function () {
        console.log('Greetings!')
    }

 })