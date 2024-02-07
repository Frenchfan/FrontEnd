package seminars.third.hw;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;


class MainHWTest {

    public MainHW mainHW;

    @BeforeEach
    void setUp() {
        mainHW = new MainHW();
    }

    @Test
    void evenNumberThenTrue() {
        boolean result = mainHW.evenOddNumber(2);
        assertTrue(result);}

    @Test
    void OddNumberThenFalse() {
        boolean result = mainHW.evenOddNumber(5);
        assertFalse(result);}

    @Test
    void NumberInIntervalThenTrue() {
        boolean result = mainHW.numberInInterval(41);
        assertTrue(result);}

    @Test
    void NumberNotInIntervalThenFalse() {
        boolean result = mainHW.numberInInterval(11);
        assertFalse(result);}
}