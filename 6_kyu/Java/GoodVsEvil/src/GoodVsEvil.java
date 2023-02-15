import java.util.ArrayList;

public class GoodVsEvil {

    public static String battle(String goodAmounts, String evilAmounts) {
        ArrayList<Integer> goodPoints = new ArrayList<>();
        goodPoints.add(1); // hobbits
        goodPoints.add(2); //men
        goodPoints.add(3); // elves
        goodPoints.add(3); // dwarves
        goodPoints.add(4); // eagles
        goodPoints.add(10); // wizards

        ArrayList<Integer> evilPoints = new ArrayList<>();
        evilPoints.add(1); // orcs
        evilPoints.add(2); // men
        evilPoints.add(2); // wargs
        evilPoints.add(2); // goblins
        evilPoints.add(3); // uruk hai
        evilPoints.add(5); // trolls
        evilPoints.add(10); // wizards

        String[] good = goodAmounts.split(" "); // 0 - 5
        int count = 0;
        int goodSum = 0;
        while (count <= 5) {
            goodSum += Integer.valueOf(good[count]) * goodPoints.get(count);
            count++;
        }

        String[] evil = evilAmounts.split(" "); // 0 - 6
        count = 0;
        int evilSum = 0;
        while (count <= 6) {
            evilSum += Integer.valueOf(evil[count]) * evilPoints.get(count);
            count++;
        }

        String goodWin = "Battle Result: Good triumphs over Evil";
        String evilWin = "Battle Result: Evil eradicates all trace of Good";
        String draw = "Battle Result: No victor on this battle field";

        return goodSum > evilSum ? goodWin :
                evilSum > goodSum ? evilWin :
                        draw;

    }

}
