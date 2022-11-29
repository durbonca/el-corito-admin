import React from "react";
import {
  List,
  Datagrid,
  TextField,
  /* ImageField, ArrayField, ReferenceField, NumberField, */
  TopToolbar,
  CreateButton
} from "react-admin";

const ListActions = () => {
  return (
    <TopToolbar>
      <CreateButton />
    </TopToolbar>
  );
};

const PostList = props => {
  return (
    <List {...props} title="Ultimas entradas" actions={<ListActions />}>
      <Datagrid rowClick="edit">
        <TextField source="title" />
        {/* <TextField source="descripcion" />
                <NumberField source="precio" />
                <ImageField source="file.src" title="file.title" />
                <ReferenceField label="categorias" source="categorias" reference="categorias">
                    <ArrayField source="categorias">
                        <TextField source="titulo" />
                    </ArrayField>
                </ReferenceField> */}
      </Datagrid>
    </List>
  );
};

export default PostList;
