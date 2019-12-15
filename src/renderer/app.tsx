import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Application from './components/Application';
import store from './store';
import fs from 'fs';

import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Company } from '../main/entities/Company';
import { Contact } from '../main/entities/Contact';
import { Document } from '../main/entities/Document';
import { DocumentType } from '../main/entities/DocumentType';
import { Proposal } from '../main/entities/Proposal';
import { User } from '../main/entities/User';

const dbfile = `core-db`

const callback = (database: Uint8Array) => {
  // console.log(`writing to ${dbfile} filw`)
  // if (fs.existsSync(dbfile)) {
  //   console.log(`${dbfile} exists chiken`)
  //   fs.unlinkSync(dbfile, function() {
  //     writeDatabaseFile(dbfile, database)
  //     console.log(`overwrite db file: ${dbfile} exists`)
  //   })
  // } else {
    console.log(`create new database file ${dbfile}`)
    writeDatabaseFile(dbfile, database)
  // }
};

const writeDatabaseFile = (dbfile, database) => {
  fs.appendFileSync(dbfile, new Buffer(database));
}

createConnection({
  type: "sqljs",
  synchronize: true,
  autoSave: true,
  // autoSaveCallback: callback,
  entities: [Company, Contact, Document, DocumentType, Proposal, User],
  logging: true,
  logger: "advanced-console",
  location: dbfile,
})
.then((connection: any) => {
  // // here you can start to work with your entities
  // let company = new Company()
  // company.name = "ChickenStash, LLC"
  // company.nameShort = "Chicken"
  // company.email_primary = "test2@test.com"
  // company.phone = {
  //   primary: '5203443352',
  //   secondary: '',
  //   tertiary: '',
  // }

  // await connection.manager.save(company);
  // console.log('Company has been saved');

  window['dbconnection'] = connection

  // const companies = await window.dbconnection
  //   .getRepository(Company)
  //   .createQueryBuilder("companies")
  //   // .where("company.isActive = :isActive", { isActive: 1 })
  //   .getMany()

  // const getContext = {
  //   // return {
  //     connection: window.dbconnection,
  //     data: {
  //       // user,
  //       companies,
  //     }
  //   // }
  // }

  // Create main element
  const mainElement = document.createElement('div');
  document.body.appendChild(mainElement);

  // Render components
  const render = (Component: () => JSX.Component, dbconnection) => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <Component dbconnection={dbconnection} />
        </Provider>
      </AppContainer>,
      mainElement
    );
  };

  render(Application, connection);

})
.catch(error => console.log(error));