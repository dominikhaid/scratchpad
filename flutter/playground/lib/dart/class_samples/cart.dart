import 'dart:math';

enum ChannelTypes {
amazon, // 0
ebay // 1
}

class AmazonCart extends Cart {
AmazonCart() : super('amazon'); // initList
}

class EbayCart extends Cart {
// TODO read more initList
EbayCart() : super('ebay'); // initList
}

enum ComputerName {
macBook, // 0
macBookAir, // 1
macBookPro // 2
}

class StockItem {
int articleNo;
int amount;

StockItem(this.articleNo, this.amount);
}

class ComputerCart extends Cart {
final Map<ComputerName, StockItem> _stock = {
ComputerName.macBook: StockItem(4711, 12),
ComputerName.macBookAir: StockItem(4712, 8),
ComputerName.macBookPro: StockItem(4713, 6),
};

ComputerCart(String name) : super(name);

@override
int addItemAmout(int articleNo, [int amount = 1]) {
ComputerName? computerName;

_stock.forEach((key, value) {
if (value.articleNo == articleNo) computerName = key;
});

// NOTE ! is the opisition of ? and tells the linter that the value is present
if (_stock[computerName]!.amount >= amount) {
_stock[computerName]!.amount -= amount;
return super.addItemAmout(articleNo, amount);
}

return 0;
}

int addComputer(ComputerName computerName, [int amount = 1]) {
return addItemAmout(_stock[computerName]!.articleNo, amount);
}
}

class Cart {
  final Map<int, int> items= {}; //_item
  String _name; // property with underscore gets not exported

  // Constructor
  Cart(this._name);

  factory Cart.build(ChannelTypes type) {
      switch (type) {
          case ChannelTypes.amazon:
              return AmazonCart();
          case ChannelTypes.ebay:
              return EbayCart();
      }
  }


  //ECMA APORACH
  void set name(String val) => _name = val;
  String get name => 'Card -> $_name';


  // JAVA BASED APORACH
  /*String setName(String name) {*/
    /*return name;*/
  /*}*/

  /*String getName() {*/
    /*return name;*/
  /*}*/

  int addItemAmout(int articleNo, [int amount = 1]) {
    return _chgAmount(articleNo, amount);
  }

  int? removeItemAmout(int articleNo, [int amount = 1]) {
    final int num = _chgAmount(articleNo, amount * -1);
    if (num <= 0) return items.remove(articleNo);
    return num;
  }

  void removeItem(int articleNo) {
    items.remove(articleNo);
  }

  void clear() {
    items.clear();
  }

  int _chgAmount(int articleNo, [int amount = 1]) {
    items.update(
      articleNo,
      (value) => max(value + amount, 0), // das wert nie kleiner 0
      ifAbsent: () => amount,
    );

    //alternative way for add to cart
    // final int num = _items[articleNo] ?? 0;
    // _items[articleNo] = num + amount;
    return items[articleNo]!;
  }

  @override
  String toString() {
    return '$name() items => $items';
  }
}
