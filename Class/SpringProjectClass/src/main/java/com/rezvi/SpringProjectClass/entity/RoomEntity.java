package com.rezvi.SpringProjectClass.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "rooms")
public class RoomEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String roomType;
    private String image;
    private float price;
    private int area;
    private int adultNo;
    private int childNo;
    private boolean availability;

    @ManyToOne(fetch = FetchType.EAGER)
    private HotelEntity hotelEntity;

}
