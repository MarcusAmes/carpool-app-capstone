package com.carpool.google;
import java.text.DecimalFormat;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonView;

public class TextAndValue {
    final private String text;
    final private double value;

    @JsonCreator
    public TextAndValue(@JsonProperty("text") String text,
                        @JsonProperty("value") double value) {
        this.text = text;
        this.value = value;
    }

    public double getMetersInMiles() {
        DecimalFormat df = new DecimalFormat("#.00");

        return Double.valueOf(df.format(value * 0.00062137));
    }

    public String getText() {
        return text;
    }

    public double getValue() {
        return value;
    }
}
