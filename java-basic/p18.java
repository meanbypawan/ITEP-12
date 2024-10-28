class TestMain{
    public static void main(String args[]){
        int a,b,c,d;
        boolean x;
        a = 10;
        b = 10;
        c = 10;
        d = 10;
        x =  (a == b) == (c == d);
        /*
          x = a == b == c == d;
              10 == 10
                  true == c
                  true == 10
                     error
         */
        System.out.println(x);
    }
}