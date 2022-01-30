package basic.app;

import java.util.HashMap;

public class HashMapDemo {

  public static HashMap<String, String> capitalCities = new HashMap<String, String>();

  static {
    capitalCities.put("England", "London");
    capitalCities.put("Germany", "Berlin");
    capitalCities.put("Norway", "Oslo");
    capitalCities.put("USA", "Washington DC");
    capitalCities.get("England");
  }

  public HashMap<String, String> getCapitalCities() {
    return capitalCities;
  }

  public static void printKeys() {
    for (String i : capitalCities.keySet()) {
      System.out.println(i);
    }
  }

  public static void printValues() {
    for (String i : capitalCities.values()) {
      System.out.println(i);
    }
  }

  public static void printValKey() {
    for (String i : capitalCities.keySet()) {
      System.out.println("key: " + i + " value: " + capitalCities.get(i));
    }
  }

  @Override
  public String toString() {
    return "HasMaDemo{capitalCities=" + capitalCities + "}";
  }

  public static void main(String[] args) {
    printKeys();
    printValues();
    printValKey();
    System.out.println(capitalCities.remove("England"));
    System.out.println(capitalCities.size());
  }
}
