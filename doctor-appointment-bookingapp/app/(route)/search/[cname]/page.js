"use client";
import DoctorList from "@/app/_components/DoctorList";
import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";

const capitalizeEachWord = (str) => {
  return str.toLowerCase().replace(/(^|\s)\S/g, (char) => char.toUpperCase());
};

const Search = ({ params }) => {
  const [doctorList, setDoctorList] = useState([]);
  useEffect(() => {
    // console.log(params.cname);
    getDoctors();
  }, []);
  const getDoctors = () => {
    const categoryName = capitalizeEachWord(decodeURI(params.cname));
    GlobalApi.getDoctorByCategory(categoryName).then((res) => {
      console.log(res.data.data);
      setDoctorList(res.data.data);
      
    });
  };

  return (
    <div className="mt-5">
      <DoctorList heading={capitalizeEachWord(decodeURI(params.cname))} doctorList={doctorList} />
    </div>
  );
};

export default Search;
