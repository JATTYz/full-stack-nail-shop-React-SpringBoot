package com.NailShop.booking;

import com.NailShop.booking.model.Booking;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping(path = "api/v1/bookings")
@AllArgsConstructor
public class BookingController {

    private BookingService bookingService;

    @GetMapping
    public List<Booking> findAllBooking(){
        return bookingService.allBooking();
    }

    @GetMapping(path = "{id}")
    public void findBookingById(@PathVariable("id") Long bookingId){
        bookingService.findByID(bookingId);
    }

    @PostMapping
    public void makeABooking(@RequestBody Booking booking){
        bookingService.addBooking(booking);
    }

    @DeleteMapping(path = "{id}")
    public void deleteById(@PathVariable("id") Long bookingId){
        bookingService.deleteById(bookingId);
    }

}
