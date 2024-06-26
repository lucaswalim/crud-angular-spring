package com.lucaswalim.crudspring;

import com.lucaswalim.crudspring.model.Course;
import com.lucaswalim.crudspring.repository.CourseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

    public static void main(String[] args) {
        SpringApplication.run(CrudSpringApplication.class, args);
    }


    @Bean
    CommandLineRunner initDatabase(CourseRepository courseRepository) {
        return args -> {
            courseRepository.deleteAll();
            var course = new Course();
            course.setName("Angular com Spring");
            course.setCategory("front-end");

            courseRepository.save(course);
        };
    }
}
