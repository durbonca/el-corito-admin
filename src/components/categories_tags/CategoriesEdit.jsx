import React from 'react';
import { Edit, SimpleForm, TextInput, required } from 'react-admin';

const CategoriesEdit = (props) => {
    return (
        <Edit {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()} />
        </SimpleForm>
    </Edit>
    )
}

export default CategoriesEdit;
