# equalizing-chess
Equalizing chess allows you to play against stockfish in such a way that it does not try to beat you with all its strength, but rather balance the game with each move to try to keep the evaluation as balanced as possible.

NOTE: this project is in early development state. The code will be published in march (2024)

## Selection funtion

The webapp uses a selection function to choose the move among the candidates provided by stockfish.
It supports externalized functions (i.e. hosted in a gist), so that YOU can write your own selection function:
```javascript
export function selectCandidate(candidates) {
  // TO DO: select and return a candidate from the list
}
```
"candidates" is an array containing the moves provided by stockfish, i.e.: [{"score":-27,"pv":"e7e6"},{"score":-30,"pv":"g8f6"},{"score":-27,"pv":"e7e6"}...]

There are already these functions available:

- Original "equalizing" function: https://gist.githubusercontent.com/supertorpe/c18a5f320db997e52f25aecac5f9ceb1/raw/54f4acb908dce74b94641d4d1f1ed3a035452375/equalizing-chess-selection.js

- Best move: https://gist.githubusercontent.com/supertorpe/a76f92ee66a9feca3f09c0e3d8d4c4da/raw/93a972026f040e3e84a9541943329fbad8ef7dd9/equalizing-chess-bestmove.js

- Mean score value: https://gist.githubusercontent.com/supertorpe/1ec6275e1f8ac6de55d3da754f3a1f9f/raw/c9a655e1c5dcf3dbb0061622623cee7f26f5f7b8/equalizing-chess-mean-move.js

The webapp dynamically loads the function from the URL and uses it to choose the movement of the engine.

You can write your own function and set its URL in the settings screen.

## Initial position

It's possible to set an initial FEN:  [https://supertorpe.github.io/equalizing-chess/#/equalizing-chess/fen/7k/7p/8/8/8/8/P7/K7 w - - 0 1](https://supertorpe.github.io/equalizing-chess/#/equalizing-chess/fen/7k/7p/8/8/8/8/P7/K7%20w%20-%20-%200%201)
