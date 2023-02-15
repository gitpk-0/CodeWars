import java.util.ArrayList;
import java.util.HashMap;

public class Greed{
  public static int greedy(int[] dice){

    // create hashmap to track count of each dice value (1-6)
    // create arraylist that consists of the scoring system (50 - 1000)
    // loop thru hashmap
      // subtract counts once value has been updated


    HashMap<Integer, Interger> rollCounts = new HashMap<>();






    //code here
    
    int count1 = 0;
    int count2 = 0;
    int count3 = 0;
    int count4 = 0;
    int count5 = 0;
    int count6 = 0;
    
    int[] count = new int[6];
    
    for (int i = 0; i < dice.length; i++) {
      switch (dice[i]) {
          case 1:
            count1++;
            continue;
          case 2:
            count2++;
            continue;
          case 3:
            count3++;
            continue;
          case 4:
            count4++;
            continue;
          case 5:
            count5++;
            continue;
          case 6:
            count6++;
            continue;
      }
    }
    
    int total = 0;
    
    switch (count1) {
        case 1:
          total += 100;
            break;
        
        case 2:
          total += 200;
            break;
        
        case 3:
          total += 1000;
          break;
        
        case 4:
          total += 1100;
          break;
        
        case 5:
        total += 1200;
          break;
          
    }    
    
    switch (count2) {
        case 3:
          total += 200;
          break;
    }
    
    switch (count3) {
        case 3:
          total += 300;
          break;
    }
    
    switch (count4) {
        case 3:
          total += 400;
          break;
    }
    
    
    switch (count5) {
        case 1:
          total += 50;
            break;
        
        case 2:
          total += 100;
            break;
        
        case 3:
          total += 500;
          break;
        
        case 4:
          total += 550;
          break;
        
        case 5:
        total += 600;
          break;
    }
    
    switch (count6) {
        case 3:
          total += 600;
          break;
    }
    
    for (int i = 0; i < dice.length; i++) {
      System.out.print(dice[i] + "\t");
    }
    return total;
  }
}