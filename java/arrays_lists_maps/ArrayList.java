import java.util.ArrayList;
import java.util.Collections; // Import the Collections class

public class Main {

  public static void main(String[] args) {
    ArrayList<String> cars = new ArrayList<String>();
    cars.add("Volvo");
    cars.add("BMW");
    cars.add("Ford");
    cars.add("Mazda");
    cars.get(0);
    cars.set(0, "Opel");
    cars.remove(0);
    //cars.clear();
    //cars.size();
    System.out.println(cars);
    Collections.sort(cars); // Sort cars
    for (String i : cars) {
      System.out.println(i);
    }
  }
}
