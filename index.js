// Write your solution here!
const drivers=["Milo", "Otis", "Garfield"]
function destructivelyAppendDriver(name){
  drivers.push("Ralph");
  return drivers;
} 
function destructivelyPrependDriver(name){
  drivers.unshift("Bob");
  return drivers;
}
function destructivelyRemoveLastDriver(){
  drivers.pop("")
  return drivers;
}
function destructivelyRemoveFirstDriver(){
  drivers.shift("")
  return drivers;
}
function appendDriver(name){
  newDriver=drivers.slice();
  newDriver.push(name);
  return newDriver;
}
function prependDriver(name){
  newDriver=drivers.slice();
  newDriver.unshift(name);
  return newDriver;
}
function removeLastDriver(){
  newDriver=drivers.slice();
  newDriver.pop(name);
  return newDriver;
}
function removeFirstDriver(){
  newDriver=drivers.slice();
  newDriver.shift(name);
  return newDriver;
}