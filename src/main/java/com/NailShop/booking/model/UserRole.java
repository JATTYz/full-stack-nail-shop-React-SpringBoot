package com.NailShop.booking.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@Table(name = "user_roles")
public class UserRole {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer authorityId;

    private String username;

    private String authority;
    

    public UserRole(String username, String authority) {
        this.authority = authority;
        this.username = username;
    }
}
