package basic.app;

import java.util.HashSet;

public class HashSetDemo {

  HashSet<String> cars = new HashSet<String>();

  public HashSetDemo() {
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("BMW");
    cars.add("Mazda");
    System.out.println(cars);
    System.out.println(cars.contains("Mazda"));
    cars.remove("Volvo");
    System.out.println(cars.size());
    for (String i : cars) {
      System.out.println(i);
    }
    cars.clear();
    System.out.println(cars.size());
  }

  public static void main(String[] args) {
    System.out.println("HashSet demo..");
    new HashSetDemo();
  }
}
