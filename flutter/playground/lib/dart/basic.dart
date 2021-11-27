void main(List<String> arguments) {
  int myFunc(int x) {
    return x * 2;
  } //normal function declarations

  print(myFunc(5));

  double withVat(int val, [int vat = 19]) {
    return val + val * vat / 100;
  } // optional paramter

  print(withVat(20));

  int namedParam({int? a}) {
    return a ?? 0;
  } //named params optional

  print(namedParam(a: 50));

  int reqParam({required int a, int? b, int c = 0}) {
    return a + (b ?? c);
  } // requiared params

  print(reqParam(a: 50, b: 20));

  myFuncArr(x) => myFunc(5); // arrow function
  print(myFuncArr(5));

  myFuncCallback(input, fct) {
    for (int i = 0; i < 2; i++) {
      input = fct(input);
    }
    return input;
  } // callback function

  int input = 10; //integer
  myFuncCallback(input, myFunc);

  int? myNum; //nullable variable
  print(myNum ?? "not defined");

  double myDouble = 12.20;
  print(myDouble); //double

  String myString = 'A String'; //string
  print(myString);

  final int finalNum; //final
  finalNum = 123;
  print(finalNum);

  const int myConst = 123; //const
  print(myConst);

  const List<String> myList = ["heike", "peter"]; // list
  print(myList);

  List myGenList = List.generate(5, (index) => index * 2); // generator
  print(myGenList);

  const Set<String> mySet = {"heike", "frank"}; // unique list
  print(mySet);

  Map<int, String> userList = {
    1: "Peter",
    2: "Horst",
    3: "Thorsten"
  }; //key value structure
  print(userList);
}
