function findFirstUniqueChar(s) {
  for(let c of s){
    if(s.indexOf(c)=== s.lastIndexOf(c)){
        return c;
    }
  }
  return -1;
}
console.log(findFirstUniqueChar( "aabbcdeff"))
console.log(findFirstUniqueChar( "aabb"))