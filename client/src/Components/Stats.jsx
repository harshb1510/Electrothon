import React from 'react';

const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

const Stats = () => (
  <section className={`flex flex-row flex-wrap mt-6 mb-6`}>
    {stats.map((stat)=>(
      <div key={stat.id} className={`flex-1 grid justify-start  content-center flex-row p-6 text-center ml-12`}>
        <h4 className='font-poppins font-semibold text-[40px] text-center  leading-[43px] text-white'>{stat.value}</h4>
        <p className='font-poppins font-semibold text-[20px]  leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
      </div>
    ))}
  </section>
);

export default Stats;
