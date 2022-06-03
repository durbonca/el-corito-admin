import React from 'react';
import { Edit, AutocompleteArrayInput, ReferenceArrayInput, NumberInput, SimpleForm, TextInput, DateInput, UrlField, FileInput, ImageField, required } from 'react-admin';
import { RichTextInput } from 'ra-input-rich-text';

const PostEdit = (props) => {
    return (
        <Edit {...props}>
        <SimpleForm>
            <TextInput style={{width: '100%'}} source="title" validate={required()} />
            <TextInput style={{width: '100%'}} source="url_youtube" validate={required()} />
            <TextInput style={{width: '100%'}} source="url_download" validate={required()} />
            <FileInput style={{width: '100%'}} source="file" label="Imagenes" accept="image/*" >
                <ImageField source="src" title="title" />
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
    </Edit>
    )
}

export default PostEdit
