package basic.app;

public class ThreadDemo extends Thread {

  public static int amount = 0;
  public static ThreadDemo thread = new ThreadDemo();

  public static void demoThread() {
    //thread.start();
    System.out.println(amount);
    amount++;
    System.out.println(amount);
  }

  public static void demoThreadWait() {
    thread.start();
    while (thread.isAlive()) {
      System.out.println("Waiting...");
    }
    System.out.println("Main: " + amount);
    amount++;
    System.out.println("Main: " + amount);
  }

  public void run() {
    amount++;
  }

  public static void main(String[] args) {
    demoThreadWait();
    demoThread();
  }
}
