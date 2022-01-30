package basic.app;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

/**
 * File
 */
public class FileHandlerDemo {

  public static String fileName = "newFile.txt";
  public static String fileContext = "This was written by Java.";

  public static void writeToFile(String fn, String val) {
    try {
      FileWriter myWriter = new FileWriter(fn);
      myWriter.write(val);
      myWriter.close();
      System.out.println("Successfully wrote to the file.");
    } catch (IOException e) {
      System.out.println("An error occurred.");
      e.printStackTrace();
    }
  }

  public static void createFile(String fn) {
    try {
      File newFile = new File(fn);
      if (newFile.createNewFile()) {
        System.out.println("File created: " + newFile.getName());
      } else {
        System.out.println("File already exists.");
      }
    } catch (IOException e) {
      System.out.println("An error occurred.");
      e.printStackTrace();
    }
  }

  public static void readFile(String fn) {
    try {
      File tmpFile = new File(fn);
      Scanner myReader = new Scanner(tmpFile);
      while (myReader.hasNextLine()) {
        String data = myReader.nextLine();
        System.out.println(data);
      }
      myReader.close();
    } catch (FileNotFoundException e) {
      System.out.println("An error occurred.");
      e.printStackTrace();
    }
  }

  public static void readMetaFile(String fn) {
    File tmpFile = new File(fn);
    if (tmpFile.exists()) {
      System.out.println("File name: " + tmpFile.getName());
      System.out.println("Absolute path: " + tmpFile.getAbsolutePath());
      System.out.println("Writeable: " + tmpFile.canWrite());
      System.out.println("Readable " + tmpFile.canRead());
      System.out.println("File size in bytes " + tmpFile.length());
    } else {
      System.out.println("The file does not exist.");
    }
  }

  public static void deleteFile(String fn) {
    File deleteFile = new File(fn);
    if (deleteFile.delete()) {
      System.out.println("Deleted the file: " + deleteFile.getName());
    } else {
      System.out.println("Failed to delete the file.");
    }
  }

  public static void main(String[] args) {
    createFile(fileName);
    writeToFile(fileName, fileContext);
    readMetaFile(fileName);
    readFile(fileName);
    deleteFile(fileName);
  }
}
