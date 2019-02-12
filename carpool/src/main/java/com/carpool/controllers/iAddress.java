package com.carpool.controllers;

import com.fasterxml.jackson.annotation.JsonProperty;

public class iAddress {
    private final String oAddress;
    private final String dAddress;

    public iAddress(@JsonProperty("oAddress") String oAddress,
                    @JsonProperty("dAddress") String dAddress) {
        this.oAddress = oAddress;
        this.dAddress = dAddress;
    }

    public String getoAddress() {
        return oAddress.replaceAll(" ", "+");
    }

    public String getdAddress() {
        return dAddress.replaceAll(" ", "+");
    }
}
