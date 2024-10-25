/*
   Java Interger :-
    -21247483648 to 2147483647
        integer number too large
 */
class TestMain{
    public static void main(String args[]){
        int x = 2147483648; // ..47, ..-48, ..-47, -46
        System.out.println(x); //
        int z = 2147483647;
        z = z + 1; // Runtime expresssion
        System.out.println(z)
    }
}