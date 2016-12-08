1. logout after refreshing page gave strange errors, turns out you need to dispatch the redirect. Also setting logout state causes rerender which could break certain jsx elements.
