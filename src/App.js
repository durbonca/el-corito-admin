import * as React from "react";
import { Admin, Resource } from "react-admin";
import { dataProvider, authProvider } from "./config/firebase";
import { PostList, PostCreate, PostEdit } from "./components/posts";
/* import { TagsList, TagsCreate, TagsEdit } from "./components/tags"; */
import {
  CategoriesList,
  CategoriesCreate,
  CategoriesEdit
} from "./components/categories";

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="posts"
      list={PostList}
      create={PostCreate}
      edit={PostEdit}
    />
    <Resource
      name="categories"
      list={CategoriesList}
      create={CategoriesCreate}
      edit={CategoriesEdit}
    />
    {/* <Resource name="tags" list={TagsList} edit={TagsEdit} create={TagsCreate} /> */}
  </Admin>
);
export default App;
