import 'class_samples/cart.dart';
import 'class_samples/location.dart';
import 'class_samples/my_class.dart';

void main(List<String> arguments) {
  final Cart cart = Cart('amazon');

  cart.addItemAmout(12, 10);
  print(cart.items);

  // NOTE CASADE NOTATION
  cart
    ..addItemAmout(12, 12)
    ..addItemAmout(12, 12)
    ..addItemAmout(13, 13)
    ..removeItemAmout(13);

  print(cart.items);


  cart
        ..addItemAmout(11) // 1
        ..addItemAmout(12) // 1
        ..addItemAmout(13, 2) // 2
        ..addItemAmout(12, 3) // 4
      ;

  print('IS CART ? ${cart is Cart}');
  print(cart.items);

  // ECMA APROACH
  print(cart.name);
  
  //JAVA BASED APROACH
  //print(cart.getName());

  // NOTE init through factory function
  print(Cart.build(ChannelTypes.ebay));


  // Inerhit and Overwrite from Cart
  final ComputerCart compCart = ComputerCart('ebay-klein'); 
  compCart.addComputer(ComputerName.macBook, 11);
  compCart.addComputer(ComputerName.macBook);
  compCart.addComputer(ComputerName.macBook);
  print(compCart);
}
