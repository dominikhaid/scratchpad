package basic.app;

public class LoopsDemo {

  public static String[] cars = { "Volvo", "BMW", "Ford", "Mazda" };

  public static void doLoops() {
    System.out.println("Do loop");
    int i = 0;
    do {
      System.out.println(i);
      i++;
    } while (i < 5);

    System.out.println("While lopp");
    int b = 0;
    while (b < 5) {
      System.out.println(b);
      b++;
    }
  }

  public static void forLoops() {
    for (int i = 0; i < 5; i++) {
      System.out.println(i);
    }

    for (String i : cars) {
      System.out.println(i);
    }
  }

  public static void main(String[] args) {
    doLoops();
    forLoops();
  }
}
