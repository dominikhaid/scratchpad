class MyClass {
  static int myStaticNum = 1;
  static const double pi = 3.14;

  int num = 15;
  int? numNullable;

  MyClass();
  MyClass.generate(
      {required this.num, this.numNullable}); //initialize the class

  int sum(int b) {
    return num + b;
  }

  @override
  String toString() {
    return 'MyClass{num: $num, numNullable: $numNullable}';
  }
}

void main(List<String> arguments) {
  MyClass myClass = MyClass();
  print(myClass.sum(10));
  print(myClass.num);
  print(myClass.numNullable);
}
