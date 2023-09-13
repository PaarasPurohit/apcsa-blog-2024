---
toc: true
comments: false
layout: post
title: FRQ Mini-Lab
description: Answering one of the questions from the APCSA 2023 Exam
type: tangibles
courses: { csa: {week: 4} }
permalink: /frq-mini-lab
---

This question involves the `AppointmentBook` class, which provides methods for students to schedule appointments with their teacher. Appointments can be scheduled during one of eight class periods during the school day, numbered 1 through 8. A requested appointment has a duration, which is the number of minutes the appointment will last. The 60 minutes within a period are numbered 0 through 59. In order for an appointment to be scheduled, the teacher must have a block of consecutive, available munites that contains at least the requested number of minutes in a requested period. Scheduled appointments must start and end within the same period.

The `AppointmentBook` class contains two helper methods, `isMinuteFree` and `reserveBlock`. You will write two additional methods of the `AppointmentBook` class.


```java
public class AppointmentBook {
    /**
     * Returns true if minute in period is available for an appointment and returns
     * false otherwise
     * Preconditions: 1 <= period <= 8; 0 <= minute <= 59
     */
    private boolean isMinuteFree(int period, int minute) {
        /* implementation not shown */
        return false;
    }

    /**
     * Marks the block of minutes that starts at startMinute in period and
     * is duration minutes long as reserved for an appointment
     * Preconditions: 1 <= period <= 8; 0 <= startMinute <= 59;
     *               1 <= duration <= 60
     */
    private void reserveBlock(int period, int startMinute, int duration) {
        /* implementation not shown */
    }

    /**
     * Searches for the first block of duration free minutes during period, as described in
     * part (a). Returns the first minute in the block if such a block is found or returns -1 if no
     * such block is found.
     * Preconditions: 1 <= period <= 8; 1 <= duration <= 60
     */
    public int findFreeBlock(int period, int duration) {
        /* to be implemented in part (a) */
        return 0;
    }

    /**
     * Searches periods from startPeriod to endPeriod, inclusive, for a block
     * of duration free minutes, as described in part (b). If such a block is found,
     * calls reserveBlock to reserve the block of minutes and returns true; otherwise
     * returns false.
     * Preconditions: 1 <= startPeriod <= endPeriod <= 8; 1 <= duration <= 60
     */
    public boolean makeAppointment(int startPeriod, int endPeriod, int duration) {
        /* to be implemented in part (b) */
        return false;
    }

    // There may be instance variables, constructors, and methods that are not shown.
}
```

Write the `findFreeBlock` method, which searches `period` for the first block of free minutes that is `duration` minutes long. If such a block is found, `findFreeBlock` returns the first minute in the block. Otherwise, `findFreeBlock` returns `-1`. The `findFreeBlock` method uses the helper method `isMinuteFree`, which returns `true` if a particular minute is available to be included in a new appointment and returns `false` if the minute is unavailable. The method call `findFreeBlock(2, 15)` would return `30` to indicate that a 15-minute block starting with minute `30` is available. No steps should be taken as a result of the call to `findFreeBlock` to mark those 15 minutes as unavailable. The method call `findFreeBlock(2, 9)` would also return `30`. Whenever there are multiple blocks that satisfy the requirement, the earliest starting minute is returned. The method call `findFreeBlock(2, 20)` would return `-1`, since no 20-minute block of available minutes exists in `period 2`. 

Complete method `findFreeBlock`. You must use `isMinuteFree` appropriately in order to receive full credit.


```java
/**
 * Searches for the first block of duration free minutes during the specified period.
 * Returns the first minute in the block if such a block is found or returns -1 if no such block is found.
 *
 * @param period   The period to search for free minutes.
 * @param duration The duration of the free block to find.
 * @return The first minute in the found free block or -1 if no such block is found.
 *
 * Preconditions: 1 <= period <= 8; 1 <= duration <= 60
 */
public int findFreeBlock(int period, int duration) {
    // Implementation of finding and returning the first minute of a free block.
    // This is where you would add your code to perform the search.
    return 0;
}
```

My Answer:


```java
public int findFreeBlock(int period, int duration) {
    // Loop through the minutes in the specified period
    for (int startMinute = 0; startMinute <= 59 - duration; startMinute++) {
        boolean isBlockFree = true;

        // Check if the block of minutes from startMinute to (startMinute + duration - 1) is free
        for (int minute = startMinute; minute < startMinute + duration; minute++) {
            if (!isMinuteFree(period, minute)) {
                isBlockFree = false;
                break; // Exit the inner loop if any minute in the block is not free
            }
        }

        // If a free block of the requested duration is found, return the start minute
        if (isBlockFree) {
            return startMinute;
        }
    }

    // If no free block of the requested duration is found, return -1
    return -1;
}
```

To test my code:


```java
public class AppointmentBookTester {
    public static void main(String[] args) {
        // Create an instance of the AppointmentBook class
        AppointmentBook appointmentBook = new AppointmentBook();

        // Test the findFreeBlock method
        int period = 2;
        int duration1 = 15;
        int duration2 = 9;
        int duration3 = 20;

        int freeBlock1 = appointmentBook.findFreeBlock(period, duration1);
        int freeBlock2 = appointmentBook.findFreeBlock(period, duration2);
        int freeBlock3 = appointmentBook.findFreeBlock(period, duration3);

        System.out.println("Testing findFreeBlock:");
        System.out.println("Duration 15 minutes, start minute: " + freeBlock1);
        System.out.println("Duration 9 minutes, start minute: " + freeBlock2);
        System.out.println("Duration 20 minutes, start minute: " + freeBlock3);

        // Test the makeAppointment method
        int startPeriod = 3;
        int endPeriod = 6;
        int appointmentDuration = 30;

        boolean appointment1 = appointmentBook.makeAppointment(startPeriod, endPeriod, appointmentDuration);
        boolean appointment2 = appointmentBook.makeAppointment(5, 7, 45);

        System.out.println("\nTesting makeAppointment:");
        System.out.println("Appointment 1 (start period 3, end period 6, duration 30): " + appointment1);
        System.out.println("Appointment 2 (start period 5, end period 7, duration 45): " + appointment2);
    }
}
AppointmentBookTester.main(null);
```

    Testing findFreeBlock:
    Duration 15 minutes, start minute: 0
    Duration 9 minutes, start minute: 0
    Duration 20 minutes, start minute: 0
    
    Testing makeAppointment:
    Appointment 1 (start period 3, end period 6, duration 30): false
    Appointment 2 (start period 5, end period 7, duration 45): false


### Regarding Array/ArrayList/2D Arrays

- Change or add data to arrays, easier for ArrayList. How would you do it for others?
- Displaying Array/ArrayList by columns, as well as by rows horizontally
- Display content backwards


```java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class ArrayManipulation {
    public static void main(String[] args) {
        // Arrays
        int[] intArray = {1, 2, 3, 4, 5};
        String[] stringArray = {"apple", "banana", "cherry", "date", "fig"};

        // ArrayLists
        List<Integer> intArrayList = new ArrayList<>(Arrays.asList(1, 2, 3, 4, 5));
        List<String> stringArrayList = new ArrayList<>(Arrays.asList("apple", "banana", "cherry", "date", "fig"));

        // Changing values in arrays
        intArray[2] = 30;
        stringArray[4] = "grape";

        // Adding data to ArrayLists
        intArrayList.add(6);
        stringArrayList.add("honeydew");

        // Displaying Arrays/ArrayLists by columns
        System.out.println("Displaying Arrays by columns:");
        for (int i = 0; i < intArray.length; i++) {
            System.out.println(intArray[i] + "\t" + stringArray[i]);
        }

        System.out.println("\nDisplaying ArrayLists by columns:");
        for (int i = 0; i < intArrayList.size(); i++) {
            System.out.println(intArrayList.get(i) + "\t" + stringArrayList.get(i));
        }

        // Displaying Arrays/ArrayLists horizontally
        System.out.println("\nDisplaying Arrays horizontally:");
        System.out.println(Arrays.toString(intArray));
        System.out.println(Arrays.toString(stringArray));

        System.out.println("\nDisplaying ArrayLists horizontally:");
        System.out.println(intArrayList);
        System.out.println(stringArrayList);

        // Displaying content backwards
        System.out.println("\nDisplaying Arrays backwards:");
        for (int i = intArray.length - 1; i >= 0; i--) {
            System.out.print(intArray[i] + " ");
        }
        System.out.println();
        for (int i = stringArray.length - 1; i >= 0; i--) {
            System.out.print(stringArray[i] + " ");
        }

        System.out.println("\nDisplaying ArrayLists backwards:");
        Collections.reverse(intArrayList);
        Collections.reverse(stringArrayList);
        System.out.println(intArrayList);
        System.out.println(stringArrayList);
    }
}
ArrayManipulation.main(null);
```

    Displaying Arrays by columns:
    1	apple
    2	banana
    30	cherry
    4	date
    5	grape
    
    Displaying ArrayLists by columns:
    1	apple
    2	banana
    3	cherry
    4	date
    5	fig
    6	honeydew
    
    Displaying Arrays horizontally:
    [1, 2, 30, 4, 5]
    [apple, banana, cherry, date, grape]
    
    Displaying ArrayLists horizontally:
    [1, 2, 3, 4, 5, 6]
    [apple, banana, cherry, date, fig, honeydew]
    
    Displaying Arrays backwards:
    5 4 30 2 1 
    grape date cherry banana apple 
    Displaying ArrayLists backwards:
    [6, 5, 4, 3, 2, 1]
    [honeydew, fig, date, cherry, banana, apple]

