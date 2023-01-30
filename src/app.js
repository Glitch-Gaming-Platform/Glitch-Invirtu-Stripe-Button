let button_id = BWProperties.namespace + '-glitch-donate-button';

function init() {
  
   	if(BWEnvironment.stripe_payment_link) {
      
      	let button = document.getElementById(button_id);
      
        button.setAttribute('href', BWEnvironment.stripe_payment_link);
    }
}


init();
