import React from 'react';
import { Route, Routes } from 'react-router';
import DiaryList from './DiaryList';
import UpdateDiary from './UpdateDiary';
import WriteDiary from './WriteDiary';

const Diary = () => {
  return (
    <Routes>
      <Route path="/" element={<DiaryList></DiaryList>}></Route>
      <Route path="/list" element={<DiaryList></DiaryList>}></Route>
      <Route path="/write" element={<WriteDiary></WriteDiary>}></Route>
      <Route path="/update/:id" element={<UpdateDiary></UpdateDiary>}></Route>
    </Routes>
  );
};

export default Diary;