package basic.app;

public class VariablesDemo {

  static int myNum = 5;
  static float myFloatNum = 5.99f;
  static char myChar = 'D';
  static boolean myBool = true;
  static String myText = "Hello";
  static final int myFinal = 15;

  static void printVars() {
    System.out.println("int: " + myNum);
    System.out.println("float: " + myFloatNum);
    System.out.println("char: " + myChar);
    System.out.println("boolean: " + myBool);
    System.out.println("String: " + myText);
    System.out.println("Final: " + myFinal);
  }

  public static void main(String[] args) {
    printVars();
  }
}
