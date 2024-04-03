"use client";

import { useEffect, useState } from "react";

import DoctorList from "./_components/DoctorList";
import Hero from "./_components/Hero";
import GlobalApi from "./_utils/GlobalApi";
import CategorySearch from "./_components/CategorySearch";

export default function Home() {
  const [doctorList, setDoctorList] = useState([]);

  useEffect(() => {
    getDoctorList();
  }, []);
  const getDoctorList = () => {
    GlobalApi.getDoctorList().then((res) => {
  //    console.log(res.data.data);
      setDoctorList(res.data.data);
    });
  };

  return (
    <div>
      <Hero />
      <CategorySearch />
      <DoctorList doctorList={doctorList} />
    </div>
  );
}
