package test;

import main.Solution;
import org.junit.Test;
import static org.junit.Assert.assertEquals;
import org.junit.runners.JUnit4;

// TODO: Replace examples and use TDD by writing your own tests

public class SolutionTest {
    @Test
    public void sampleTest() {
        // assertEquals("expected", "actual");
        assertEquals(true, Solution.validParentheses( "()" ));
        assertEquals(false, Solution.validParentheses( "())" ));
        assertEquals(true, Solution.validParentheses( "32423(sgsdg)" ));
        assertEquals(false, Solution.validParentheses( "(dsgdsg))2432" ));
        assertEquals(true, Solution.validParentheses( "adasdasfa" ));
    }
}