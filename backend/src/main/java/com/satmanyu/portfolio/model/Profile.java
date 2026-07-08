package com.satmanyu.portfolio.model;

import java.util.List;
import java.util.Map;

public class Profile {
    private String name;
    private String title;
    private String email;
    private String phone;
    private String location;
    private String github;
    private String linkedin;
    private Map<String, List<String>> skills;
    private List<Map<String, String>> education;
    private List<String> certifications;

    public Profile(String name, String title, String email, String phone, String location,
                    String github, String linkedin, Map<String, List<String>> skills,
                    List<Map<String, String>> education, List<String> certifications) {
        this.name = name;
        this.title = title;
        this.email = email;
        this.phone = phone;
        this.location = location;
        this.github = github;
        this.linkedin = linkedin;
        this.skills = skills;
        this.education = education;
        this.certifications = certifications;
    }

    public String getName() { return name; }
    public String getTitle() { return title; }
    public String getEmail() { return email; }
    public String getPhone() { return phone; }
    public String getLocation() { return location; }
    public String getGithub() { return github; }
    public String getLinkedin() { return linkedin; }
    public Map<String, List<String>> getSkills() { return skills; }
    public List<Map<String, String>> getEducation() { return education; }
    public List<String> getCertifications() { return certifications; }
}
