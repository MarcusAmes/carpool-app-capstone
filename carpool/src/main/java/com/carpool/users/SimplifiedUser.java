package com.carpool.users;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class SimplifiedUser {
    private final String id;
    private final String email;
    private final String firstName;
    private final String lastName;
    private final String businessId;
    private final double connectionPercent;

    @JsonCreator
    public SimplifiedUser(@JsonProperty("id") String id,
                          @JsonProperty("email") String email,
                          @JsonProperty("firstName") String firstName,
                          @JsonProperty("lastName") String lastName,
                          @JsonProperty("businessId") String businessId,
                          @JsonProperty("connectionPercent") double connectionPercent) {
        this.id = id;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.businessId = businessId;
        this.connectionPercent = connectionPercent;
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

    public double getConnectionPercent() {
        return connectionPercent;
    }
}
