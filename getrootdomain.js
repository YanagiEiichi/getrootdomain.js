var getRootDomain = function() {
  // Create a random stream
  var rnd = '';
  while(rnd.length < 32) rnd += Math.floor(Math.random() * 2821109907456).toString(36);
  rnd = rnd.slice(0, 32);
  // Split current host
  var chips = location.host.split('.');
  // Try to write cookie
  var result = chips.pop();
  while(!~document.cookie.indexOf(rnd) && chips.length) {
    result = chips.pop() + '.' + result;
    document.cookie = rnd + '=; Domain=' + result;
  }
  // Remove cookie
  document.cookie = rnd + '=; Domain=' + result + '; Expires=Thu, 01 Jan 1970 00:00:00 GMT';
  return result;
};

