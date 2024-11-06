/*
  Conditional Operator :-

    (condition/BE) ? expression-2 : expression-3;
 */
class TestMain{
    public static void main(String args[]){
       int cheeku,peeku,rinku;
       cheeku = 20;
       peeku = 25;
       rinku = 32;
      /*int max =  (a > b) ? a : b;
      max = (max > c) ? max : c; 
      */
      //int max = (cheeku > peeku && cheeku > rinku) ? cheeku : (peeku > rinku) ? peeku : rinku;
      String max = (cheeku > peeku && cheeku > rinku) ? "Cheeku is tallest" : (peeku > rinku) ? "Peeku is talles" :"Rinku is tallest";
     
      System.out.println(max);
    }
}