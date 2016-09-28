var app=angular.module('app',[]);

app.controller('myCtrl',function($scope,$timeout){
    $scope.rouletteswitch1=true;
    $scope.rouletteswitch2=false;

    $scope.switchroulette=function(value){
        $scope.rouletteswitch1=value;
        $scope.rouletteswitch2=!value;
        //reset roulette condition
        round=0;
        document.getElementById('roulette').style.transition="ease-out 0s";
        document.getElementById('roulette').style.transform="rotate("+round+"deg)";
        $scope.decision="";
    }

    //roulette app
    //round is the degree that will rotate.
    var round=0;

    $scope.playroulette=function(){
        /*timer is that to record the timeout function start point, 
        and previous timesout function will be cancelled if click again.*/
        var timer=0;
        return function(){
               $timeout.cancel(timer);
               round+=1080+Math.ceil(Math.random()*360);
               document.getElementById('roulette').style.transition="ease-out 5s";
               document.getElementById('roulette').style.transform="rotate("+round+"deg)";
                
                //judge the degree and final section roulette pointer shows
                if(round%360<=36){
                    timer=$timeout(function(){
                       $scope.decision="images/cooking.png";
                    },5100);
                }else if(round%360>36&&round%360<=108){
                    timer=$timeout(function(){
                        $scope.decision="images/washing.png";
                    },5100);
                }else if(round%360>108&&round%360<=180){
                    timer=$timeout(function(){
                        $scope.decision="images/game.png";
                    },5100);
                }else if(round%360>180&&round%360<=252){
                    timer=$timeout(function(){
                        $scope.decision="images/learning.png";
                    },5100);
                }else if(round%360>252&&round%360<=324){
                    timer=$timeout(function(){
                         $scope.decision="images/movie.png";
                    },5100);
                }else if(round%360>324&&round%360<=360){
                    timer=$timeout(function(){
                       $scope.decision="images/cooking.png";
                    },5100);
                }
                console.log(round);
        }
    }();
})