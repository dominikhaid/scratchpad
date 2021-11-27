class Location {
  final int x;
  final int y;

  const Location(this.x, this.y);

  @override
  String toString() {
    return 'Location{x: $x, y: $y}';
  }
}

void main(List<String> arguments) {
  // ignore: prefer_const_constructors
  Location myLocation = Location(5, 50);
  print(myLocation.x);
  print(myLocation.y);
}
