public class Main {

  public static void main(String[] args) {
    String[] cars = { "Volvo", "BMW", "Ford", "Mazda" };
    int[] myNum = { 10, 20, 30, 40 };
    cars[0] = "Opel";
    System.out.println(cars[0]);
    for (String i : cars) {
      System.out.println(i);
    }
    for (int i = 0; i < cars.length; i++) {
      System.out.println(cars[i]);
    }
    int[][] myNumbers = { { 1, 2, 3, 4 }, { 5, 6, 7 } };
    int x = myNumbers[1][2];
    System.out.println(x); // Outputs 7
  }
}
