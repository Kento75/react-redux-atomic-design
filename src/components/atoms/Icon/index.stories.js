import React from 'react';
import { action } from '@storybook/addon-actions';
import Icon, {
  IconSVGList,
  TrashCanIcon,
  ChevronRightIcon,
  AlarmIcon,
  BluetoothIcon,
  CachedIcon,
  CallIcon,
  CastIcon,
  CheckCircleIcon,
  CloudDownloadIcon,
  ComputerIcon,
  EmailIcon,
  FaceIcon,
  FavoriteIcon,
  GetAppIcon,
  HeadsetIcon,
  HomeIcon,
  ImageIcon,
  MicIcon,
  NotificationsIcon,
  PermIdentityIcon,
  PhotoCameraIcon,
  QuestionAnswerIcon,
  RepeatIcon,
  RoomIcon,
  SearchIcon,
  SettingsIcon,
  ShoppingCartIcon,
  ThumbUpIcon,
  VisibilityIcon,
  VolumeUpIcon,
  ZoomInIcon,
} from './index.js';

export default stories => stories
  .add('TrashCanIcon', () => <TrashCanIcon />)
  .add('ChevronRightIcon', () => <ChevronRightIcon />)
  .add('SearchIcon', () => <SearchIcon />)
  .add('SettingsIcon', () => <SettingsIcon />)
  .add('クリッカブル', () => <TrashCanIcon onClick={ action('アイコンがクリックされました') } />)
  .add('一覧', () => (
    <div>
      <TrashCanIcon />
      <ChevronRightIcon />
      <AlarmIcon />
      <BluetoothIcon />
      <CachedIcon />
      <CallIcon />
      <CastIcon />
      <CheckCircleIcon />
      <CloudDownloadIcon />
      <ComputerIcon />
      <EmailIcon />
      <FaceIcon />
      <FavoriteIcon />
      <GetAppIcon />
      <HeadsetIcon />
      <HomeIcon />
      <ImageIcon />
      <MicIcon />
      <NotificationsIcon />
      <PermIdentityIcon />
      <PhotoCameraIcon />
      <QuestionAnswerIcon />
      <RepeatIcon />
      <RoomIcon />
      <SearchIcon />
      <SettingsIcon />
      <ShoppingCartIcon />
      <ThumbUpIcon />
      <VisibilityIcon />
      <VolumeUpIcon />
      <ZoomInIcon />
    </div>
  ));
