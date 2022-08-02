package com.NailShop.booking.Repo;

import com.NailShop.booking.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository
        extends JpaRepository<Booking, Long> {
}
