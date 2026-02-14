package com.resume.backend.service;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

@Service
public class ResumeServiceImpl implements ResumeService {

    // private ChatClient chatClient;

    public ResumeServiceImpl() { // ChatClient.Builder builder
        // this.chatClient = builder.build();
    }

    @Override
    public Map<String, Object> generateResumeResponse(String userResumeDescription) throws IOException {
        System.out
                .println("DEBUG: Mock-Only Mode active. generateResumeResponse called with: " + userResumeDescription);

        // Simulating processing time for better UX
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        return getMockResume();
    }

    private Map<String, Object> getMockResume() {
        Map<String, Object> mockResume = new java.util.HashMap<>();

        mockResume.put("personalInformation", Map.of(
                "fullName", "John Doe (Fallback)",
                "email", "john.doe@example.com",
                "phoneNumber", "+1 123 456 7890",
                "location", "New York, USA",
                "linkedIn", "https://linkedin.com/in/johndoe",
                "gitHub", "https://github.com/johndoe",
                "portfolio", "https://johndoe.dev"));

        mockResume.put("summary",
                "Experienced Full Stack Developer with over 5 years of expertise in building scalable web applications. Passionate about clean code, performance optimization, and user-centric design. Proven track record of delivering high-quality software solutions in agile environments.");

        mockResume.put("skills", java.util.List.of(
                Map.of("title", "Java", "level", "Advanced"),
                Map.of("title", "Spring Boot", "level", "Advanced"),
                Map.of("title", "React", "level", "Intermediate"),
                Map.of("title", "Docker", "level", "Intermediate")));

        mockResume.put("experience", java.util.List.of(
                Map.of(
                        "jobTitle", "Senior Software Engineer",
                        "company", "Tech Solutions Inc.",
                        "location", "San Francisco, CA",
                        "duration", "2020 - Present",
                        "responsibility",
                        "Led a team of 5 developers to build a cloud-native microservices architecture. Improved system latency by 40%."),
                Map.of(
                        "jobTitle", "Software Developer",
                        "company", "StartUp Hub",
                        "location", "Austin, TX",
                        "duration", "2018 - 2020",
                        "responsibility",
                        "Developed RESTful APIs and integrated third-party services. Collaborated with UI/UX designers to implement responsive front-end components.")));

        mockResume.put("education", java.util.List.of(
                Map.of(
                        "degree", "Bachelor of Science in Computer Science",
                        "university", "University of Technology",
                        "location", "Boston, MA",
                        "graduationYear", "2018")));

        mockResume.put("projects", java.util.List.of(
                Map.of(
                        "title", "E-commerce Platform",
                        "description",
                        "A full-featured e-commerce application with secure payment gateway integration.",
                        "technologiesUsed", java.util.List.of("Java", "Spring Boot", "React", "MySQL"),
                        "githubLink", "https://github.com/johndoe/ecommerce")));

        mockResume.put("certifications", java.util.List.of(
                Map.of("title", "AWS Certified Solutions Architect", "issuingOrganization", "Amazon Web Services",
                        "year", "2021")));

        mockResume.put("languages", java.util.List.of(
                Map.of("name", "English"),
                Map.of("name", "Spanish")));

        mockResume.put("interests", java.util.List.of(
                Map.of("name", "Open Source Contributing"),
                Map.of("name", "Hiking"),
                Map.of("name", "Photography")));

        mockResume.put("achievements", java.util.List.of(
                Map.of("title", "Best Employee of the Year", "year", "2022", "extraInformation",
                        "Recognized for outstanding contribution to the flagship project.")));

        mockResume.put("references", java.util.List.of(
                Map.of("name", "Jane Smith", "designation", "CTO", "company", "Tech Solutions Inc.", "contact",
                        "jane.smith@example.com")));

        // Fallback for parsing logic wrapper
        Map<String, Object> responseWrapper = new java.util.HashMap<>();
        responseWrapper.put("data", mockResume);
        responseWrapper.put("think", null);

        return responseWrapper;
    }

    /*
     * String loadPromptFromFile(String filename) throws IOException {
     * org.springframework.core.io.Resource resource = new
     * ClassPathResource(filename);
     * try (java.io.InputStream inputStream = resource.getInputStream()) {
     * return new String(inputStream.readAllBytes(),
     * java.nio.charset.StandardCharsets.UTF_8);
     * }
     * }
     * 
     * String putValuesToTemplate(String template, Map<String, String> values) {
     * for (Map.Entry<String, String> entry : values.entrySet()) {
     * 
     * template = template.replace("{{" + entry.getKey() + "}}", entry.getValue());
     * 
     * }
     * return template;
     * }
     */

    public static Map<String, Object> parseMultipleResponses(String response) {
        Map<String, Object> jsonResponse = new HashMap<>();

        // Log the raw response for debugging
        System.out.println("Raw AI Response: " + response);

        // Extract content inside <think> tags
        int thinkStartIndex = response.indexOf("<think>");
        int thinkEndIndex = response.indexOf("</think>");

        if (thinkStartIndex != -1 && thinkEndIndex != -1) {
            String thinkContent = response.substring(thinkStartIndex + 7, thinkEndIndex).trim();
            jsonResponse.put("think", thinkContent);
        } else {
            jsonResponse.put("think", null);
        }

        // Attempt to extract JSON
        String jsonContent = null;
        int jsonStartIndex = response.indexOf("```json");

        if (jsonStartIndex != -1) {
            // Case 1: JSON inside markdown code blocks
            int jsonStart = jsonStartIndex + 7;
            int jsonEnd = response.lastIndexOf("```");
            if (jsonEnd != -1 && jsonStart < jsonEnd) {
                jsonContent = response.substring(jsonStart, jsonEnd).trim();
            }
        } else {
            // Case 2: Raw JSON (look for first { and last })
            int firstBrace = response.indexOf("{");
            int lastBrace = response.lastIndexOf("}");
            if (firstBrace != -1 && lastBrace != -1 && firstBrace < lastBrace) {
                jsonContent = response.substring(firstBrace, lastBrace + 1).trim();
            }
        }

        if (jsonContent != null) {
            try {
                ObjectMapper objectMapper = new ObjectMapper();
                Map<String, Object> dataContent = objectMapper.readValue(jsonContent, Map.class);
                jsonResponse.put("data", dataContent);
                System.out.println("Parsed JSON Data: " + dataContent);
            } catch (Exception e) {
                jsonResponse.put("data", null);
                System.err.println("Invalid JSON format: " + e.getMessage());
            }
        } else {
            jsonResponse.put("data", null);
            System.err.println("No valid JSON content found in response.");
        }

        return jsonResponse;
    }
}
