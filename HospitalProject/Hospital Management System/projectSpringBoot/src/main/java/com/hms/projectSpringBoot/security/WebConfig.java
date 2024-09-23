package com.hms.projectSpringBoot.security;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Value("${images.dir}")
    private String imagesDir;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/imagesDir/**")
                .addResourceLocations("file:" + imagesDir + "/");

        registry.addResourceHandler("/resources/**")
                .addResourceLocations("/resources/");

        WebMvcConfigurer.super.addResourceHandlers(registry);
    }
}
