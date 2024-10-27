package com.rezvi.springbootproject.configaration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfigaration implements WebMvcConfigurer {

    @Value("${image.upload.dir}")
    private String uploadDir;

    public void addResourceHandlers(ResourceHandlerRegistry resourceHandlerRegistry) {
        resourceHandlerRegistry.addResourceHandler("/images/**")
                .addResourceLocations("file:" + uploadDir + "/");
    }
}
