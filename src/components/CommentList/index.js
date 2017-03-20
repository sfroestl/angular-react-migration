import angular from 'angular';
import { reactToAngularComponent } from '../../services/AngularReactHelper';
import renderer from './renderer';

module.exports = angular.module('ngReactExample.commentList', [
]).component('commentList', reactToAngularComponent(renderer));
