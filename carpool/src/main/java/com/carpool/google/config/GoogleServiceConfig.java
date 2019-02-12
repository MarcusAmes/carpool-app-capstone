package com.carpool.google.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties("google-service")
public class GoogleServiceConfig {
    private String url;
    private String key;

    String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }
}
