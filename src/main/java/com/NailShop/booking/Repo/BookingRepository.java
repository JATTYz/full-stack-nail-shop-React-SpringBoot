package com.NailShop.booking.Repo;

import com.NailShop.booking.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;


public interface BookingRepository
        extends JpaRepository<Booking, Long> {
}
