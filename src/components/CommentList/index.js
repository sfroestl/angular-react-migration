import angular from 'angular';

module.exports = angular.module('ngReactExample.commentList', [
    require('../../services/CommentService').name,
    require('../../services/AuthorService').name,
    require('../Comment').name,
]).component('commentList', {
    template:`
        <div>
            <comment ng-repeat="comment in $ctrl.comments" comment="comment"></comment>
        </div>
    `,
    controller: function(CommentService) {
        const $ctrl = this;
        $ctrl.comments = CommentService.getComments();
    }
});
