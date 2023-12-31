---
toc: true
comments: false
layout: post
title: U5 Menu Class
description: Taking a closer look at classes and how they are implemented to make user menus
type: tangibles
courses: { csa: {week: 4} }
permalink: /u5-menu-class
---

### Class Definition

In the provided Java code:

```java
public class MenuJFrame extends JFrame implements ActionListener {
    // ... Class contents ...
}
```

A class named `MenuJFrame` is defined using the `public class` keyword. This class extends `JFrame` and implements the `ActionListener` interface.

### Instance of a Class

Instances of the `MenuJFrame` class are defined in the `main` method:

```java
public static void main(String[] args) {
    new MenuJFrame("Menu");
}
```

Here, `new MenuJFrame("Menu")` creates an instance of the `MenuJFrame` class and initializes it with the title "Menu." This instance represents the graphical user interface (GUI) window.

### Object Calling a Method

The following code demonstrates an object calling a method when a menu item is selected:

```java
public void actionPerformed(ActionEvent e) {
    String selection = e.getActionCommand();  // menu selection
    // ... Other code ...
}
```

In the `actionPerformed` method, `e.getActionCommand()` retrieves the action command associated with the selected menu item (`e` is an instance of `ActionEvent`). This method call is an example of an object (an instance of `ActionEvent`) calling a method (`getActionCommand()`).

### Object Mutating Data

Data mutation (modification) occurs within the `actionPerformed` method when the `message` label's text is set based on the selected menu item. For example:

```java
message.setText("Hello, World.");
```

Here, `message` is an instance variable (object) representing a `JLabel`, and the `setText` method is called to change the label's text. This is an example of an object (the `message` label) mutating its data.

### Console vs. GUI Differences

Console and GUI applications differ in terms of their user interfaces and interaction methods:

**Console Applications:**
- Typically run in a terminal or command prompt.
- Interaction is mainly through text input and output.
- Suitable for simple text-based tasks.
- Limited graphical elements, if any.
- Usually less resource-intensive.

**GUI Applications:**
- Provide graphical user interfaces with windows, buttons, menus, and more.
- Interaction involves mouse clicks, keyboard input, and graphical elements.
- Suitable for complex and user-friendly applications.
- Require more resources due to graphical rendering.
- Can offer enhanced user experiences.

### Building a New Console or GUI Menu

To build a new menu for Frequently Asked Questions (FRQs) using constructors and instance data, as well as static methods and data, you can create a Java program with the following structure:

```java
import java.util.Scanner;

public class FAQMenu {
    private String[] faqList;
    private Scanner scanner;

    public FAQMenu(String[] faqList) {
        this.faqList = faqList;
        this.scanner = new Scanner(System.in);
    }

    public void displayMenu() {
        System.out.println("Frequently Asked Questions Menu:");
        for (int i = 0; i < faqList.length; i++) {
            System.out.println((i + 1) + ". " + faqList[i]);
        }
        System.out.println("0. Exit");
    }

    public void runMenu() {
        boolean quit = false;
        while (!quit) {
            displayMenu();
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume the newline character
            if (choice == 0) {
                quit = true;
            } else if (choice >= 1 && choice <= faqList.length) {
                displayFAQ(choice - 1); // Adjust for 0-based indexing
            } else {
                System.out.println("Invalid choice. Please try again.");
            }
        }
        scanner.close();
    }

    public void displayFAQ(int index) {
        System.out.println("FAQ #" + (index + 1) + ": " + faqList[index]);
        // Add code to display the FAQ content here
    }

    public static void main(String[] args) {
        String[] faqs = {
            "What is Java?",
            "How does Java handle exceptions?",
            // Add more FAQs here
        };

        FAQMenu menu = new FAQMenu(faqs);
        menu.runMenu();
    }
}
```

This code defines a console-based FAQ menu where users can select and view frequently asked questions. It uses constructors and instance data to initialize the menu and manage user interaction. Additionally, it employs static methods and data for the `main` method and the FAQ list.