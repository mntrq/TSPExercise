angular.module('todo', [])
    .controller('page', ['$scope',
        function ($s) {
            var uiCurrent = 1;
            $s.ui = {
                current: function (newUICurrent) {
                    if (typeof newUICurrent != 'undefined') {
                        uiCurrent = newUICurrent;
                    }
                    return uiCurrent;
                },
                isCurrent: function (c) {
                    return (uiCurrent === c);
                }
            };
    }])
    .controller('tab1', ['$scope',
        function ($s) {
            $s.list = [{
                name: 'buy eggs',
                complete: false
            }, {
                name: 'buy milk',
                complete: true
            }];

    }])
    .controller('tab2', ['$scope',
        function ($s) {
        $s.list = [{
            name: 'collect underpants',
            complete: false
        }, {
            name: '...',
            complete: false
        }, {
            name: 'profit',
            complete: false
        }];
    }])
    .factory('todoApi', [function () {
    var data = [
        {
            list: 'shopping',
            name: 'buy eggs',
            complete: false
        },
        {
            list: 'shopping',
            name: 'buy milk',
            complete: true
        },
        {
            list: 'business',
            name: 'collect underpants',
            complete: false
        },
        {
            list: 'business',
            name: '...',
            complete: false
        },
        {
            list: 'business',
            name: 'profit',
            complete: false
        }
    ];
    return {
        query: function () {
            return data;
        },
        get: function (id) {
            return data[id];
        },
        create: function(obj) {
            data.push(obj);
            return obj;
        },
        update: function(id, obj) {
            data[id] = obj;
            return obj;
        },
        destroy: function(id) {
            data.splice(id, 1);
            return data;
        }
    };
}]);
