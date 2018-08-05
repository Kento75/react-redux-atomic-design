import React from 'react';
import styles from './styles.css';
import StickyHeaderLayout from '../../atoms/StickyHeaderLayout/index.js';
import PageHeader from '../../organisms/PageHeader/index.js';
import Header from '../../organisms/Header/index.js';
import NotificationList from '../../organisms/NotificationList/index.js';

const NotificationListTemplate = ({ notifications, navigations, breadcrumb, onClickDeleteNotification }) => (
  <StickyHeaderLayout>
    <Header navigations={ navigations } />
    <main className={ styles.main }>
      <PageHeader navigations={ breadcrumb } />
      <NotificationList
        className={ styles.notifications }
        programs={ notifications }
        onClickDelete={ onClickDeleteNotification }
      />
    </main>
  </StickyHeaderLayout>
);

export default NotificationListTemplate;
