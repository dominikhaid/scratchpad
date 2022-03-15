package basic.app;

public class EnumDemo {

  enum Level {
    LOW,
    MEDIUM,
    HIGH,
    TEST,
  }

  public static void main(String[] args) {
    Level enumVal = Level.MEDIUM;

    switch (enumVal) {
      case LOW:
        System.out.println("Low level");
        break;
      case MEDIUM:
        System.out.println("Medium level");
        break;
      case HIGH:
        System.out.println("High level");
        break;
      default:
        System.out.println(enumVal);
    }
  }
}
