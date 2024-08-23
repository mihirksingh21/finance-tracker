import { createContext, useContext, useState } from "react";

interface FinancialRecord {
    id?: string;
    userId: string;
    date: Date;
    description: string;
    amount: number;
    category: string;
    paymentMethod: string;
}
interface FinancialRecordsContextType {
    records: FinancialRecord[];
    addRecord: (record: FinancialRecord) => void;
    // updateRecord: (id: string, newRecord: FinancialRecord) => void;
    // deleteRecord: (id: string) => void;
    

}

export const FinancialRecordContext = createContext<
FinancialRecordsContextType | undefined>(undefined);


export const FinancialRecordsProvider = ({
children,
}: {
    children: React.ReactNode;
}) => {
    const [records, setRecords] = useState<FinancialRecord[]>([]);

    const addRecord = (record: FinancialRecord) => {};


    
    return (
    <FinancialRecordContext.Provider value={{ records, addRecord}}>
        {" "}

        {children}

    </FinancialRecordContext.Provider>
    );
};

export const useFinancialRecords = () => {
    
    const context = useContext<FinancialRecordsContextType | undefined >(
        FinancialRecordContext
    );

    if (!context) {
        throw new Error ("useFinancialRecords must be used within a provider");
    }
       
   return context;
};