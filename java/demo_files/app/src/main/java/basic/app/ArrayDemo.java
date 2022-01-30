package basic.app;

public class ArrayDemo {

  static int[] myNum = { 10, 20, 30, 40 };
  static String[] cars = { "Volvo", "BMW", "Ford", "Mazda" };
  static int[][] myNumbers = { { 1, 2, 3, 4 }, { 5, 6, 7 } };
  static int x = myNumbers[1][2];

  public static void printArrays() {
    System.out.println(myNum[0]);
    System.out.println(cars[0]);
    System.out.println(myNumbers[1][0]);
    System.out.println(x);
  }

  public static void main(String[] args) {
    printArrays();
  }
}
