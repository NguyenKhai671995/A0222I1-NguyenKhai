package com.codegym.case_study.model.customer;

import com.codegym.case_study.model.customer.Customer;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "customer_type")
public class CustomerType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", columnDefinition = "varchar(45)")
    private String name;

    @OneToMany(mappedBy = "customerType",fetch = FetchType.LAZY)
    List<Customer> list;

    public CustomerType(Long id, String name){
        this.id = id;
        this.name = name;
    }
}
