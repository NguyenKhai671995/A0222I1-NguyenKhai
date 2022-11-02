package com.codegym.case_study.service.customer.impl;

import com.codegym.case_study.model.customer.Customer;
import com.codegym.case_study.repository.customer.ICustomerRepository;
import com.codegym.case_study.service.customer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CustomerService implements ICustomerService {
    @Autowired
    ICustomerRepository customerRepository;


    @Override
    public Page<Customer> findAllByName(String name, Pageable pageable) {
        return customerRepository.findAllByName(name,pageable);
    }

    @Override
    public Customer findById(Long id) {
        Optional<Customer> customer = customerRepository.findById(id);
        return customer.orElse(null);
    }

    @Override
    public void save(Customer customer) {
        customerRepository.save(customer);
    }

    @Override
    public void updateStatusById(Long id) {
//        Customer customer = findById(id);
////        customer.setStatus(false);
////        customerRepository.save(customer);
        customerRepository.updateStatusById(id);
    }

}
