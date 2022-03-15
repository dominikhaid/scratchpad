package basic.app;

public class RunnableDemo implements Runnable {

  public void run() {
    System.out.println("This code is running in a thread");
  }

  public void main(String[] args) {
    run();
  }
}
