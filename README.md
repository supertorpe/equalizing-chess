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

There area already these functions available:

- Original "equalizing" function: https://gist.githubusercontent.com/supertorpe/c18a5f320db997e52f25aecac5f9ceb1/raw/54f4acb908dce74b94641d4d1f1ed3a035452375/equalizing-chess-selection.js

- Best move: https://gist.githubusercontent.com/supertorpe/a76f92ee66a9feca3f09c0e3d8d4c4da/raw/93a972026f040e3e84a9541943329fbad8ef7dd9/equalizing-chess-bestmove.js

The webapp dynamically loads the function from the URL and uses it to choose the movement of the engine.

You can write your own function and set its URL in the settings screen.