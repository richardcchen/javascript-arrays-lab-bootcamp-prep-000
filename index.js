const app = "I don't do much."
function destructivelyAppendKitten(kitty){
  kittens.push(kitty);
}

function destructivelyPrependKitten(kitty){
  kittens.unshift(kitty);
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
}

function destrutivelyRemoveFirstKitten(){
  kittens.shift();
}