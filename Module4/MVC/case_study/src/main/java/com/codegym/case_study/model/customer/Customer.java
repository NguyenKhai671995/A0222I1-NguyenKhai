package com.codegym.case_study.model.customer;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.sql.Date;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "customer_type_id",nullable = false,referencedColumnName = "id")
    private CustomerType customerType;


    @Column(name = "name",columnDefinition = "varchar(45)")
    @NotBlank(message = "name not null")
    private String name;

    @Column(name = "date_of_birth")
    private Date dateOfBirth;

    @Column(name = "gender")
    private Boolean gender;

    @Column(name = "id_card",columnDefinition = "varchar(45)")

    private String idCard;

    @Size(max = 3)
    @Column(name = "phone_number",columnDefinition = "varchar(45)")
    private String phoneNumber;

    @Column(name = "email",columnDefinition = "varchar(45)")
    private String email;

    @Column(name = "address",columnDefinition = "varchar(45)")
    private String address;

    @Column(name = "customer_status")
    private Boolean status;

    public Customer(Long id){
        this.id = id;
    }
}
