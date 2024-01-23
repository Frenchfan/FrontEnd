package org.example;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

/**
 * Class to sort purchases
 */
public class Shop {

    public List<Product> sortProductsByPrice(List<Product> purchaseList) {
        List<Product> sortedList = new ArrayList<>(purchaseList);
        sortedList.sort(Comparator.comparing(Product::getPrice));
        return sortedList;
    }

    public Product getMostExpensiveProduct(List<Product> purchaseList) {
        List<Product> sortedList = sortProductsByPrice(purchaseList);
        return sortedList.get(sortedList.size() - 1);
    }
}
