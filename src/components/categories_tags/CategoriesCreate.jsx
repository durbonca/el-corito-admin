import React from 'react';
import { Create, SimpleForm, TextInput, required } from 'react-admin';

const CategoriesCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" validate={required()} />
        </SimpleForm>
    </Create>
);

export default CategoriesCreate;