import java.util.ArrayList;
import java.util.List;

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

        System.out.println(ProductSum0.productSum(array));
    }
}

class ProductSum0 {
    // Tip: You can use `element instanceof ArrayList` to check whether an item
    // is an array or an integer.
    public static int productSum(List<Object> array) {


        int productSum = 0;
        for (int i = 0; i < array.size(); i++) {
            Object element = array.get(i);
            System.out.println("Array [" + i + "] is an integer: " + (element instanceof Integer));

            if (element instanceof Integer) {
                productSum = productSum + (int) element;
            } else {
                int multiplier = 2;
                while
            }

        }


        return -1;
    }
}
