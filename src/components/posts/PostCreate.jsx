import React from 'react';
import { Create, SimpleForm, AutocompleteArrayInput, TextInput, DateInput, FileInput, ImageField, required, ReferenceArrayInput } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
        <TextInput style={{width: '100%'}} source="title" validate={required()} />
            <TextInput style={{width: '100%'}} source="url_youtube" validate={required()} />
            <TextInput style={{width: '100%'}} source="url_download" validate={required()} />
            <FileInput style={{width: '100%'}} source="file" label="Imagenes" accept="image/*" >
                <ImageField source="file.src" title="file.title" />
            </FileInput>
            <RichTextInput style={{width: '100%'}} source="body" validate={required()} />
            <DateInput style={{width: '100%'}} source="date_creation" validate={required()} />   
            {/* <ReferenceArrayInput source="categories" reference="categories">
                <AutocompleteArrayInput optionText='title' />            
            </ReferenceArrayInput>
            <ReferenceArrayInput source="tags" reference="tags">
                <AutocompleteArrayInput optionText='title' />            
            </ReferenceArrayInput> */}
        </SimpleForm>
    </Create>
);

export default PostCreate;