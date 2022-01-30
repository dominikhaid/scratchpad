package basic.app;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class DateDemo {

  public static LocalDateTime dateTimeNow = LocalDateTime.now();
  public static LocalTime localTimeNow = LocalTime.now();

  public static void formatDate(String fmt) {
    System.out.println("Before formatting: " + dateTimeNow);
    DateTimeFormatter dateFormat = DateTimeFormatter.ofPattern(fmt);
    String formatedDate = dateTimeNow.format(dateFormat);
    System.out.println("After formatting: " + formatedDate);
    System.out.println("LocalTime " + localTimeNow);
  }

  public static void main(String[] args) {
    formatDate("dd-MM-yyyy HH:mm:ss");
  }
}
