package ru.geekbrains.lesson3;

import java.awt.*;

public class Program {


    public static void main(String[] args) {
        //Специально тут поменял тип SportCar на Car - так правильнее :)
        Car sportCar = SportCar.create("A", CarType.Sport, Color.BLACK, 3);
        sportCar.movement();
        sportCar.maintenance();
        RefuelingStation refuelingStation = new RefuelingStation();
        sportCar.setRefuelingStation(refuelingStation);
        sportCar.fuel();
        ServiceStation serviceStation = new ServiceStation();
        sportCar.setServiceStation(serviceStation);
        sportCar.service();
        Car harvester = new Harvester("B", CarType.Hatchback, Color.BLUE);
        harvester.movement();
        harvester.maintenance();
        RefuelingStation refuelingStation1 = new RefuelingStation();
        harvester.fuelType = FuelType.Gasoline;
        harvester.setRefuelingStation(refuelingStation1);
        harvester.fuel();
        ServiceStation serviceStation1 = new ServiceStation();
        harvester.setServiceStation(serviceStation1);
    }

    public static double calculateMaintenance(Car car){
        if (car.getWheelsCount() == 6){
            return 1500 * 6;
        }
        else {
            return 1000 * 4;
        }
    }

}
