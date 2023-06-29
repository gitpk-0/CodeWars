import java.util.ArrayList;
import java.util.HashMap;

// my solution - time complexity = O(n), space complexity = O(k) k = number of teams
public class TournamentWinner {
    public static void main(String[] args) {
        ArrayList<ArrayList<String>> competitions = new ArrayList<>();

        ArrayList<String> first = new ArrayList<>();
        first.add("HTML");
        first.add("C#");
        competitions.add(first);

        ArrayList<String> second = new ArrayList<>();
        second.add("C#");
        second.add("Python");
        competitions.add(second);

        ArrayList<String> third = new ArrayList<>();
        third.add("Python");
        third.add("HTML");
        competitions.add(third);

        ArrayList<Integer> results = new ArrayList<>();
        results.add(0);
        results.add(0);
        results.add(1);

        System.out.println(TournamentWinnerProgram0.tournamentWinner(competitions, results));
    }
}


class TournamentWinnerProgram0 {
    public static String tournamentWinner(ArrayList<ArrayList<String>> competitions, ArrayList<Integer> results) {

        HashMap<String, Integer> standings = new HashMap<>();

        int count = 0;
        for (ArrayList<String> teams : competitions) {
            String home = teams.get(0);
            String away = teams.get(1);
            Integer result = results.get(count);

            if (!standings.containsKey(home)) {
                standings.put(home, 0);
            }

            if (!standings.containsKey(away)) {
                standings.put(away, 0);
            }

            if (result == 0) { // away team won
                standings.put(away, standings.get(away) + 3);
            } else if (result == 1) { // home team won
                standings.put(home, standings.get(home) + 3);
            }
            count++;
        }

        System.out.println(standings);

        Integer max = 0;
        String winner = "";
        for (String team : standings.keySet()) {
            if (standings.get(team) > max) {
                winner = team;
                max = standings.get(team);
            }
        }

        return winner;
    }
}


class TournamentWinnerProgram1 {
    public static String tournamentWinner(ArrayList<ArrayList<String>> competitions, ArrayList<Integer> results) {

        HashMap<String, Integer> standings = new HashMap<>();

        int count = 0;
        String bestTeam = "";
        for (ArrayList<String> teams : competitions) {
            String home = teams.get(0);
            String away = teams.get(1);
            Integer result = results.get(count);

            if (!standings.containsKey(home)) {
                standings.put(home, 0);
                bestTeam = home;
            }

            if (!standings.containsKey(away)) {
                standings.put(away, 0);
            }

            if (result == 0) { // away team won
                standings.put(away, standings.get(away) + 3);
                if (!(bestTeam == "") && standings.get(away) > standings.get(bestTeam)) {
                    bestTeam = away;
                }
            } else if (result == 1) { // home team won
                standings.put(home, standings.get(home) + 3);
                if (!(bestTeam == "") && standings.get(home) > standings.get(bestTeam)) {
                    bestTeam = home;
                }
            }
            count++;
        }

        System.out.println(standings);

        return bestTeam;
    }

}

class TournamentWinnerProgram2 {

}