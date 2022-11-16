package com.codegym.case_study.service.contract.impl;

import com.codegym.case_study.model.contract.Contract;
import com.codegym.case_study.repository.contract.IContractRepository;
import com.codegym.case_study.service.contract.IContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.Optional;

@Service
public class ContractService implements IContractService {
    @Autowired
    IContractRepository iContractRepository;
    @Override
    public Page<Contract> findAllByName(String startDate, Pageable pageable) {
        return iContractRepository.findAllByName(startDate,pageable);
    }

    @Override
    public Contract findById(Long id) {
        Optional<Contract> contract = iContractRepository.findById(id);
        return contract.orElse(null);
    }

    @Override
    public void save(Contract contract) {
        iContractRepository.save(contract);
    }

    @Override
    public void updateStatusById(Long id) {
        iContractRepository.updateStatusById(id);
    }
}
