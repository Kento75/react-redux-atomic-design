import React from 'react';
import styles from './styles.css';
import HolyGrailLayout, {
  HolyGrailTop,
  HolyGrailBottom,
  HolyGrailMain,
  HolyGrailLeft,
  HolyGrailRight,
} from '../../atoms/HolyGrailLayout/index.js';
import Card from '../../atoms/Card/index.js';
import PageHeader from '../../organisms/PageHeader/index.js';
import Header from '../../organisms/Header/index.js';
import Footer from '../../organisms/Footer/index.js';
import ChannelList from '../../organisms/ChannelList/index.js';
import NotificationList from '../../organisms/NotificationList/index.js';

const NotificationList2Template = ({
  notifications,
  navigations,
  breadcrumb,
  channels,
  onClickDeleteNotification
}) => (
  <HolyGrailLayout className={ styles.root }>
    <HolyGrailTop>
      <Header className={ styles.header } navigations={ navigations } />
    </HolyGrailTop>
    <HolyGrailBottom>
      <Footer className={ styles.footer } />
    </HolyGrailBottom>
    <HolyGrailMain>
      <Card tag="main" className={ styles.main }>
        <NotificationList
          programs={ notifications }
          onClickDelete={ onClickDeleteNotification }
        />
      </Card>
    </HolyGrailMain>
    <HolyGrailLeft>
      <PageHeader className={ styles.nav } navigations={ breadcrumb } />
    </HolyGrailLeft>
    <HolyGrailRight>
      <aside className={ styles.aside }>
        <ChannelList channels={ channels } />
      </aside>
    </HolyGrailRight>
  </HolyGrailLayout>
);
export default NotificationList2Template;
