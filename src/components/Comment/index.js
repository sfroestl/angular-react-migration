import angular from 'angular';

module.exports = angular.module('ngReactExample.comment', [
]).component('comment', {
    bindings: {
        comment: '<',
    },
    template: '<p>{{ $ctrl.comment.text }}</p>',
    controller: function() {
    }
});
