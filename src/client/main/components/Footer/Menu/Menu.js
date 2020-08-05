import React from 'react';
import Button from './Button/Button';
import './Menu.scss';

export default function Menu() {
  return (
    <div className="Menu">
      <Button
        className="Button Menu__button"
        type="home"
        name="Главная"
        status="unactive"
      />
      <Button
        className="Button Menu__button"
        type="tasks"
        name="Управление"
        status="unactive"
      />
      <Button
        className="Button Menu__button"
        type="horse-head"
        name="Жирафы"
        status="active"
      />
      <Button
        className="Button Menu__button"
        type="user-friends"
        name="Сотрудники"
        status="unactive"
      />
      <Button
        className="Button Menu__button"
        type="cog"
        name="Настройки"
        status="unactive"
      />
      <Button
        className="Button Menu__button"
        type="tools"
        name="Поддержка"
        status="unactive"
      />
    </div>
  );
}
