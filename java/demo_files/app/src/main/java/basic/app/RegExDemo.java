package basic.app;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegExDemo {

  static Pattern pattern = Pattern.compile(
    "w3schools",
    Pattern.CASE_INSENSITIVE
  );
  static Matcher matcher = pattern.matcher("Visit W3Schools!");

  public static void doRegEx() {
    boolean matchFound = matcher.find();

    if (matchFound) {
      System.out.println("Match found");
    } else {
      System.out.println("Match not found");
    }
  }

  public static void main(String[] args) {
    doRegEx();
  }
}
