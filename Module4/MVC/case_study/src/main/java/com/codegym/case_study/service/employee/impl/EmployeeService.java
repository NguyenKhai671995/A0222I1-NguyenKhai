package com.codegym.case_study.service.employee.impl;

import com.codegym.case_study.model.customer.Customer;
import com.codegym.case_study.model.employee.Employee;
import com.codegym.case_study.repository.employee.IEmployeeRepository;
import com.codegym.case_study.service.employee.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmployeeService implements IEmployeeService {
    @Autowired
    IEmployeeRepository employeeRepository;
    @Override
    public Page<Employee> findAllByName(String name, Pageable pageable) {
        return employeeRepository.findAllByName(name,pageable);
    }

    @Override
    public Employee findById(Long id) {
        Optional<Employee> customer = employeeRepository.findById(id);
        return customer.orElse(null);
    }

    @Override
    public void save(Employee employee) {
        employeeRepository.save(employee);
    }

    @Override
    public void updateStatusById(Long id) {
        employeeRepository.updateStatusById(id);
    }
}
