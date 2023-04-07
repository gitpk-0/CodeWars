package main;

import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;

public class DirReduction {

    public static String[] dirReduc(String[] arr) {
        for (String i : arr) {
            System.out.print(i);
            System.out.print(", ");
        }

        HashMap<String, Integer> dirs = new HashMap<>();
        ArrayList<String> output = new ArrayList<>();

        for (String dir : arr) {
            if (output.size() == 0) {
                output.add(dir);
                continue;
            }

            int countDir = Collections.frequency(output, dir);

            if (dir.equals("SOUTH") && )









            if (dirs.containsKey(dir)) {
                int add = dirs.get(dir) + 1;
                dirs.put(dir, add);
            } else {
                dirs.put(dir, 1);
            }
        }

        // north south comparison
        int n_s_diff = dirs.get("NORTH") - dirs.get("SOUTH");
        int e_w_diff = dirs.get("EAST") - dirs.get("WEST");

        if (e_w_diff > 0) {
            while (e_w_diff > 0) {
                output.add("EAST");
                e_w_diff--;
            }
        }

        if (e_w_diff < 0) {
            while (e_w_diff < 0) {
                output.add("WEST");
                e_w_diff++;
            }
        }

        if (n_s_diff > 0) {
            while (n_s_diff > 0) {
                output.add("NORTH");
                n_s_diff--;
            }
        }

        if (n_s_diff < 0) {
            while (n_s_diff < 0) {
                output.add("SOUTH");
                n_s_diff++;
            }
        }




        System.out.println(output.toString());

        return output.toArray(new String[]{});
    }

    public static void main(String[] args) {
        System.out.println(dirReduc(new String[]{"NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"})); // WEST

        System.out.println(dirReduc(new String[]{"EAST", "EAST", "WEST", "NORTH", "WEST", "EAST", "EAST", "SOUTH", "NORTH", "WEST"})); // EAST
    }
}