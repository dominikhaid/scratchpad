import 'class_samples/location.dart';
import 'class_samples/my_class.dart';

void main(List<String> arguments) {
  const Location location = Location(1, 2);
  const Location loc1 = Location(3, 3);
  Location loc2 = const Location(2, 3);
  Location loc3 = const Location(2, 3);
  Location loc4 = const Location(3, 3);

  print(loc1);
  print(loc2);
  print(loc2 == loc3); // true – same class & values
  print(loc2 == loc4); // false
  print(loc1 == loc4); // true – same class & values

  MyClass generated = MyClass.generate(num: 132);
  print(generated);
  print(generated.sum(123));
  print(MyClass.generate(num: 1, numNullable: 2));

  print(MyClass.myStaticNum);
  MyClass.myStaticNum = 2;
  print(MyClass.pi);

  MyClass myClass = MyClass();
  myClass.num = 2;

  print(myClass.num);
  print(myClass.numNullable);

  print(myClass);
  print(myClass is MyClass);
}
