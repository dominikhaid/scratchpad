public class Main {

  public static void main(String[] args) {
    String txt = "Hello World";
    System.out.println("The length of the txt string is: " + txt.length());
    System.out.println(txt.toUpperCase()); // Outputs "HELLO WORLD"
    System.out.println(txt.toLowerCase()); // Outputs "hello world"

    txt = "Please locate where 'locate' occurs!";
    System.out.println(txt.indexOf("locate")); // Outputs 7
    String firstName = "John";
    String lastName = "Doe";
    System.out.println(firstName.concat(lastName));
    System.out.println(firstName + " " + lastName);
  }
}
