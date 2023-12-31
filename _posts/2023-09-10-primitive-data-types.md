---
toc: true
comments: false
layout: post
title: U1 Primitive Data Types
description: Learning about integers, doubles, floats, strings, and booleans, and testing my knowledge on them.
type: tangibles
courses: { csa: {week: 4} }
permalink: /u1-data-types
---

To test my knowledge on primitive data types, here is a Java program that demonstrates the use of primitive data types (int, double, boolean) and a reference data type (String) in a class. It also shows casting, compound assignment operators, and input validation with hints.


```Java
import java.util.Scanner;

public class DataTypeDemo {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Input for an integer
        int intValue;
        while (true) {
            System.out.print("Enter an integer: ");
            if (scanner.hasNextInt()) {
                intValue = scanner.nextInt();
                break; // Exit the loop if valid input
            } else {
                System.out.println("Invalid input! Please enter an integer.");
                scanner.nextLine(); // Clear the input buffer
            }
        }

        // Input for a double
        double doubleValue;
        while (true) {
            System.out.print("Enter a double: ");
            if (scanner.hasNextDouble()) {
                doubleValue = scanner.nextDouble();
                break; // Exit the loop if valid input
            } else {
                System.out.println("Invalid input! Please enter a double.");
                scanner.nextLine(); // Clear the input buffer
            }
        }

        // Input for a boolean
        boolean booleanValue;
        while (true) {
            System.out.print("Enter a boolean (true or false): ");
            if (scanner.hasNextBoolean()) {
                booleanValue = scanner.nextBoolean();
                break; // Exit the loop if valid input
            } else {
                System.out.println("Invalid input! Please enter 'true' or 'false'.");
                scanner.nextLine(); // Clear the input buffer
            }
        }

        // Input for a String
        System.out.print("Enter a string: ");
        String stringValue = scanner.next();

        // Output values and their types
        System.out.println("Integer Value: " + intValue);
        System.out.println("Double Value: " + doubleValue);
        System.out.println("Boolean Value: " + booleanValue);
        System.out.println("String Value: " + stringValue);

        // Perform an arithmetic expression with casting
        double convertedValue = (double) intValue;
        System.out.println("Casting Result: " + convertedValue);

        // Perform a compound assignment operator
        intValue += 5;
        System.out.println("After Compound Assignment: " + intValue);
    }
}
DataTypeDemo.main(null);
```

    Enter an integer: Enter a double: Enter a boolean (true or false): Enter a string: Integer Value: 5
    Double Value: 2.0
    Boolean Value: true
    String Value: Hello,
    Casting Result: 5.0
    After Compound Assignment: 10

