# frontend-nanodegree-arcade-game
## About
This arcade game is a fork project from an Nanodegree exercise from Udacity

## Play Instructions
To run the game, open index.html

Controls and game rules:
* move player with keyboard keys: left, right, up, down
* collision with bugs(enemies) decreases lives count by one
* reaching the top of map increases score by 100 points
* collision with bugs decreases lives count and player score
* collecting a gem adds player score points

## Game Structure
The game has the following structure:
```
DIRECTORY: frontend-nanodegree-arcade-game:
    |                                     |->file: index.html
    |                                     |->file: README.md
    |
    |\
    | \_DIRECTORY: css:
    |                 |->file: style.css
    |
    |\
    | \_DIRECTORY: images:
    |                    |->file: char-boy.png
    |                    |->file: char-cat-girl.png
    |                    |->file: char-horn-girl.png
    |                    |->file: char-pink-girl.png
    |                    |->file: char-princess-girl.png
    |                    |->file: enemy-bug.png
    |                    |->file: Gem Blue.png
    |                    |->file: Gem Green.png
    |                    |->file: Gem Orange.png
    |                    |->file: grass-blogck.png
    |                    |->file: Heart.png
    |                    |->file: Key.png
    |                    |->file: Rock.png
    |                    |->file: Selector.png
    |                    |->file: stone-block.png
    |                    |->file: water-block.png
    |
    |\
    | \_DIRECTORY: js:
    |                |->file: actionFigure.js
    |                |->file: app.js
    |                |->file: enemy.js
    |                |->file: engine.js
    |                |->file: gem.js
    |                |->file: genericObjects.js
    |                |->file: player.js
    |                |->file: resources.js
    |                |->file: rock.js
```
### Main Files with a small explanation
* actionFigure.js
    * A JS file that contain a generic Object for the Enemy and Player Objects
* app.js
    * A JS file with the main rules of the game
* enemy.js
    * A JS file with the Enemy object and extends an ActionFigure 
* engine.js
    * A JS file that was build by Udacity instructors and it responsible to call render and updates of objects
* gem.js
    * A JS file that is responsible to build the Gem Object and extends a GenericObject
* genericObjects.js
    * A JS file that has the main structure of Objects that cant move
* player.js
    * It is the JS file with a player structure and extends a ActionFigure
* resources.js
    * It is a JS file that was build by Udacity instructors for load images and it was not modified
* rock.js
    * It is a JS file with Rock attributes and extend a GenericObjectss