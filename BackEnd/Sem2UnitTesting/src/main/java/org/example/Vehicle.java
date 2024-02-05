package org.example;

public abstract class Vehicle {
    protected String company;
    protected String model;
    protected int yearRelease;
    protected short numWheels;
    protected short speed;

    public abstract void testDrive();

    public abstract void park();

}
