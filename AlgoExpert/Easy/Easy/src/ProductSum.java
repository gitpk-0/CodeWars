import java.util.ArrayList;
import java.util.List;

// Write a function that takes in a "special" array and returns its product sum.

// A "special" array is a non-empty array that contains either integers or other "special" arrays. The product sum of
// a "special" array is the sum of its elements, where "special" arrays inside it are summed themselves and then
// multiplied by their level of depth.

// The depth of a "special" array is how far nested it is. For instance, the depth of [] is 1; the depth of the inner
// array in [[]] is 2; the depth of the innermost array in [[[]]] is 3.

// Therefore, the product sum of [x, y] is x + y; the product sum of [x, [y, z]] is x + 2 * (y + z); the product
// sum of [x, [y, [z]]] is x + 2 * (y + 3z).

// array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]

public class ProductSum {

    public static void main(String[] args) {

        // {"array": [5, 2, [7, -1], 3, [6, [-13, 8], 4]]}
        List<Object> array = new ArrayList<>();
        array.add(5);
        array.add(2);

        List<Object> sublist1 = new ArrayList<>();
        sublist1.add(7);
        sublist1.add(-1);
        array.add(sublist1);

        array.add(3);

        List<Object> sublist2 = new ArrayList<>();
        sublist2.add(6);

        List<Object> sublist3 = new ArrayList<>();
        sublist3.add(-13);
        sublist3.add(8);

        sublist2.add(sublist3);
        sublist2.add(4);

        array.add(sublist2);

        System.out.println("Product Sum: " + ProductSum0.productSum(array)); // 12
    }
}

class ProductSum0 {
    // Tip: You can use `element instanceof ArrayList` to check whether an item
    // is an array or an integer.
    public static int productSum(List<Object> array) {
        return productSumHelper(array, 1);
    }


    public static int productSumHelper(List<Object> array, int depth) {
        int sum = 0;

        for (Object current : array) {
            if (current instanceof ArrayList) { // current value is an array
                @SuppressWarnings("unchecked")
                ArrayList<Object> specialArr = (ArrayList<Object>) current;
                sum += productSumHelper(specialArr, depth +1);
            } else { // current value is an integer
                sum += (int) current;
            }
        }

        return sum * depth;
    }
}
