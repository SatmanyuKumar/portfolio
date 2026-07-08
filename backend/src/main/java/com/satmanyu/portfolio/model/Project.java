package com.satmanyu.portfolio.model;

import java.util.List;

public class Project {
    private String title;
    private String description;
    private List<String> highlights;
    private List<String> tech;
    private String link;

    public Project(String title, String description, List<String> highlights, List<String> tech, String link) {
        this.title = title;
        this.description = description;
        this.highlights = highlights;
        this.tech = tech;
        this.link = link;
    }

    public String getTitle() { return title; }
    public String getDescription() { return description; }
    public List<String> getHighlights() { return highlights; }
    public List<String> getTech() { return tech; }
    public String getLink() { return link; }
}
