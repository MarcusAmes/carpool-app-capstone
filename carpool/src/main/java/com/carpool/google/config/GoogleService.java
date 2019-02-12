package com.carpool.google.config;

import com.carpool.google.GoogleResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GoogleService {
    private final GoogleServiceConfig config;
    private final RestTemplate restTemplate = new RestTemplate();

    public GoogleService(GoogleServiceConfig config) {
        this.config = config;
    }

    public GoogleResponse getRoute(String oAddress, String dAddress) {
        return this.restTemplate.getForObject(String.format(this.config.getUrl(), oAddress, dAddress, this.config.getKey()), GoogleResponse.class);
    }

}
