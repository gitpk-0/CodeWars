package test;

import static org.junit.Assert.*;
import java.util.Random;

import main.ProdFib;
import org.junit.Test;


public class ProdFibTest {

    @Test
    public void test1() {
        long[] r = new long[] {55, 89, 1};
        assertArrayEquals(r, ProdFib.productFib(4895));
    }
    @Test
    public void test2() {
        long[] r = new long[] {89, 144, 0};
        assertArrayEquals(r, ProdFib.productFib(5895));
    }
}