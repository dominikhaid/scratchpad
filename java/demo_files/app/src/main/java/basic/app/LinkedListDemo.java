package basic.app;

import java.util.LinkedList;

public class LinkedListDemo {

  public static LinkedList<String> cars = new LinkedList<String>();

  public static void main(String[] args) {
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("Mazda");
    System.out.println(cars);
  }
}
