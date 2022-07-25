package com.NailShop.booking.Repo;

import com.NailShop.booking.model.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<UserRole, Integer> {
}
