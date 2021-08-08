import java.util.HashSet;

public class Main {

  public static void main(String[] args) {
    HashSet<String> cars = new HashSet<String>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("BMW");
    cars.add("Mazda");
    System.out.println(cars);
    cars.contains("Mazda");
    cars.remove("Volvo");
    //cars.clear();
    cars.size();
    for (String i : cars) {
      System.out.println(i);
    }
  }
}
