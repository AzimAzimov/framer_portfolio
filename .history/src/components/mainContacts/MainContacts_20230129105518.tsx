import React, { FC } from 'react'

import './MainContacts.css';
import { IMainContactsData } from './MockData';

export interface IMainContacts {
  id?: number;
  title?: string;
  subtitle?: string;
}

const MainContacts: FC<IMainContacts> = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>
        <ul className="content-list">
          {IMainContactsData.map(items => {

          })}
          <li className="content-list__item">
            <h2 className="title-2">Location</h2>
            <p>Moscow, Russia</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p>
              <a href="tel:+79051234567">+7 (905) 123-45-67</a>
            </p>
          </li>
          
        </ul>
      </div>
    </main>
  );
};

export default MainContacts;