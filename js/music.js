window.addEventListener('load', function() {
  var ap = new APlayer({
    container: document.getElementById('my-aplayer'),
    fixed: true,
    mini: true,
    listFolded: true,
    loop: 'one',
    mutex: false,
    audio: [{
      name: '死亡不是生命的终点',
      artist: 'SASIOVERLXRD',
      url: '/music/song1.mp3',
      cover: '/music/cover1.jpg'
    }]
  });
});