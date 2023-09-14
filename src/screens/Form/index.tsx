import React, { useState } from 'react';
import FormView from './formView';

const Form = () => {
    const [value, setValue] = useState<number>(0);
    const [isDebit, setIsDebit] = useState<boolean>(false);
    return (
        <FormView 
        value={value} 
        setValue={setValue} 
        isDebit={isDebit} 
        setIsDebit={setIsDebit} />
    );
};

export default Form;