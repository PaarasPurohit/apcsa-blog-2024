---
toc: true
comments: false
layout: post
title: Java's Hello
description: The very first Java hacks of APCSA
type: tangibles
courses: { csa: {week: 2} }
permalink: /java-hello
---

### Hacks:

- [x] Used comments to explain the anatomy of my example Car class
- [x] Used comments to point to definition of classes
- [x] Used comments to point to the constructor of the Car class
- [x] Called Car object in Main


```java
// 1. Define a Class
public class Car {
    
    // 2. Class Fields (Attributes)
    private String make;
    private String model;
    private int year;
    
    // 3. Constructors
    // Constructor 1: No-argument constructor
    public Car() {
        // Default constructor, initializes fields to default values
    }
    
    // Constructor 2: Parameterized constructor
    public Car(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
    // 4. Class Methods (Behavior)
    
    // Setter method for 'make' field
    public void setMake(String make) {
        this.make = make;
    }
    
    // Setter method for 'model' field
    public void setModel(String model) {
        this.model = model;
    }
    
    // Setter method for 'year' field
    public void setYear(int year) {
        this.year = year;
    }
    
    // Getter method for 'make' field
    public String getMake() {
        return make;
    }
    
    // Getter method for 'model' field
    public String getModel() {
        return model;
    }
    
    // Getter method for 'year' field
    public int getYear() {
        return year;
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar1 = new Car();
        Car myCar2 = new Car("Toyota", "Camry", 2020);
        
        myCar1.setMake("Ford");
        myCar1.setModel("Mustang");
        myCar1.setYear(2022);
        
        System.out.println("Car 1 Make: " + myCar1.getMake());
        System.out.println("Car 1 Model: " + myCar1.getModel());
        System.out.println("Car 1 Year: " + myCar1.getYear());
        
        // Accessing object data using getter methods (correct way)
        System.out.println("Car 2 Make: " + myCar2.getMake());
        System.out.println("Car 2 Model: " + myCar2.getModel());
        System.out.println("Car 2 Year: " + myCar2.getYear());
    }
}
Main.main(null);
```

    Car 1 Make: Ford
    Car 1 Model: Mustang
    Car 1 Year: 2022
    Car 2 Make: Toyota
    Car 2 Model: Camry
    Car 2 Year: 2020


### Extra: Statistics


```java
import java.util.*;

public class DataSetAnalyzer {

    public static double calculateMean(List<Double> dataset) {
        double sum = 0;
        for (double value : dataset) {
            sum += value;
        }
        return sum / dataset.size();
    }

    public static double calculateMedian(List<Double> dataset) {
        Collections.sort(dataset);
        int size = dataset.size();
        if (size % 2 == 0) {
            int middle = size / 2;
            double median = (dataset.get(middle - 1) + dataset.get(middle)) / 2;
            return median;
        } else {
            return dataset.get(size / 2);
        }
    }

    public static List<Double> calculateMode(List<Double> dataset) {
        Map<Double, Integer> frequencyMap = new HashMap<>();
        for (double value : dataset) {
            frequencyMap.put(value, frequencyMap.getOrDefault(value, 0) + 1);
        }

        List<Double> mode = new ArrayList<>();
        int maxFrequency = 0;

        for (Map.Entry<Double, Integer> entry : frequencyMap.entrySet()) {
            int frequency = entry.getValue();
            if (frequency > maxFrequency) {
                maxFrequency = frequency;
                mode.clear();
                mode.add(entry.getKey());
            } else if (frequency == maxFrequency) {
                mode.add(entry.getKey());
            }
        }

        return mode;
    }

    public static double calculateRange(List<Double> dataset) {
        double max = Collections.max(dataset);
        double min = Collections.min(dataset);
        return max - min;
    }

    public static void main(String[] args) {
        List<Double> dataset = Arrays.asList(12.5, 10.0, 15.5, 10.0, 20.0, 12.5, 15.5, 12.5);

        double mean = calculateMean(dataset);
        double median = calculateMedian(dataset);
        List<Double> mode = calculateMode(dataset);
        double range = calculateRange(dataset);

        System.out.println("Mean: " + mean);
        System.out.println("Median: " + median);
        System.out.println("Mode: " + mode);
        System.out.println("Range: " + range);
    }
}

DataSetAnalyzer.main(null);
```

    Mean: 13.5625
    Median: 12.5
    Mode: [12.5]
    Range: 10.0


### Takeaways:

- I have used Java to program in the past many times. It was one of the first languages I became fluent in, even before Python. My dad uses Java, specific the JUnit library, to assert and test programs for a company's database.
- One thing I noticed about the notebooks is that the file name instead of the title shows up, which I will work on resolving.
- I am looking forward to code/code/coding with Java for the rest of the year!