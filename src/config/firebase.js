import {
    FirebaseAuthProvider,
    FirebaseDataProvider,
  } from 'react-admin-firebase';

const {
    REACT_APP_FIREBASE_API_KEY,
    REACT_APP_FIREBASE_AUTH_DOMAIN,
    REACT_APP_FIREBASE_PROJECT_ID,
    REACT_APP_FIREBASE_STORAGE_BUCKET,
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
   } = process.env;
  
  const config = {
    apiKey: REACT_APP_FIREBASE_API_KEY,
    authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  };
  
  // All options are optional
  const options = {
    // Use a different root document to set your resource collections, by default it uses the root collections of firestore
    // rootRef: 'root-collection/some-doc' | () => 'root-collection/some-doc',
    // Your own, previously initialized firebase app instance
    // app: firebaseAppInstance,
    // Enable logging of react-admin-firebase
    logging: true,
    // Resources to watch for realtime updates, will implicitly watch all resources by default, if not set.
    // watch: ['posts'],
    // Resources you explicitly dont want realtime updates for
    // dontwatch: ['comments'],
    // Authentication persistence, defaults to 'session', options are 'session' | 'local' | 'none'
    // persistence: 'session',
    // Disable the metadata; 'createdate', 'lastupdate', 'createdby', 'updatedby'
    // disableMeta: false,
    // Have custom metadata field names instead of: 'createdate', 'lastupdate', 'createdby', 'updatedby'
    /* renameMetaFields: {
      created_at: 'my_created_at', // default: 'createdate'
      created_by: 'my_created_by', // default: 'createdby'
      updated_at: 'my_updated_at', // default: 'lastupdate'
      updated_by: 'my_updated_by', // default: 'updatedby'
    }, */
    // Prevents document from getting the ID field added as a property
    // dontAddIdFieldToDoc: false,
    // Adds 'deleted' meta field for non-destructive deleting functionality
    // NOTE: Hides 'deleted' records from list views unless overridden by filtering for {deleted: true} 
    // softDelete: false,
    // Changes meta fields like 'createdby' and 'updatedby' to store user IDs instead of email addresses
    // associateUsersById: false,
    // Casing for meta fields like 'createdby' and 'updatedby', defaults to 'lower', options are 'lower' | 'camel' | 'snake' | 'pascal' | 'kebab'
    // metaFieldCasing: 'lower',
    // Instead of saving full download url for file, save just relative path and then get download url
    // when getting docs - main use case is handling multiple firebase projects (environments)
    // and moving/copying documents/storage files between them - with relativeFilePaths, download url
    // always point to project own storage
    // relativeFilePaths: false, 
    // Add file name to storage path, when set to true the file name is included in the path
    // useFileNamesInStorage: false,
    // Use firebase sdk queries for pagination, filtering and sorting
    /* lazyLoading: {
      enabled: false
    }, */
    // Logging of all reads performed by app (additional feature, for lazy-loading testing)
    /* firestoreCostsLogger: {
      enabled: false,
      localStoragePrefix // optional
    }, */
    // Function to transform documentData before they are written to Firestore
    // transformToDb: (resourceName, documentData, documentId) => documentDataTransformed
  }
  
  export const dataProvider = FirebaseDataProvider(config, options);
  export const authProvider = FirebaseAuthProvider(config, options);
