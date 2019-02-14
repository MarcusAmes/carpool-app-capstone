package com.carpool.users;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class SimplifiedUser {
    private final String id;
    private final String email;
    private final String firstName;
    private final String lastName;
    private final String businessId;
    private final double lat;
    private final double lng;

    @JsonCreator
    public SimplifiedUser(@JsonProperty("id") String id,
                          @JsonProperty("email") String email,
                          @JsonProperty("firstName") String firstName,
                          @JsonProperty("lastName") String lastName,
                          @JsonProperty("businessId") String businessId,
                          @JsonProperty("lat") double lat,
                          @JsonProperty("lng") double lng) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.businessId = businessId;
        this.lat = lat;
        this.lng = lng;
    }

    public String getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getBusinessId() {
        return businessId;
    }

    public double getLat() {
        return lat;
    }

    public double getLng() {
        return lng;
    }
}
