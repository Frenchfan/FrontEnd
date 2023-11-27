package ru.geekbrains.lesson1.homework.ModelElements;

import java.util.ArrayList;
import java.util.Collection;

public class Scene {

    private int id;

    private final Collection<PoligonalModel> models = new ArrayList<>();

    private final Collection<Flash> flashes = new ArrayList<>();

    public Collection<PoligonalModel> getModels() {
        return models;
    }

    public Collection<Flash> getFlashes() {
        return flashes;
    }

    public Collection<Flash> addFlash(Flash flash) {
        return flashes;
    }

    public Collection<PoligonalModel> addPoligonalModel(PoligonalModel poligonalModel, int id) {
        return models;
    }
}
