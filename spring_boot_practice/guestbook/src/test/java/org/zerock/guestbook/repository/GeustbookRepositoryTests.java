package org.zerock.guestbook.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.zerock.guestbook.entity.Guestbook;

import java.util.stream.IntStream;

@SpringBootTest
public class GeustbookRepositoryTests {

    @Autowired
    private GuestbookRepository guestbookRepository;

    @Test
    public void insertDummies() {
        IntStream.rangeClosed(1, 300).forEach(i -> {
            Guestbook guestbook = Guestbook.builder()
                    .title("title...." + i)
                    .content("Content..." + i)
                    .writer("user" + (1 % 10))
                    .build();
            System.out.println(guestbookRepository.save(guestbook));
        });
    }
}
