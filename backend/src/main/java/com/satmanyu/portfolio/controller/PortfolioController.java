package com.satmanyu.portfolio.controller;

import com.satmanyu.portfolio.model.Profile;
import com.satmanyu.portfolio.model.Project;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class PortfolioController {

    @GetMapping("/profile")
    public Profile getProfile() {
        return new Profile(
                "Satmanyu Kumar",
                "Java Full Stack Developer",
                "satmanyukumar123@gmail.com",
                "960*******",
                "Uttar Pradesh, India",
                "https://github.com/SatmanyuKumar", 
                "https://www.linkedin.com/in/satmanyu-kumar-b2b622245/", 
                Map.of(
                        "Languages", List.of("Advance Java", "Core Java", "Python (Basic)", "HTML, CSS, JavaScript", "Data Structures & Algorithms (Java)", "SQL"),
                        "Tools", List.of("Spring Tool Suite (STS)", "IntelliJ IDEA", "Eclipse", "Visual Studio Code", "Arduino IDE","SwaggerUi","Postman"),
                        "Database", List.of("MySQL", "PostgreSQL")
                ),
                List.of(
                        Map.of("degree", "B.Tech CSE (IoT)", "school", "Noida Institute of Engineering and Technology", "period", "Aug 2022 - Aug 2025", "detail", "CGPA: 7.24"),
                        Map.of("degree", "Diploma (Civil)", "school", "Government Polytechnic Raghopur, Supaul", "period", "2022", "detail", "CGPA: 8"),
                        Map.of("degree", "Class 10", "school", "GOVT+2 High School Birpur, Supaul", "period", "2019", "detail", "Percentage: 83%")
                ),
                List.of("INCAPP Certification: Core Java", "INCAPP Certification: Data Structures and Algorithms (Java)", "INCAPP Certification: Advanced Java with Spring Boot")
        );
    }

    @GetMapping("/projects")
    public List<Project> getProjects() {
        return List.of(
                new Project(
                        "Text-Based Neural Knowledge Management System",
                        "A document intelligence app that lets users upload PDFs and ask questions about their content, answered by an integrated AI model.",
                        List.of(
                                "User registration, authentication & authorization with JWT and Spring Security",
                                "PDF upload with text extraction via Apache Tika",
                                "AI-powered Q&A over uploaded document content using Spring AI",
                                "Document ownership validation and PDF preview",
                                "Layered architecture: Controller, Service, Repository"
                        ),
                        List.of("Java", "Spring Boot", "Spring Security", "JWT", "Thymeleaf", "MySQL", "Apache Tika", "Spring AI"),
                        "https://neuralknowledgeapp-production.up.railway.app/"
                ),
                new Project(
                        "Real-Time Chat Room Application",
                        "A real-time chat room enabling seamless, bi-directional communication between users.",
                        List.of(
                                "Bi-directional messaging with WebSocket",
                                "Built on Spring Boot for the messaging backend"
                        ),
                        List.of("Java", "Spring Boot", "WebSocket"),
                        "#" 
                )
        );
    }
}
