
Pokedex made with React Redux
- Babel/Webpack
- SCSS

live at: https://pokedexredux.herokuapp.com

Code found in /dev/ folder

Search through the pokedex and view different pokemon information.

Encounter pokemon and catch them with the encounter button on list view, and evolve pokemon you have caught in the pokemon information view

ISSUES

Dragscroll library doesnt work on mobile with the pokemon information description box when the description goes overflow of the containing div.



FUTURE DEVELOPMENT

Change Pokemon data source from test data in Redux Store to using the PokeAPI
Using api calls through Node server to gather data
Filter this data with mongodb or postgreSQL
Implement GraphQL for calling this data from a backend database

This more accurate data will cause some design layout issues as there is more in depth data not yet account for with output (eg. evolution trees that split or mega evolutions) so small changes to the UI and data manipulation will need to be implemented.

Add sounds and event music.

Possible future development
Considering some form of login system and userbase for retaining user data
Either that or simply using cookies/localstorage to retain pokemon previously caught/seen/evolved on each device

