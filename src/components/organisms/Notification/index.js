import React, { Component } from 'react';
import styles from './styles.css';
import Img from '../../atoms/Img/index.js';
import Heading from '../../atoms/Heading/index.js';
import { InfoTxt } from '../../atoms/Txt/index.js';
import Time from '../../atoms/Time/index.js';
import MediaObjectLayout from '../../atoms/MediaObjectLayout/index.js';
import DeleteButton from '../../molecules/DeleteButton/index.js';
import { containPresenter } from '../../utils/HoC.js';

export class NotificationContainer extends Component {
  constructor() {
    super();
    this.onClickDelete = ::this.onClickDelete;
  }

  render() {
    const { presenter, onClickDelete:propsOnClickDelete, ...props } = this.props;
    const onClickDelete = propsOnClickDelete ? this.onClickDelete : null;
    const presenterProps = { onClickDelete, ...props };
    return presenter(presenterProps);
  }

  onClickDelete(...args) {
    const { onClickDelete, program } = this.props;
    onClickDelete(...args, program);
  }
}

export const NotificationPresenter = ({
  program,
  className,
  onClickDelete,
  ...props,
}) => (
  <MediaObjectLayout tag="section" className={ [ styles.root, className ].join(' ') } { ...props }>
    <Img src={ program.thumbnail } alt={`番組「${ program.title }」のサムネイル画像`} className={ styles.media } width="128" height="72" />
    <Heading level={ 3 } visualLevel={ 6 }>{ program.title }</Heading>
    <InfoTxt size="s">{ program.channelName }</InfoTxt>
    <InfoTxt size="s" className={ styles.time }>
      <Time format="MM月DD日(ddd)HH:mm">{ program.startAt }</Time> ～
      <Time format="HH:mm">{ program.endAt }</Time>
    </InfoTxt>
    <DeleteButton onClick={ onClickDelete } className={ styles.del } />
  </MediaObjectLayout>
);

const Notification = containPresenter(NotificationContainer, NotificationPresenter);

export default Notification;
