// angular.module("ngAudio.LiveDemo",['ngAudio'])
// .controller("DemoController",function($scope){
//     $scope.message = function() {
//         alert("VAMOS HACER UNO NEGOCIO");
//     }
// });

    angular.module("Demo", ['ngAudio'])
        .run(function(ngAudio, $rootScope) {
            ngAudio.play('sound.mp3');
            $rootScope.gong = ngAudio.load('audio/chinese-temple-gong-02.mp3');
            $rootScope.gong.volume = 0.5;
            $rootScope.laugh = ngAudio.load('audio/man-laughing-01.mp3');
            $rootScope.beer = ngAudio.load('audio/beer-pour-glass-02.mp3');
            $rootScope.melody1 = ngAudio.load('audio/song1.mp3');
            $rootScope.melody2 = ngAudio.load('audio/song2.mp3');
            $rootScope.melody3 = ngAudio.load('audio/song3.mp3');
            $rootScope.melody4 = ngAudio.load('audio/song4.mp3');
            $rootScope.melody5 = ngAudio.load('audio/song5.mp3');
            $rootScope.ditty = ngAudio.load('audio/that.mp3');
        });