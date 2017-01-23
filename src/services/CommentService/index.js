import angular from 'angular';

module.exports = angular.module('ngReactExample.CommentService', [
]).service('CommentService', CommentService);

function CommentService() {
    const comments = [
        { text: 'First comment' },
        { text: 'Second comment' }
    ];

    this.setComments = (comments) => comments = comments;

    this.getComments = () => comments;
}
