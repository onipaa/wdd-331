// Fetch the JSON data
fetch('data/cart.json')
  .then(response => response.json())
  .then(data => {
    // Process the JSON data and generate CSS styles
    const promoCode = data.promoCode;
    const discount = data.discount;

    // Apply the generated CSS styles
    document.documentElement.style.setProperty('--promo-code', promoCode);
    document.documentElement.style.setProperty('--discount', discount + '%');

    
  });