package basic.app;

import java.util.Scanner;

public class InputDemo {

  public static void doInput() {
    Scanner scanner = new Scanner(System.in);
    System.out.println("Enter name, age and salary:");
    String name = scanner.nextLine();
    int age = scanner.nextInt();
    double salary = scanner.nextDouble();
    scanner.close();

    System.out.println("Name: " + name);
    System.out.println("Age: " + age);
    System.out.println("Salary: " + salary);
  }

  public static void main(String[] args) {
    doInput();
  }
}
