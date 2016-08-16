var MyApp = angular.module('TODO',['ngAnimate']);

MyApp.controller('MainCtrl',function($scope,$animate,$timeout){
    $scope.TaskMass = [];
     $scope.RememberTask = [];
    $scope.FindForRemember = [];
    $scope.From = 0;
    $scope.ShowFrom = function (elem) {
        if($scope.TaskMass.length>($scope.From+5)) {
        $scope.From+=5;
            $timeout(function(){ $scope.FindForRemember = $(elem.target.parentElement).find('li');
                                 angular.forEach($scope.FindForRemember,function(MassEll,index){
                                  angular.forEach($scope.RememberTask,function(el,i){
                                      if($(MassEll).find('span').html() == el) {
                                            $(MassEll).find('input').attr("checked","checked");
                                           $(MassEll).animate({
                                                 opacity:0.5,
                                                  },0,function(){
                                                     $(this).css({'text-decoration':'line-through'});
           });
                                      }
                                  })
                            })
                               },100);
                
        }
    }
    $scope.BackShow = function (elem) {
        if($scope.From >0){
        $scope.From-=5;
        $timeout(function(){ $scope.FindForRemember = $(elem.target.parentElement).find('li');
                            angular.forEach($scope.FindForRemember,function(MassEll,index){
                                   angular.forEach($scope.RememberTask,function(el,i){
                                      if($(MassEll).find('span').html() == el) {
                                           $(MassEll).find('input').attr("checked","checked");
                                           $(MassEll).animate({
                                            opacity:0.5,
                                        },0,function(){
                                               $(this).css({'text-decoration':'line-through'});
           });
                                      }
                                  })
                            })
                                
                           },100);
              
        }
    }
    $scope.AddTask = function(task) {
        ($scope.TaskMass.length>4)?( $scope.next = true):( $scope.next = false);
        if(task!=null){
        $scope.TaskMass.push(task);
        }
        $scope.task = null;
    }
    $scope.Done_Unfinish = function(val,tsk,elem){
    if(val == undefined){
        val = false;
    }
    if($scope.RememberTask.indexOf(tsk) == -1) {
      $scope.RememberTask.push(tsk);
    }
        
               if(val == true){
           $(elem.target.parentElement).animate({
            opacity:0.5,
        },400,function(){
               $(this).css({'text-decoration':'line-through'});
           });
           
       }
        else if(val == false) {
            $scope.RememberTask.splice($scope.RememberTask.indexOf(tsk),1);
            $(elem.target.parentElement).animate({
            opacity:1
        },400,function(){
               $(this).css({'text-decoration':'none'});
           });
        }
        
    }
})
MyApp.filter('StartShow',function(){
    return function( element,from) {
        var ShowMass = [];
        var k = 0;
        for(var i = from,k = 0;i<element.length;i++,k++){
            ShowMass[k] = element[i];
        }
        return ShowMass;
    }
})