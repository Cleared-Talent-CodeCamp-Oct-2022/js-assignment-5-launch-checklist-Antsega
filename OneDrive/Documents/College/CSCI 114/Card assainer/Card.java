/**
 * Creation of a single playing card
 *
 * @author Anthony Segarra
 * @version 10 Nov 22' V.2.0
 */
public class Card {
    // instance variables
    // final states values unchangeable
    private final int rank;
    private final int suit;

    /**
     * Constructor for objects of class Card
     * 
     * @param rankIn to set rank
     * @param suitIn to set suit
     */

    /*
     * @return suit
     */
    public int getSuit() {
        return suit;
    }

    /*
     * @return rank
     */
    public int getRank() {
        return rank;
    }

    /*
     * Constructor Function
     * sets rank and suit from arguements
     * evalautes if they're within desired range
     * kicks back an error if (!range) and specifies the problem
     */
    public Card(int rankInput, int suitInput) {
        // changing inputs to instance variable properties
        rank = rankInput;
        suit = suitInput;

        // rank elvaluation
        // if outside of range print error and stops program
        if ((rank < 2) || (rank > 14)) {
            System.out.println("first input outside of range");
            return;

        }

        // suit evaluation
        // sends error if out of range and stops program
        if ((suit < 0) || (suit > 3)) {
            System.out.println("second input outside of range");
            return;
        }

    }

    /*
     * Creates face card value(s)
     * rank becomes a string value
     * rank evaluated
     * appends face card and suit value using unicode
     * 
     * @return single string containing completed card
     */
    public String toString() {
        // creating suits and face card values
        // values will not be changed
        final int CLUBS = 0;
        final int DIAMONDS = 1;
        final int HEARTS = 2;
        final int SPADES = 3;
        final int A = 14;
        final int K = 13;
        final int Q = 12;
        final int J = 11;

        String firRankStr = ""; // if input is double digit, push value, otherwise add comma to end of single
                                // digit number
        if (rank > 9)
            firRankStr += String.valueOf(rank);
        else
            firRankStr += String.valueOf(rank) + ",";

        String secRankStr = " "; // placeholder for str conversion
        if (rank == J) {
            secRankStr += '\u004a'; // Unicode char for J
        } else if (rank == Q) {
            secRankStr += '\u0051'; // Q
        } else if (rank == K) {
            secRankStr += '\u004b'; // K
        } else if (rank == A) {
            secRankStr += '\u0041'; // A
        } else if (rank == 10) { // if rank is not two digit, drop underscore
            secRankStr = String.valueOf(rank);
        } else
            secRankStr += String.valueOf(rank); // if not a face card will return num value as string

        // assigns out to special character
        String suitStr = ""; // placeholder for special character
        if (suit == CLUBS)
            suitStr += '\u2663'; // Unicode char for club
        else if (suit == DIAMONDS)
            suitStr += '\u2662'; // diamond
        else if (suit == HEARTS)
            suitStr += '\u2661'; // heart
        else if (suit == SPADES)
            suitStr += '\u2660'; // spade

        // testing {start}
        // char quote = '"';
        // String finalString = "rank " + firRankStr + " suit " + suit + " is " + quote
        // + secRankStr + suitStr + quote;
        // testing {end}

        String finalString2 = secRankStr + suitStr;
        return finalString2;

    }

}
