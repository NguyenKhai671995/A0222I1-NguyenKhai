package com.codegym.case_study.controller;

import com.codegym.case_study.model.contract.Contract;
import com.codegym.case_study.service.contract.IContractService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
@CrossOrigin("/*")
public class ContractAPIController {

    @Autowired
    IContractService contractService;

    @PostMapping("")
    public Page<Contract> saveContract(@Valid @RequestBody Contract contract) {
        contract.setStatus(true);
        contractService.save(contract);
        return contractService.findAllByName("", Pageable.unpaged());
    }

    @GetMapping("")
    public Page<Contract> getListContract(@RequestParam(value = "nameSearch",defaultValue = "")String name) {
        return contractService.findAllByName(name, Pageable.unpaged());
    }

    @GetMapping("/{id}")
    public Contract findById(@PathVariable("id") Long id){
        return contractService.findById(id);
    }

    @DeleteMapping("/{id}")
    public Page<Contract> deleteById(@PathVariable("id") Long id){
        Contract contract = contractService.findById(id);
        contract.setStatus(false);
        contractService.save(contract);
        return getListContract("");
    }
    @PatchMapping("")
    public Contract saveEdit(@Valid @RequestBody Contract contract ){
        contract.setStatus(true);
        contractService.save(contract);
        return contract;
    }
}
