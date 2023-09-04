console.log('.............Cart Simulator............\n')

//initialializing input package
const prompt = require('prompt-sync')()


// declaring the cart object
const cart = {
    //initialize the array
    cartArray: [],
    
    //method that adds item or item to the cartArray
    addToCart(item) {
      this.cartArray.push(item);
    },
    
    //method that remove item or item to the cartArray
    removeFromCart(item) {
      const index = this.cartArray.indexOf(item);
      if (index !== -1) {       //checks if the item exists in the array
        this.cartArray.splice(index, 1); //removes only the item found with the indexOf
      }
    },
    
    //standBy command to
    standBy(command) {
      switch (command) {
        case 'add':
          const itemToAdd = prompt('Enter the item to add: ');
          this.addToCart(itemToAdd);
          break;
          
        case 'remove':
          const itemToRemove = prompt('Enter the item to remove: ');
          this.removeFromCart(itemToRemove);
          break;
          
        case 'show-items':
          console.log(this.cartArray.join(', '));
          break;
          
        case 'length':
          console.log(`Number of items in the cart: ${this.cartArray.length}`);
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
  
  //function that associate user choice to standBy functions
  function choose(choice){
    if (choice == 1) cart.standBy('add'); // Adds a item to the cart
    else if (choice == 2) cart.standBy('remove'); // Removes a item from the cart
    else if (choice == 3) cart.standBy('show-items'); // Shows all items in the cart
    else if( choice == 4) cart.standBy('length'); // Logs the number of items in the cart
    else if (choice == 0) cart.standBy('exit'); // Exits the program
    else console.log ('invalid command')
  }
 
  //loop command to keep the program running
  let command;
do{
        console.log(`
    .............To add an item enter: 1
    .............To remove an item enter: 2
    .............To show all items enter: 3
    .............To check the number of items: 4
    .............To exit the program: 0
    `)
    command = prompt('.............Choose: ')
    choose(command)

} while (command != 0)
