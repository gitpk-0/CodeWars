import org.junit.jupiter.api.Test;
import pairofgloves.pairofgloves.Kata;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class SampleTests {
    @Test
    void tests() {
        assertEquals(0, Kata.numberOfPairs(new String[] {}));
        assertEquals(1, Kata.numberOfPairs(new String[] {"red", "red"}));
        assertEquals(0, Kata.numberOfPairs(new String[] {"red", "green", "blue"}));
        assertEquals(3, Kata.numberOfPairs(new String[] {"gray", "black", "purple", "purple", "gray", "black"}));
        assertEquals(4, Kata.numberOfPairs(new String[] {"red", "green", "blue", "blue", "red", "green", "red", "red", "red"}));
    }
}