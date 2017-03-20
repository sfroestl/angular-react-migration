import angular from 'angular';

const setupRoutes = ($stateProvider) => {
    $stateProvider
        .state('home', {
            url: '/',
            resolve: {
                comments: (CommentService) => CommentService.queryComments(),
                authors: (AuthorService) => AuthorService.queryAuthors(),
            },
            controllerAs: '$ctrl',
            controller: function (comments) {
                this.comments = comments;
            },
            template: `
                <h3>Hello World!</h3>
                <comment-list comments="$ctrl.comments"></comment-list>
            `,
        });
};

const enableHtml5Mode = ($locationProvider) => {
    $locationProvider.html5Mode({ enabled: true });
};

module.exports = angular.module('ngReactExample', [
    require('angular-ui-router'),
    require('./services/CommentService').name,
    require('./services/AuthorService').name,
    require('./components/CommentList').name,
])
    .config(enableHtml5Mode)
    .config(setupRoutes);

