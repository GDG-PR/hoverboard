(function() {
  'use strict';

  var product = {
    'p' : 'C49578F0FAFACB2BB47ECF8FFAC54640',
    'm' : '5EFDDD7A3737FC9774FDDF8F5431737C',
    'g' : '9CBA116CA7A7C54554F6CF9F522900ED',
    'gg': 'E2A933EA10104C1994D54F8649821B92',
    'xg': '3EC31CBDC0C0A51224BD4FBAEB552479',
    'bp' : '8E3C4E99CACA688BB4EB1FAFBC66985A',
    'bm' : 'CC16B92AACAC1F4444671F95BBA71F71',
    'bg' : '0F995DB70C0C426774860FBB16965B3A',
    'bgg': '5617379C070780A774805FA1704A01A1'
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
