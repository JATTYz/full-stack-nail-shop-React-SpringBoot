package com.NailShop.booking.model;

import lombok.*;

import javax.persistence.*;
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

    private String a_name;
    private String b_lastName;
    private String c_email;
    private Integer d_phoneNumber;
//    private Date appointDate;

}
