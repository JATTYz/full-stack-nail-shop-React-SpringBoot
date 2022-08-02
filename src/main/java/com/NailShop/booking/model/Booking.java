package com.NailShop.booking.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;


@Entity
@Getter
@Setter
@NoArgsConstructor
@Table
@EqualsAndHashCode
@ToString
@AllArgsConstructor
public class Booking {

    @Id
    @SequenceGenerator(
            name = "booking_sequence",
            sequenceName = "booking_sequence"

    )
    @GeneratedValue(
            generator = "booking_sequence",
            strategy = GenerationType.SEQUENCE
    )
    private Long bookingId;

    private String name;
    private String lastName;
    private String email;
    private Integer phoneNumber;
    private LocalDateTime appointDate;

}
