package basic.app;

public class InterfaceDemo {

  public static void main(String[] args) {
    PigInterfaceDemo myPig = new PigInterfaceDemo();
    myPig.animalSound();
    myPig.sleep();
  }
}

interface AnimalInterface {
  public void animalSound();

  public void sleep();
}

class PigInterfaceDemo implements AnimalInterface {

  public void animalSound() {
    System.out.println("The pig says: wee wee");
  }

  public void sleep() {
    System.out.println("Zzz");
  }
}
