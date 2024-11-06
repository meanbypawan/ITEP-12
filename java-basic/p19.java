/*
  Logical Operator :--
   1. &&  AND
   2. ||  OR
   3. !   NOT

   A        B           A&&B                A||B
  (a>b)    (c<d)        (a>b) && (c<d)   (a>b) || (c<d)
  true     false        false               true
  false    true         false               true
  true     true         true                true    
  false    false        false               false

*/
class TestMain{
    public static void main(String args[]){
        int a,b,c,d;
        a = 10;
        b = 20;
        c = 30;
        d = 40;
        boolean x = (a > b) & (++c < d);
        System.out.println(a);
        System.out.println(b);
        System.out.println(c);
        System.out.println(d);
        System.out.println(x);
    }
}












