(function() {
  'use strict';

  var product = {
    'p' : 'A347287D3939149994963F859A6DEB01',
    'm' : 'F1984A26D9D916DCC46BDF9996052383',
    'g' : '2936A9BC1111A69884D9AF80E3840238',
    'gg': '5ABC6FE88F8FC80FF4E22FBDDF81D998',
    'eg': 'AF34BFB2DADAD3C9948FCFB38785E58D',
    'bp' : 'B7A55933CDCD7C822456DF96A4A0B9A6',
    'bm' : 'F44FB5F59A9AD9FAA4E7BF87CC6E0968',
    'bg' : '2B86B7AAC6C64B6EE4F29FAD4BC37477',
    'bgg': '5A7ABAA78E8ECF3004D99FB0C0BF5863'
  };

  function comprar() {
    var selectedSize = false;
    var radios = document.getElementsByName('productSize');

    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        selectedSize = radios[i].value;
        break;
      }
    }

    if (selectedSize === false) {
      alert('Por favor selecione o tamanho da camiseta!');
      return false;
    }

    document.querySelector('#productCode').value = product[selectedSize];
    PagSeguroLightbox(document.querySelector('#venda'));
  }

  var tshirtButton = document.querySelector('.tshirt-button');
  tshirtButton.addEventListener('click', comprar);
})();
