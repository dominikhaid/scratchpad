# Flutter Schulung

- [netTrek](https://github.com/netTrek-Flutter/swr-flutter-2)

## Dart

- Highlevel Programmierspprache nach ECMA standard Javascript ähnlich.
- snale_case Files
- PascalCase Classes
- camelCase Methods, Funktions & Variables
- \_underscore Private Atrribute

## Basic Datatypes

```dart
int myFunc(int x) {
    return x * 2
}

//optional param
double  withVat(int val, [int vat = 19]) {
    return val + val * vat / 100;
}

//named params optional
int namePAram({int? a}){
    return 0
}

// requiared params
int reqParam({required int a,int? b, int c =0}){
    return a + (b ?? c);
}

myFuncArr (x) => myFunc(x);
myFuncCallback(input, fct) {
    for (int i = 0; i<2; i++) {
      input = fct(input);
    }
    return input;
}
myFuncCallback(input, myFunc)

int? myNum;
myNum ?? "not defined"

final int finalNum;
finalNum = 123;
const int myConst = 123
print (finalNum)

Map<int, String> userList= {
1: "Peter",
2: "Horst",
3: 4
}

const List<String> name = ["heike", "peter"]
Set<String> names = ["heike", "frank"]


```

## List / Set / Map

```dart

const List<String> myList = ["heike", "peter"]; // list
const List<String> myList = ["heike", "peter"]; // list
List myGenList = List.generate(5, (index) => index * 2); // generator
print(myGenList);

const Set<String> mySet = {"heike", "frank"}; // unique list
Map<int, String> userList= {
1: "Peter",
2: "Horst",
3: "Thorsten"
}; //key value structure

```

## Functions

```dart

int myFunc(int x) {
    return x * 2;
} //normal function declarations
print(myFunc(5));

double  withVat(int val, [int vat = 19]) {
    return val + val * vat / 100;
} // optional paramter
print(withVat(20));

int namedParam({int? a}){
    return a ?? 0;
} //named params optional
print(namedParam(a:50));

int reqParam({required int a,int? b, int c =0}){
    return a + (b ?? c);
} // requiared params

print(reqParam(a: 50,b:20));

myFuncArr (x) => myFunc(5); // arrow function
print(myFuncArr(5));

myFuncCallback(input, fct) {
    for (int i = 0; i<2; i++) {
      input = fct(input);
    }
    return input;
} // callback function


```

## Loops

```dart
  for (int i = 0; i < 5; i++) {
    if (i % 2 == 0) {
      print(i);
    }
  }

  List myGenList = List.generate(5, (index) => index * 2); // generator
  print(myGenList);

  for (var x in List.generate(5, (index) => index * 2)) {
    print('for var in $x');
  }

  var r = Random();
  int i;

  while (r.nextBool()) {
    print('value is false ');
  }

  do {
    i = r.nextInt(3) + 1;
    print('do while  $i');
  } while (i != 3);

```

## TODOS

- WSL Flutter fix
- Formatter Flutter Dart
- Test Snippets

## LookUp

- Factory
- Late
- initList :
- abstract

## Flutter

- Dart Ui Framework
- Skia Rendering Engine

## bloc

**Business Logic Controller**

- Redux ähnlich

## Widgets

### Stateless

### Statefull

## Plattforms

- MacOS (nur auf MAc möglich)
- Android
- Windows
- Web
- Linux

## Dart CLI

- dart create proj_name
- cd proj_name
- dart run
- dart pub add package
- dart pub get
- dart pub upgrade
