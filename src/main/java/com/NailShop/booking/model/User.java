package com.NailShop.booking.model;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name = "users")
public class User  {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer userId;

    private String email;

    private String username;

    private String password;

    private String firstName;

    private String lastName;

    private int enabled;

//    @OneToMany
//    @JoinColumn(name = "username")
//    List<UserRole> userRoles;


    public User(String email, String username, String password, String firstName, String lastName) {
        this.email = email;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.enabled = 1;
    }

//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        final List<SimpleGrantedAuthority> grantedAuthorities = new ArrayList<>();
//        for (UserRole role: userRoles){
//            grantedAuthorities.add(new SimpleGrantedAuthority(role.getAuthority()));
//        }
//        return grantedAuthorities;
//    }
//
//    @Override
//    public boolean isAccountNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isAccountNonLocked() {
//        return true;
//    }
//
//    @Override
//    public boolean isCredentialsNonExpired() {
//        return true;
//    }
//
//    @Override
//    public boolean isEnabled() {
//        if(enabled==1) {
//            return true;
//        }
//        return false;
//    }
}
