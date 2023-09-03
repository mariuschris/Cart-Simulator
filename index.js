const prompt = require('prompt-sync')()

const cart = {
    cartArray: [],
    
    addToCart(product) {
      this.cartArray.push(product);
    },
    
    removeFromCart(product) {
      const index = this.cartArray.indexOf(product);
      if (index !== -1) {
        this.cartArray.splice(index, 1);
      }
    },
    
    standBy(command) {
      switch (command) {
        case 'add':
          const productToAdd = prompt('Enter the product to add: ');
          this.addToCart(productToAdd);
          break;
          
        case 'remove':
          const productToRemove = prompt('Enter the product to remove: ');
          this.removeFromCart(productToRemove);
          break;
          
        case 'show-items':
          console.log(this.cartArray.join(', '));
          break;
          
        case 'length':
          console.log(`Number of products in the cart: ${this.cartArray.length}`);
          break;
          
        case 'exit':
          console.log('Exiting the program.');
          break;
          
        default:
          console.log('Invalid command.');
          break;
      }
    }
  };
  


cart.standBy('add'); // Adds a product to the cart
cart.standBy('remove'); // Removes a product from the cart
cart.standBy('show-items'); // Shows all items in the cart
cart.standBy('length'); // Logs the number of products in the cart
cart.standBy('exit'); // Exits the program
