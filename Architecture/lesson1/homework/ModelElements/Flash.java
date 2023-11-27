package ru.geekbrains.lesson1.homework.ModelElements;

import java.util.ArrayList;
import java.util.List;

public class Flash {
    private Point3D location;
    private Angle3D angle;
    private Color color;

    private float power;

    private final List<Scene> scenes = new ArrayList<>();

    public void rotate(Angle3D angle) {

    }

    public void move(Point3D location) {

    }

    public List<Scene> getScenes() {
        return scenes;
    }
}
