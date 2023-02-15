import java.util.ArrayList;

public class Main {

    public static int[] snail(int[][] array) {
        // enjoy
        if (array.length == 1) {
            return array[0];
        }

        ArrayList<Integer> out = new ArrayList<>();

        int row = 0;
        int col = 0;
        int inc = 1;

        // e repeat steps a - d until array has length * length values
        while (out.size() < (array.length * array.length)) {
            // a move right length - 1 places
            while (col <= array.length - inc) {
                out.add(array[row][col]);
                col++;
            }
            col--;
            row++;

            // b move down length - 1 places
            while (row <= array.length - inc) {
                out.add(array[row][col]);
                row++;
            }

            row--;
            // c move left length - 1 places
            while (col >= inc) {
                col--;
                out.add(array[row][col]);
            }

            // d move up length - 2 places
            while (row > inc) {
                row--;
                out.add(array[row][col]);
            }
            col++;
            inc++;
        }


        int[] output = new int[out.size()];
        for (int i = 0; i < output.length; i++) {
            output[i] = out.get(i);
        }
        return output;
    }

    public static void main(String[] args) {
        int[][] array
                = {{1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}};
        // int[][] array = {{}};
        Main.snail(array);
    }
}
