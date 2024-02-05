package org.example;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CarTest {

    public static Car car;
    public static Motorcycle motorcycle;

    @BeforeAll
    static void setUp() {
        car = new Car();
        motorcycle = new Motorcycle();
    }


    @Test
    void testCarInstanceIsVehicle() {
        assertTrue(car instanceof Vehicle);
    }


    @Test
    public void testCarHasFourWheels() {
        assertEquals(4, car.numWheels);
    }

    @Test
    public void testMotorcycleHasTwoWheels() {
        assertEquals(2, motorcycle.numWheels);
    }

    @Test
    public void testCarAcceleratesTo60() {
        car.testDrive();
        assertEquals(60, car.speed);
    }

    @Test
    public void testMotorcycleAcceleratesTo75() {
        motorcycle.testDrive();
        assertEquals(75, motorcycle.speed);
    }

    @Test
    public void testCarStopsWhenParked() {
        car.testDrive();
        car.park();
        assertEquals(0, car.speed);
    }

    @Test
    public void testMotorcycleStopsWhenParked() {
        motorcycle.testDrive();
        motorcycle.park();
        assertEquals(0, motorcycle.speed);
    }
}