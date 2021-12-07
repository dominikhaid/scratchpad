public class Main {

  static void myMethod(String fname, int age) {
    System.out.println(fname + " is " + age);
  }

  static int myAdd(int x, int y) {
    return x + y;
  }

  public static void main(String[] args) {
    myMethod("Liam", 5);
    myMethod("Jenny", 8);
    myMethod("Anja", 31);
    System.out.println(myAdd(5, 3));
  }
}
