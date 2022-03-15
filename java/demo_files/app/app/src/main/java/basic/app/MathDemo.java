package basic.app;

public class MathDemo {

  static int plusMethod(int x, int y) {
    return x + y;
  }

  static double plusMethod(double x, double y) {
    return x + y;
  }

  public static void doMath() {
    System.out.println(plusMethod(10, 20));
    System.out.println(plusMethod(10.5, 20.8));
    int myMax = Math.max(5, 10);
    System.out.println(myMax);
    int myMin = Math.min(5, 10);
    System.out.println(myMin);
    double mySqrt = Math.sqrt(64);
    System.out.println(mySqrt);
    double myAbs = Math.abs(-4.7);
    System.out.println(myAbs);
    int randomNum = (int) (Math.random() * 101);
    System.out.println(randomNum);
  }

  public static void main(String[] args) {
    doMath();
  }
}
