import SelectDefault, { IPickerOptions } from '../SelectComponent';
import React, { useEffect, useState } from 'react';
import axios from '../../utils/axios';
import { apiUrl } from '../../apiUrl';
import { AxiosError, AxiosResponse } from 'axios';
import { ActivityIndicator } from '@react-native-material/core';
import { Text } from 'react-native';

interface ICompanySelect {
    selectValue: React.Dispatch<React.SetStateAction<number>>,
    value: number;
}

interface ICompanys {
    id: number,
    name: string,
    description: string,
    createdAt: Date,
    value: number,
    isActive: boolean;
}

const CompanySelect = ({ selectValue, value }: ICompanySelect) => {
    const [dataCompany, setDataCompany] = useState<IPickerOptions[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const getCompany = async () => {
        axios.get(apiUrl.getCompanys).then((response: AxiosResponse<ICompanys[]>) => {
            response.data.forEach((item, index) => {
                dataCompany.push({ label: item.description, value: item.id });
            });
            setDataCompany(dataCompany)
            if(dataCompany.length, response.data.length) setLoading(true)            
        }).catch((error: AxiosError<any>) => {
            setError(error.response?.data?.errors[0]);
            setLoading(false);
        });
        
    };

    useEffect(() => {
        getCompany();
    }, []);

    return (
        <>
            <SelectDefault
                setValue={selectValue}
                value={value}
                data={dataCompany}
                loading={loading}
            />
            <Text>{error}</Text>
        </>
    );
};

export default CompanySelect;