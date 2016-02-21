import 'angular-material/angular-material.min.css';

import angular from 'angular';
import animate from 'angular-animate';
import aria from 'angular-aria';
import material from 'angular-material'
import uirouter from 'angular-ui-router';

import routing from './app.config';
import home from './features/home';

angular.module('app', [uirouter, home, animate, aria, material])
  .config(routing);
