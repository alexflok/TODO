<!DOCTYPE html>
<html>
    <head>
     <link href='https://fonts.googleapis.com/css?family=Shadows+Into+Light' rel='stylesheet' type='text/css'>
      <link href="css/bootstrap.css" rel="stylesheet">
      <link href="css/font-awesome.css" rel="stylesheet">
      <link href="style.css" rel="stylesheet">
      <script src="js/jquery.js"></script>
      <script src="js/bootstrap.js"></script>
       <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
      <script src="https:////ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular-animate.js"></script>
      <script src="main.js"></script>
    </head>
    <body ng-app="TODO">
        <div ng-controller="MainCtrl" class="container main_contr">
              <div class="col-lg-3 col-md-3 col-sm-2 hidden-xs"></div> 
            <div class="col-lg-6 col-md-6 col-sm-8 col-xs-12 myList">
             <div class="AddForm">
                 <form class="form-inline">
                    <div class="input-group" style="position:relative; width:100%;" >
                     <input type="text" class="form-control TaskCtrl" id="task" ng-model="task" style="border-radius:20px;">
                       <label class="label myLb" for="task" style="z-index:100000;">Put task</label>
                         <span class="input-group-btn"><input type="submit" class="btn-primary btn form-control " value="Ok" ng-click="AddTask(task)" style="border-radius:50%;" ></span>
                     </div>
                 </form>
             </div>
             <br>
              <div class="list">
                  <ul style=" list-style-type: none; padding:10px;">
                      <li ng-repeat="tsk in TaskMass | StartShow:From | limitTo:5"><input type="checkbox" ng-model="TaskCheck" ng-true-value = "true" ng-false-value = "false" ng-click="Done_Unfinish(TaskCheck,tsk,$event)">&nbsp;<span>{{tsk}}</span></li>
                  </ul>
                  <span class="fa-arrow-right fa Next " ng-show="next" ng-click="ShowFrom($event)">Next</span>
                  <span class="fa-arrow-right fa Back " ng-show = "next" ng-click =" BackShow($event)">Back</span>
              </div> 
              </div>
            <div class="col-lg-3 col-md-3 col-sm-2 hidden-xs" ></div> 
        </div>
    </body>
</html>