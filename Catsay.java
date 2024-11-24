import java.io.IOException;

public class Catsay {

    public static void main(String[] args) throws IOException {
        CatsayProgram c = new CatsayProgram();
        String tweetStream = c.makeTweet();
        System.out.print(tweetStream);
    }
}
