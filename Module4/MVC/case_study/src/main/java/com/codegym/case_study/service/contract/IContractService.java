package com.codegym.case_study.service.contract;

import com.codegym.case_study.model.contract.Contract;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.sql.Date;

public interface IContractService {
    Page<Contract> findAllByName(String startDate, Pageable pageable);

    Contract findById(Long id);

    void save(Contract contract);

    void updateStatusById(Long id);
}
