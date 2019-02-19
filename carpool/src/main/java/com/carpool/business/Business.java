package com.carpool.business;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Business")
public class Business {
    @Id
    private String id;
    private final String name;
    private final String address;
    private final String city;

    @JsonCreator
    public Business(@JsonProperty("name") String name,
                    @JsonProperty("address") String address,
                    @JsonProperty("city") String city) {
        this.name = name;
        this.address = address;
        this.city = city.toLowerCase();
    }

    public String getCity() {
        return city;
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public String getId() {
        return id;
    }
}
