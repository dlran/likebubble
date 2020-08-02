var click_count = 0;
var emoticon = ['OωO', '(๑•́ ∀ •̀๑)', '(๑•́ ₃ •̀๑)', '(๑•̀_•́๑)', '（￣へ￣）', '(╯°口°)╯(┴—┴', '૮( ᵒ̌皿ᵒ̌ )ა', '╮(｡>口<｡)╭', '( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃', '(ꐦ°᷄д°᷅)'];
document.documentElement.onclick = function(e) {
  var $like = document.createElement('b');
  $like.style.color = '#ff5273';
  $like.style.zIndex = 9999;
  $like.style.position = 'absolute';
  $like.style.userSelect = 'none';
  $like.style.fontSize = Math.random() * 10 + 8 + 'px';
  $like.style.left = (e.pageX - 10) + "px";
  var y = e.pageY;
  $like.style.top = (y - 20) + "px";
  if (!(++click_count % 38)) {
    $like.innerText = emoticon[Math.floor(Math.random() * emoticon.length)];
  } else {
    $like.innerText = '❤';
  }
  var rise = 0;
  var interval;
  setTimeout(function() {
    interval = setInterval(function() {
      if (++rise == 160) {
        clearInterval(interval);
        document.body.removeChild($like);
      }
      $like.style.top = y - 20 - rise + 'px';
      $like.style.opacity = (160 - rise) / 100;
    }, 8);
  }, 70);
  document.body.appendChild($like);
};
