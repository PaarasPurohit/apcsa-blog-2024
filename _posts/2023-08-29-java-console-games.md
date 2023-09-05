---
toc: true
comments: false
layout: post
title: Java Console Games
description: Making the code for "Rock, Paper, Scissors" much easier to understand using OOP
type: tangibles
courses: { csa: {week: 2} }
permalink: /java-games
---

---

---

### 1. Import the necessary libraries


```java
import java.util.Scanner;
import java.lang.Math;
```

### 2. Create the Console class


```java
public class ConsoleGame {
    public final String DEFAULT = "\u001B[0m";  // Default Terminal Color
    
    public ConsoleGame() {
        Scanner sc = new Scanner(System.in);
        boolean quit = false;
        
        while (!quit) {
            this.menuString();
            try {
                int choice = sc.nextInt();
                System.out.print("" + choice + ": ");
                quit = this.action(choice);
            } catch (Exception e) {
                sc.nextLine();
                System.out.println(e + ": Not a number, try again.");
            }
        }
        sc.close();
    }
    
    public void menuString() {
        String menuText = ""
            + "\u001B[35m___________________________\n"
            + "|~~~~~~~~~~~~~~~~~~~~~~~~~|\n"
            + "|\u001B[0m          Menu!          \u001B[35m|\n"
            + "|~~~~~~~~~~~~~~~~~~~~~~~~~|\n"
            + "| 0 - Exit                |\n"
            + "| 1 - Rock Paper Scissors |\n"
            + "| 2 - Higher or Lower     |\n"
            + "| 3 - Tic Tac Toe         |\n"
            + "|_________________________|   \u001B[0m\n"
            + "\n"
            + "Choose an option.\n";
        System.out.println(menuText);
    }

    private boolean action(int selection) {
        boolean quit = false;
        switch (selection) {
            case 0:
                System.out.print("Goodbye, World!"); 
                quit = true; 
                break;
            case 1:
                rps();
                break;
            case 2:
                horl();
                break;
            case 3:
                ticTacToe();
                break;
            default:
                System.out.print("Unexpected choice, try again.");
        }
        System.out.println(DEFAULT);
        return quit;
    }

    public static void main(String[] args) {
        new ConsoleGame();
    }
}
```

### 3. Higher or Lower Game Logic


```java
// (Include only the contents of the horl() method)
public void horl() {
    System.out.println("Higher or Lower");
    System.out.println("You have three guesses to guess the number I am thinking of between 1-8.");
    System.out.println("If you guess the number correctly, you win!");
    Scanner scHL = new Scanner(System.in);
    int randomG = (int) (Math.random() * 8) + 1;
    int guess = scHL.nextInt();
    for(int i = 3; i > 0; i--) {
        if (guess == randomG) {
            System.out.println("You win!");
            break;
        } else if (guess > randomG) {
            System.out.println("The number is lower");
        } else if (guess < randomG) {
            System.out.println("The number is higher");
        }
        guess = scHL.nextInt();
    }
    System.out.println("Game over.");
    scHL.close();
}
```

### 4. RPS Game Logic


```java
// (Include only the contents of the rps() method)
public void rps() {
    System.out.println("Rock Paper Scissors");
    System.out.println("Type r for rock, p for paper, or s for scissors");
    Scanner scRPS = new Scanner(System.in);
    String userChoice = scRPS.nextLine().toLowerCase();
    Boolean quit = false;
    int random = (int) (Math.random() * 3);
    while (!quit) {
        // Rock Paper Scissors game logic
        // ...
    }
    scRPS.close();
}
```

### 5. Tic Tac Toe Game Logic


```java
// (Include only the contents of the ticTacToe() method)
public void ticTacToe() {
    System.out.println("Tic Tac Toe");
    Scanner scTTT = new Scanner(System.in);
    String[] board = {"1", "2", "3", "4", "5", "6", "7", "8", "9"};
    String player = "X";
    String player2 = "O";
    int turn = 0;
    Boolean quit = false;
    System.out.println("Do you want to play against a friend or the computer?");
    System.out.println("Type 1 for friend, 2 for computer");
    int choice = scTTT.nextInt();
    if (choice == 1) {
        // Tic Tac Toe game logic (friend)
        // ...
    } else if (choice == 2) {
        // Tic Tac Toe game logic (computer)
        // ...
    }
    scTTT.close();
}
```

### 6. Main Function


```java
// (Include only the main method)
public static void main(String[] args) {
    new ConsoleGame();
}
```

### Explanation

1. Defined a class `ConsoleGame`, which contains the main logic for your games.
2. In the constructor of `ConsoleGame`, I set up a loop that displays a menu and allows the user to select a game to play.
3. The `menuString` method displays the game menu with options for the user.
4. The `action` method takes the user's selection and calls the corresponding game method (e.g., `rps`, `horl`, or `ticTacToe`).
5. The `horl` method implements the Higher or Lower game, where the user has to guess a random number.
6. The `rps` method implements the Rock Paper Scissors game, allowing the user to play against the computer.
7. The `ticTacToe` method implements the Tic Tac Toe game, allowing the user to play against a friend or the computer.

### Comparison to APCSA Units

Certainly! I'll explain how each of the mentioned programming concepts is used in the provided Java code:

1. **Primitive Types**:
   - Primitive types like `int` are used for storing integer values. For example, `int choice` is used to store the user's menu choice.

2. **Objects**:
   - Objects of classes like `Scanner` and `ConsoleGame` are created and used in the code. `Scanner sc` and `Scanner scHL` are instances of the `Scanner` class. `ConsoleGame` is the class defined to encapsulate the game logic, and objects of this class are created using `new ConsoleGame()`.

3. **Boolean Expressions**:
   - Boolean expressions are used for conditional logic and control flow. For instance, `while (!quit)` and `if (guess == randomG)` are examples of boolean expressions that control loops and conditionally execute code.

4. **If Statements**:
   - `if`, `else if`, and `else` statements are used for making decisions based on conditions. For example, in the Rock Paper Scissors game, `if (userChoice.equals("r"))` is used to check the user's choice.

5. **Iteration**:
   - Iteration is achieved using loops like `while` and `for`. For instance, the `while` loop is used for menu selection and in the Rock Paper Scissors game. The `for` loop is used in the Higher or Lower game to allow the user three guesses.

6. **Classes**:
   - The code defines a class named `ConsoleGame`, which encapsulates the game logic. It contains instance variables, methods, and a constructor.

7. **Arrays**:
   - Arrays are used to represent the tic-tac-toe board. For example, `String[] board` is an array that holds the state of the tic-tac-toe board.

### Why Is This Important?

This organization and connection to CollegeBoard's units are important. Studying for the AP exam includes evaluating how the content relates to the real world, in this case, our Java project.