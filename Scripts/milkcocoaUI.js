window.onload = function(){

  // var image = document.getElementById('image');

  var milkcocoa = MilkCocoa.connectWithApiKey('bluejdx9pwg5.mlkcca.com', 'PILCBGIODMIKICFL', 'iNVecMOSJGFmBTfOBKCffKRINJgADlfCVBlmPBKT');
  var ds = milkcocoa.dataStore('toothbrush');

  ds.push({ title: "toothbrush", content: 'stroke' });


  function sendMilkcocoa() {
      ds.push({ title: 'toothbrush', content: 'params' });
  }

Å@ds.on('send', function(){console.log('sendÇ≥ÇÍÇ‹ÇµÇΩÅI');});


};

