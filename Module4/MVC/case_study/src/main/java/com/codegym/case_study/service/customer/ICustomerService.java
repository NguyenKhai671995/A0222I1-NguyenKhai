package com.codegym.case_study.service.customer;

import com.codegym.case_study.model.customer.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ICustomerService {
    Page<Customer> findAllByName(String name, Pageable pageable);

    Customer findById(Long id);

    void save(Customer customer);

    void updateStatusById(Long id);
}
