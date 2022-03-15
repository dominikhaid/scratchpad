package basic.app;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;

public class ArrayListDemo {

  public static ArrayList<String> cars = new ArrayList<String>();

  public static void ittaDemo() {
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("Mazda");

    Iterator<String> it = cars.iterator();
    System.out.println(it.next());

    while (it.hasNext()) {
      System.out.println(it.next());
    }

    while (it.hasNext()) {
      String el = it.next();
      if (el != "BMW") {
        it.remove();
      }
    }
  }

  public static void printList() {
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("Mazda");
    Collections.sort(cars);
    System.out.println(cars.get(0));
    cars.set(0, "Opel");
    cars.remove(3);
    cars.clear();
    System.out.println(cars.size());
    System.out.println(cars);
  }

  public static void main(String[] args) {
    ittaDemo();
    printList();
  }
}
