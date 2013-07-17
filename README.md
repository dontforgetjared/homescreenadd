homescreenadd
=============

A jQuery plugin that shows a popup with instructions on how to add your web app to a user's mobile home screen.

Usage
=====

Initialize plugin

$('#homescreen_elm').homescreenadd();

Close event

$('#homescreen_elm').homescreenadd('close');

Options
=======

Override instructions element (default is '.instructions')

$('#homescreen_elm').homescreenadd({instructionsElm: '.new_instrictions'});
