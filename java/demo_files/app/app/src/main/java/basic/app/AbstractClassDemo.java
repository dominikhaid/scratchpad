package basic.app;

public class AbstractClassDemo {

  public static void main(String[] args) {
    PigAbstractAnimal pig = new PigAbstractAnimal();
    pig.animalSound();
  }
}

abstract class AbstractAnimal {

  public abstract void animalSound();

  public void sleep() {
    System.out.println("Zzz");
  }
}

class PigAbstractAnimal extends AbstractAnimal {

  public void animalSound() {
    System.out.println("The pig says: wee wee");
  }
}
