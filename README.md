# equalizing-chess
Equalizing chess allows you to play against stockfish in such a way that it does not try to beat you with all its strength, but rather balance the game with each move to try to keep the evaluation as balanced as possible.

## Selection funtion

The webapp uses a selection function to choose the move among the candidates provided by stockfish.
It supports externalized functions (i.e. hosted in a gist), so that YOU can write your own selection function:
```javascript
export function selectCandidate(candidates) {
  // TO DO: select and return a candidate from the list
}
```
"candidates" is an array containing the moves provided by stockfish, i.e.: [{"type":"cp","score":689,"pv":"h7h5"},{"type":"cp","score":-703,"pv":"h8g7"},
{"type":"mate","score":14,"pv":"a2d2"},{"type":"mate","score":16,"pv":"a2a4"},...]

When type=cp, the highest the score is, the strong is the movement. When type=mate, the score is the distance to mate.

There are already these functions available:

- Original "equalizing" function: https://gist.githubusercontent.com/supertorpe/c18a5f320db997e52f25aecac5f9ceb1/raw/e9c5985630c0da60aa0e7fa07b85f5c7c8d28a57/equalizing-chess-selection.js

- Best move: https://gist.githubusercontent.com/supertorpe/a76f92ee66a9feca3f09c0e3d8d4c4da/raw/e97bca4888a92251a0d0f345eb41d4582f10825e/equalizing-chess-bestmove.js
- Half the highest score value: https://gist.githubusercontent.com/supertorpe/1ec6275e1f8ac6de55d3da754f3a1f9f/raw/c9a655e1c5dcf3dbb0061622623cee7f26f5f7b8/equalizing-chess-mean-move.js

The webapp dynamically loads the function from the URL and uses it to choose the movement of the engine.

You can write your own function and set its URL in the settings screen.

## Initial position

It's possible to set an initial FEN:  [https://supertorpe.github.io/equalizing-chess/#/equalizing-chess/fen/7k/7p/8/8/8/8/P7/K7 w - - 0 1](https://supertorpe.github.io/equalizing-chess/#/equalizing-chess/fen/7k/7p/8/8/8/8/P7/K7%20w%20-%20-%200%201)

## Acknowledgments

Following software and resources has been used:

* [chess.js](https://github.com/jhlywa/chess.js): A Javascript chess library for chess move generation/validation, piece placement/movement, and check/checkmate/draw detection
* [chessground](https://github.com/lichess-org/chessground): A Javascript chess board
* [stockfish.js](https://github.com/nmrugg/stockfish.js) WASM implementation of Stockfish chess engine by Nathan Rugg (nmrugg)
* [TypeScript](https://www.typescriptlang.org): JavaScript with syntax for types
* [Ionic Framework](https://ionicframework.com): the mobile sdk for the web
* [Alpine.js](https://alpinejs.dev): lightweight JavaScript framework
* [Alpine i18n](https://github.com/rehhouari/alpinejs-i18n): Internationalization (i18n) support for Alpine.js
* [Navigo](https://github.com/krasimir/navigo): a simple vanilla JavaScript router
* [howler.js](https://github.com/goldfire/howler.js): javascript audio library for the modern web
* [enable-threads](https://github.com/josephrocca/clip-image-sorter/blob/main/enable-threads.js): creates a service worker that cross-origin-isolates the page
* [Vite](https://vitejs.dev): fast build tool
* [Logo](https://www.iconfinder.com/icons/1688870/business_chess_strategy_icon): designed by Inipagi from Iconfinder
* Chess pieces sets:  alpha (Eric Bentzen), [california (Jerry S)](https://sites.google.com/view/jerrychess/home), [cburnett (Colin M.L. Burnett)](https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces#/media/File:Chess_Pieces_Sprite.svg), [chess7 (Alexander Sizenko)](http://www.styleseven.com/php/get_product.php?product=Chess-7%20font), [chessnut (Alexis Luengas)](https://github.com/LexLuengas/chessnut-pieces), [chicago (Benjamin Friedrich)](https://github.com/benjfriedrich/chess-foundry-pack), companion (David L. Brown), [fantasy (Maurizio Monge)](https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces/Maurizio_Monge), [iowa (Benjamin Friedrich)](https://github.com/benjfriedrich/chess-foundry-pack), [kosal (philatype)](https://github.com/philatype/kosal), leipzig (Armando Hernández Marroquin), letter (???), merida (Armando Hernández Marroquin), mono (???), [oslo (Benjamin Friedrich)](https://github.com/benjfriedrich/chess-foundry-pack), [pirouetti](https://lichess.org/@/pirouetti), [pixel (therealqtpi)](https://twitter.com/therealqtpi), [reilly (Reilly Craig)](http://reillycraig.ca), riohacha (???), [shapes (Jimmie Elvenmark)](https://github.com/flugsio/chess_shapes), [spatial (Maurizio Monge)](https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces/Maurizio_Monge), [symmetric (Arcticpenguins)](https://www.dropbox.com/sh/jws5b0hgf71udsf/AAAZCxF4PQ02nkhwPZN3qHxia?dl=0)
* [Russo One](https://fonts.google.com/specimen/Russo+One): text font by Jovanny Lemonad
* [Move sound](https://github.com/lichess-org/lila/blob/master/public/sound/standard/Move.mp3): from lichess static resources
* [Capture sound](https://github.com/lichess-org/lila/blob/master/public/sound/standard/Capture.mp3): from lichess static resources
* [Success sound](https://freesound.org/people/shinephoenixstormcrow/sounds/337049/): shinephoenixstormcrow from freesound.org
* [Fail sound](https://freesound.org/people/Bertrof/sounds/131657/): Bertrof from freesound.org
