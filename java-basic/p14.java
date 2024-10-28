/*
   Increment/Decrement
    ++ / --
   Increment :-
     a.  ++x; pre-increment :- Pre-incremenet first increment value
         by one then assign
      
     b.  x++; post-increment :- Post-increment first assign the value
         then increment by one;
 */
class TestMain{
    public static void main(String arg[]){
       int x = 10,y;
       y = ++x;
       /*
          x = x + 1;
          y = x;
        */
       System.out.println("x : "+x);            
       System.out.println("y : "+y);
    }
}



