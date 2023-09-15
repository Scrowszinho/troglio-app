import React, { useState } from 'react';
import FormView from './formView';

const Form = () => {
    const [value, setValue] = useState<number>(0);
    const [isDebit, setIsDebit] = useState<boolean>(false);
    const [type, setType] = useState<string>('');
    const [date, setDate] = useState<string>('');
    return (
        <FormView 
        value={value}
        type={type}
        setType={setType}
        setValue={setValue}
        date={date}
        setDate={setDate} 
        isDebit={isDebit} 
        setIsDebit={setIsDebit} />
    );
};

export default Form;