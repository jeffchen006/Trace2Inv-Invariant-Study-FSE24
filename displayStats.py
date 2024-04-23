import os, sys

SCRIPT_DIR = os.path.dirname(os.path.realpath(__file__))


print(SCRIPT_DIR)
ACCESS_CONTROL = "Access Control"
TIME_LOCK = "Time Lock"
GAS_CONTROL = "Gas Control"
REENTRANCY = "Reentrancy"
ORACLE_SLIPPAGE = "Oracle Slippage"
SPECIAL_STORAGE = "Special Storage"
MONEY_FLOW = "Money Flow"
DATA_FLOW = "Data Flow"
IGNORE = "Ignore"

subCategory2Category = {
    # Access Control
    "onlyEOA":  ACCESS_CONTROL,
    "isSenderOwner":  ACCESS_CONTROL,
    "isSenderManager":  ACCESS_CONTROL,
    "isOriginOwner": ACCESS_CONTROL,
    "isOriginManager":  ACCESS_CONTROL,

    # Time Lock
    "isSameSenderBlock":  TIME_LOCK,
    "isSameOriginBlock":  TIME_LOCK,
    "lastUpdate":  TIME_LOCK,

    # Gas Control
    "GasControl":  GAS_CONTROL,

    # Reentrancy
    "nonReEntrant":  REENTRANCY,

    # Oracle Slippage
    "OracleRange":  ORACLE_SLIPPAGE,
    "OracleDeviation": ORACLE_SLIPPAGE,

    # Special Storage
    "TotalSupplyUpperBound":  SPECIAL_STORAGE,
    "TotalBorrowUpperBound":  SPECIAL_STORAGE,

    # Money Flow
    "TokenInUpperBound":  MONEY_FLOW,
    "TokenInRatioUpperBound":  MONEY_FLOW,
    "TokenOutUpperBound":  MONEY_FLOW,
    "TokenOutRatioUpperBound":  MONEY_FLOW,

    # Data Flow
    "MappingUpperBound":  DATA_FLOW,
    "CallValueUpperBound":  DATA_FLOW,
    "DataFlow":  DATA_FLOW,

    # Ignore
    "Ignore: byte operations":  IGNORE,
    "Ignore: protocol-specific":  IGNORE,
    "Ignore: array length":  IGNORE,
    "Ignore: safe math":  IGNORE,
}


if __name__ == "__main__":
    audits_folder = os.path.join(SCRIPT_DIR, "audits")
    audits = os.listdir(audits_folder)

    repos_folder = os.path.join(SCRIPT_DIR, "repos")
    repos = os.listdir(repos_folder)

    invariants_study_folder = os.path.join(SCRIPT_DIR, "invariants_study")
    # list all files in the folder
    files = os.listdir(invariants_study_folder)
    
    CategoryCount = {}
    for file in files:
        if file.endswith(".md"):
            # print("\"" + file[:-3] + "\":  ,")
            name = file[:-3]
            category = subCategory2Category[name]
            if category not in CategoryCount:
                CategoryCount[category] = 0
            with open(os.path.join(invariants_study_folder, file), "r") as f:
                lines = f.readlines()
                for line in lines:
                    if line.startswith("["):
                        CategoryCount[category] += 1
    
    
    print(" =========== Study Overall Stats ===========")
    print("Total number of aduits:", len(audits))
    print("Total number of repos:", len(repos))
    print("Total number of invariants:", sum(CategoryCount.values()))
    categorized = 0
    for category in [ACCESS_CONTROL, TIME_LOCK, GAS_CONTROL, REENTRANCY, ORACLE_SLIPPAGE, SPECIAL_STORAGE, MONEY_FLOW, DATA_FLOW]:
        categorized += CategoryCount[category]
    print("Total number of invariants categoried:", categorized)
    uncategorized = 0
    for category in [IGNORE]:
        uncategorized += CategoryCount[category]
    print("Total number of invariants uncategorized:", uncategorized)
                                             

    print(" =========== Categorized Invariants Stats ===========")
    for category in [ACCESS_CONTROL, TIME_LOCK, GAS_CONTROL, REENTRANCY, ORACLE_SLIPPAGE, SPECIAL_STORAGE, MONEY_FLOW, DATA_FLOW]:
        print(category + ":", CategoryCount[category])
    
    print(" =========== Uncategorized Invariants Stats ===========")
    for reason in ["Ignore: protocol-specific", "Ignore: array length", "Ignore: byte operations",  "Ignore: safe math"]:
        file = reason + ".md"
        with open(os.path.join(invariants_study_folder, file), "r") as f:
            lines = f.readlines()
            number = 0
            for line in lines:
                if line.startswith("["):
                    number += 1
            print(reason + ":", number)
