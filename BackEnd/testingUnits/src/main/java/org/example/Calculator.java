package org.example;

import java.math.BigDecimal;

public class Calculator {
    public int add(int a, int b) {
        return a + b;
    }

    public int subtract(int a, int b) {
        return a - b;
    }

    public int multiply(int a, int b) {
        return a * b;
    }

    public int divide(int a, int b) {
        if (b == 0) {
            throw new ArithmeticException("Division by zero is not allowed");
        }
        return a / b;
    }

    /**
     * Принимает сумму покупки и процент скидки и возвращает сумму с учетом скидки
     * С деньгами лучше использовать BigDecimal или специализированный формат,
     * или свой класс с полями для копеек / центов и целых
     * @param purchaseAmount сумма покупки
     * @param discount скидка в %
     * @return сумму с учетом скидки
     */
    public BigDecimal calculateDiscount (BigDecimal purchaseAmount, float discount) {
        if (discount < 100 && discount > 0) {
                return purchaseAmount.multiply(BigDecimal.valueOf((100-discount) / 100));
        }
        throw new ArithmeticException("Discount must be between 0 and 100");
    }
}