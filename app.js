/**
 * Created by janko on 17/10/2016.
 */
angular.module('app', []);

angular.module('app').controller('TodoController', function ($scope, TasksFactory) {
    $scope.tasks = TasksFactory.tasks;
    $scope.addTask = function (newTask) {
        var id = $scope.tasks.length + 1;
      $scope.tasks.push({id: id, task: newTask, done: false});
    };


});



angular.module('app').controller('LeftTasksListController', function ($scope, TasksFactory) {
    $scope.tasks = TasksFactory.tasks;
});

angular.module('app').controller('RightTaskListController', function ($scope, TasksFactory) {
   $scope.tasks = TasksFactory.tasks;
});

angular.module('app').factory('TasksFactory', function () {
    var tasks = [
        {
            id: 1,
            task: 'Pomij posodo',
            done: false
        },
        {
            id: 2,
            task: 'Nanosi drva',
            done: false
        },
        {
            id: 3,
            task: 'Naredi domačo nalogo',
            done: false
        }
    ];

    var result = {
        tasks: tasks
    };

    return result;


});