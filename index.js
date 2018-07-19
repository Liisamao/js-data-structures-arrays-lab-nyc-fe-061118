// Write your solution here!
const drivers=["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(name){
  drivers.push("Ralph");
  return drivers;
} 
function destructivelyPrependDriver(name){
  drivers.unshift("Bob");
}
function destructivelyRemoveLastDriver(){
  drivers.pop("")
}
function destructivelyRemoveFirstDriver(){
  drivers.shift("")
}
function apprenDriver(name){
  newDriver=drivers.slice();
}