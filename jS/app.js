var app = {
    init : function () {
        console.log('Je viens de charger mon fichier JS')
      },
    };

    
//J'appel app.init, à la fin du chargment de ma page HTML
document.addEventListener('DOMContentLoaded', app.init);