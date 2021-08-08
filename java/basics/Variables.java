public class Main {

  static int myNum = 5;
  static float myFloatNum = 5.99f;
  static char myChar = 'D';
  static boolean myBool = true;
  static String myText = "Hello";
  static final int myFinal = 15; //value is fixed

  //Constructor
  public Main(
    int myNumArg,
    String myTextArg,
    char myCharArg,
    boolean myBoolArg,
    float myFloatNumArg
  ) {
    myNum = myNumArg;
    myFloatNum = myFloatNumArg;
    myChar = myCharArg;
    myBool = myBoolArg;
    myText = myTextArg;
  }

  //Method
  static void printVars() {
    System.out.println("int: " + myNum);
    System.out.println("float: " + myFloatNum);
    System.out.println("char: " + myChar);
    System.out.println("boolean: " + myBool);
    System.out.println("String: " + myText);
    System.out.println("Final: " + myFinal);
  }

  public static void main(String[] args) {
    System.out.println("Datatypes");
    printVars();
  }
}
