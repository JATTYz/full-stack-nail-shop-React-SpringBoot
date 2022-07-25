package com.NailShop.booking;

import com.NailShop.booking.Repo.BookingRepository;
import com.NailShop.booking.model.Booking;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BookingService {

    private final BookingRepository bookingRepository;

    public List<Booking> allBooking(){
        return bookingRepository.findAll();
    }

    public void addBooking(Booking booking){
        bookingRepository.save(booking);
    }

    public void findByID(Long id){
        bookingRepository.findById(id).orElseThrow(
                () -> new IllegalStateException("Booking number not exist id" + id));
    }

    public void deleteById(Long id){
        if(!bookingRepository.existsById(id)){
            throw new IllegalStateException(
                    "The Booking id dose not exist"
            );
        }
        bookingRepository.deleteById(id);
    }
}
