import * as React from "react";
import { Admin, Resource } from "react-admin";
import { dataProvider, authProvider } from "./config/firebase";
import { PostList, PostCreate, PostEdit } from "./components/posts";
import {
  CategoriesList,
  CategoriesCreate,
  CategoriesEdit
} from "./components/categories_tags";

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
    {/* <Resource name="tags" list={CategoriesList} edit={CategoriesEdit} create={CategoriesCreate}/> */}
  </Admin>
);
export default App;
