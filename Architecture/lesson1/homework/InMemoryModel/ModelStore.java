package ru.geekbrains.lesson1.homework.InMemoryModel;


import ru.geekbrains.lesson1.homework.ModelElements.Camera;
import ru.geekbrains.lesson1.homework.ModelElements.Flash;
import ru.geekbrains.lesson1.homework.ModelElements.PoligonalModel;
import ru.geekbrains.lesson1.homework.ModelElements.Scene;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

/**
 * Хранилище 3D-элементов
 * TODO: Доработать самостоятельно в рамках домашней работы
 */
public class ModelStore implements ModelChanger {

    private final Collection<PoligonalModel> models = new ArrayList<>();

    private final Collection<ModelChangedObserver> observers = new ArrayList<>();

    private final List<Flash> flashes = new ArrayList<>();

    private final Collection<Camera> cameras = new ArrayList<>();


    @Override
    public void registerModelChanger(ModelChangedObserver o) {
        observers.add(o);
    }

    @Override
    public void removeModelChanger(ModelChangedObserver o) {
        observers.remove(o);
    }

    /**
     * Нотификация изменений на уровне хранилища
     */
    private void notifyChange() {
        for (ModelChangedObserver observer : observers) {
            observer.applyUpdateModel();
        }
    }

    public void addModel(PoligonalModel poligonalModel) {
        notifyChange();
    }

    public Scene getScena(int id) {
        List<Scene> scenes = flashes.get(id).getScenes();
        return scenes.get(id);
    }
}
