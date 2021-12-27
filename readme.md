# RULE 110
- wikipedia: https://en.wikipedia.org/wiki/Rule_110
***
Rule 110 is an [elementary cellular automaton](https://en.wikipedia.org/wiki/Elementary_cellular_automaton), and one of the most interesting because it is the only one of which [Turing completeness](https://en.wikipedia.org/wiki/Turing_completeness) has been proven.

Similar to [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), Rule 110 illustrates ["Class 4 Behaviour"](https://www.wolframscience.com/nks/p231--four-classes-of-behavior/) -- something that is not entirely stable, nor entirely chaotic.  "Localized structures appear and interact in complex ways".

Rule 110 has been proven by [Matthew Cook](https://en.wikipedia.org/wiki/Matthew_Cook) to be capable of [universal computation](https://en.wikipedia.org/wiki/Universal_Turing_machine) -- which means that, on its own, it can compute any possible computation that can be computed by any other computer device.  Whether such an operation, or set of operations, may be feasible is another question.
***
This is my first successful implementation of Rule 110.

The implementation accepts an unlimited input of bits and computes a set of digital progeny based on Rule 110.  Rule 110 states that any particular set of three input bits will result in a particular output bit centered at a location dependent upon the location of the input pattern.

![Rule 110 Patterns](https://upload.wikimedia.org/wikipedia/commons/b/b5/One-d-cellular-automaton-rule-110.gif)

For instance, a bit string as follows   : [0, 1, 1, 0, 1, 0]

Will result in the following output     : [1, 1, 1, 1, 1, 0]

This implementation will take a starting input (seed) and produce any number of iterative generations based on Rule 110.  Some inputs will produce interesting (ie: Class 4) results, as pictured below
according to the canonical [Rule 110 patterns](https://en.wikipedia.org/wiki/Rule_110).

Input seed: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];

![Rule 110 Output Image](https://i.imgur.com/Y2WNbH9.png)


Other relevant information:

Rudy Rucker -- [The Lifebox, The Seashell, and The Soul](https://www.rudyrucker.com/lifebox/)
