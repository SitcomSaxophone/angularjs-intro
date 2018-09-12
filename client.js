console.log('js');

let myApp = angular.module('MyApp', []);

myApp.controller('WelcomeController', function () {
    let self = this;

    self.message = 'Hello';
})