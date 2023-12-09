package ru.geekbrains.lesson3;

import java.awt.*;

public class Harvester extends Car {

    public Harvester(String make, CarType model, Color color) {
        super(make, model, color);
        wheelsCount = 6;
    }

    public void sweeping() {
        System.out.println("Автомобиль метет улицу.");
    }

    @Override
    public void movement() {
        System.out.println("The harvester moves slow");

    }

    @Override
    public void maintenance() {
        System.out.println("The harvester is maintained");
    }

    @Override
    public boolean gearShifting() {
        return false;
    }

    @Override
    public boolean switchHeadlights() {
        return false;
    }

    @Override
    public boolean switchWipers() {
        return false;
    }
}
