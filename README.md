# Invariant Study Results for "Demystifying Invariant Effectiveness for Securing Smart Contracts" (FSE 2024)

This repository contains the results of the study conducted in the paper "Demystifying Invariant Effectiveness for Securing Smart Contracts" (FSE 2024). The study aims to investigate the effectiveness of invariants in securing smart contracts. 

## Repository Structure
`audits/`: Contains the audit reports used in the study.
`repos/`: Contains the code repos of smart contracts used in the study.
`invariants_study/`: Contains the invariants we labeled and the code snippets where they were found.
`displayStats.py`: A Python script to parse the files under `invariants_study/` and display the statistics of the study. The statistics are also listed below:


## Study Overall Stats

- Total number of audits: 63
- Total number of repos: 45
- Total number of invariants: 2181
- Total number of invariants categorized: 826
- Total number of invariants uncategorized: 1355

## Categorized Invariants Stats

- Access Control: 283
- Time Lock: 158
- Gas Control: 2
- Reentrancy: 12
- Oracle Slippage: 15
- Special Storage: 24
- Money Flow: 151
- Data Flow: 181

## Uncategorized Invariants Stats

- Ignore: protocol-specific: 1098
- Ignore: array length: 200
- Ignore: byte operations: 44
- Ignore: safe math: 13
