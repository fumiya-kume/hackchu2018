window.onload = function(){

  // var image = document.getElementById('image');

  var milkcocoa = MilkCocoa.connectWithApiKey('bluejdx9pwg5.mlkcca.com', 'PILCBGIODMIKICFL', 'iNVecMOSJGFmBTfOBKCffKRINJgADlfCVBlmPBKT');
  var ds = milkcocoa.dataStore('toothbrush');

  // ds.on('send', changeViewFromSentMode);
Å@ds.on('send', function() {
  alert('sendÇ≥ÇÍÇ‹ÇµÇΩÅI');
  });

Å@function sendMilkcocoa(){
	ds.push({title : 'toothbrush', content : 'params'});
  }

};

