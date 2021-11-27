import 'dart:math';

final Map<int, int> items = {};

void removeItem(key) {
  items.remove(key); // remove by id
}

void clear() {
  items.clear(); //empty map
}

int update(int key, [int amount = 1]) {
  items.update(
    key,
    (value) => max(value + amount, 0), // das wert nie kleiner 0
    ifAbsent: () => amount,
  );

  return amount;
}
