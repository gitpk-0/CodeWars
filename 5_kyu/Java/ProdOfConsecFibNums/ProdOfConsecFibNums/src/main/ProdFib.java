package main;

import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.Arrays;

public class ProdFib {

    public static long[] productFib(long prod) {
        ArrayList<Long> fibNums = new ArrayList<>(Arrays.asList(0L, 1L));

        int n = 0;
        while (true) {
            fibNums.add(fibNums.get(n) + fibNums.get(n + 1));
            n++;

            int i = 0;
            while (i < fibNums.size() - 1) {
                long x = fibNums.get(i);
                long y = fibNums.get(i + 1);

                if (x * y == prod) {
                    return new long[]{x, y, 1};
                } else if (x * y > prod) {
                    return new long[]{x, y, 0};
                }

                i++;
            }
        }
    }

    public static void main(String[] args) {
        long[] r = new long[]{55, 89, 1};
        System.out.println(Arrays.equals(productFib(4895), r));

        long[] s = new long[] {89, 144, 0};
        System.out.println(Arrays.equals(productFib(5895), s));

        // long num = 4456077604922913920L;
        // System.out.println(productFib(num));
    }
}