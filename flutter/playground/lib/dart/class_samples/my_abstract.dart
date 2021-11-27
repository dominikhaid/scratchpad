abstract class MyPosition {
  int x = 0;
  int y = 0;

  void move(int x, int y);

  @override
  String toString() {
    return 'MyPosition{x: $x, y: $y}';
  }
} // abstract class construct

class Location extends MyPosition {
  @override
  void move(int x, int y) {
    // TODO: implement move
  }
} // inherit from abstract class

class UseAsInterface implements MyPosition {
  @override
  int x;

  @override
  int y;

  UseAsInterface({int x = 0, int y = 0})
      : x = x,
        y = y;

  @override
  void move(int x, int y) {
    // TODO: implement move
  }

  @override
  String toString() {
    return 'UseAsInterface{x: $x, y: $y}';
  }
} // implement from abstract class

void main(List<String> arguments) {
  Location myLoc = Location();
  print(myLoc);
  UseAsInterface myPos = UseAsInterface(y: 111);
  print(myPos is MyPosition);
  print(myLoc is MyPosition);
}
