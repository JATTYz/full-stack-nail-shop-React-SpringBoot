package com.NailShop.booking.user;

import com.NailShop.booking.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
}
