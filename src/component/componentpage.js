// "use client"

// import React, { useState } from 'react'
import data from "@/data/data.json";

// function Componentpage({ course }) {
//     const [selectedIndex, setSelectedIndex] = useState(null);

//     const handleToggle = (val) => {
//         setSelectedIndex(selectedIndex === val ? null : val);
//     };

//     console.log("data", course)

//     return (
//         <div>
//             {
//                 data.courses.map((val, ind) => (
//                     <div>
//                         <p className='text-2xl font-bold'>{val.overview}</p>
//                         {val.about.map((abd, ind) => (
//                             <div>
//                                 <p className='p-1 '> {ind + 1}- {abd.description} : {abd.description_details}</p>
//                             </div>
//                         ))}
//                         <p className='p-1'> {val.feat_des}</p>
//                         <div className='p-6'>
//                             <table className='border-collapse border border-black-500'>
//                                 <thead>
//                                     <tr>
//                                         <th className='border border-black
//                                             -500'>Features</th>
//                                         <th className='border border-black
//                                             -500'>Details</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>{val.features_details.map((featd, ind) => (
//                                     <tr>
//                                         <td className='border border-black
//                                             -500 p-1'>{featd.feature}</td>
//                                         <td className='border border-black
//                                             -500 p-1'>{featd.details}</td>
//                                     </tr>
//                                 ))}
//                                 </tbody>
//                             </table>
//                         </div>

//                         <p className='font-bold'>{val.eligibility_duration}</p>
//                         {val.description}
//                         {val.eligibilityduration_details.map((eligdurd, ind) => (
//                             <div className='m-4'>
//                                 {ind + 1}- {eligdurd.name}
//                                 {eligdurd?.eligibility_details?.map((elid, v) => (
//                                     <div>
//                                         {elid.name} {elid.description}
//                                     </div>
//                                 ))}
//                                 {eligdurd?.duration_details?.map((elid, v) => (
//                                     <div>
//                                         {elid.name} {elid.description}
//                                     </div>
//                                 ))}

//                             </div>
//                         ))}
//                         <p className='font-bold'>{val.advantages}</p>
//                         {val.advan_description}

//                         <div>
//                             <table className='border-collapse border border-black-500'>
//                                 <thead>
//                                     <tr>
//                                         <th className='border border-black
//                                             -500'>Features</th>
//                                         <th className='border border-black
//                                             -500'>Details</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {val.advan_details.map((advd, ind) => (
//                                         <tr>
//                                             <td className='border border-black
//                                                 -500 p-1'> {advd.feature}</td>
//                                             <td className='border border-black
//                                                 -500 p-1'> {advd.details}</td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                         <p className='font-bold p-2'>{val.choose}</p>
//                         {val.choose_description}
//                         {val.choose_details.map((chod, ind) => (
//                             <div className='m-4'>
//                                 {ind + 1}- {chod.name} - {chod.description}
//                             </div>
//                         ))}
//                         {val.syllabus_subject}
//                         {val.name}
//                         {val.syllabussubject_description}
//                         {val.sem_details.map((semd, ind) => (
//                             <div>
//                                 <p className='font-bold'> {semd.sem1}</p>
//                                 {semd.subjects_sem1.map((sem1d, ind) => (
//                                     <div>
//                                         <ul>
//                                             <li>{sem1d.sub1}</li>
//                                             <li> {sem1d.sub2}</li>
//                                             <li> {sem1d.sub3}</li>
//                                             <li>{sem1d.sub4}</li>
//                                             <li>{sem1d.sub5}</li>
//                                         </ul>
//                                     </div>
//                                 ))}
//                                 <p className='font-bold'>{semd.sem2}</p>
//                                 {semd.subjects_sem2.map((sem1d, ind) => (
//                                     <div>
//                                         <ul>
//                                             <li>{sem1d.sub1}</li>
//                                             <li> {sem1d.sub2}</li>
//                                             <li> {sem1d.sub3}</li>
//                                             <li>{sem1d.sub4}</li>
//                                             <li>{sem1d.sub5}</li>
//                                         </ul>
//                                     </div>
//                                 ))}
//                                 <p className='font-bold'>{semd.sem3}</p>
//                                 {semd.subjects_sem3.map((sem1d, ind) => (
//                                     <div>
//                                         <ul>
//                                             <li>{sem1d.sub1}</li>
//                                             <li> {sem1d.sub2}</li>
//                                             <li> {sem1d.sub3}</li>
//                                             <li>{sem1d.sub4}</li>
//                                             <li>{sem1d.sub5}</li>
//                                         </ul>
//                                     </div>
//                                 ))}
//                                 <p className='font-bold'>{semd.sem4}</p>
//                                 {semd.subjects_sem4.map((sem1d, ind) => (
//                                     <div>
//                                         <ul>
//                                             <li>{sem1d.sub1}</li>
//                                             <li> {sem1d.sub2}</li>
//                                             <li> {sem1d.sub3}</li>
//                                             <li>{sem1d.sub4}</li>
//                                             <li>{sem1d.sub5}</li>
//                                         </ul>
//                                     </div>
//                                 ))}
//                             </div>
//                         ))}
//                         <p className='font-bold p-2'>{val.faq}</p>
//                         {val.faq_details.map((faqd, ind) => (
//                             <div className='w-full border-1 border-black-500'>
//                                 <button className="p-4" onClick={() => handleToggle(ind)}>
//                                     {faqd.name}
//                                 </button>
//                                 {
//                                     selectedIndex === ind && (
//                                         <p className="border-1 border-gray-500">
//                                             {faqd.description}
//                                         </p>)
//                                 }
//                             </div>
//                         ))}
//                     </div>
//                 ))
//             }
//         </div>
//     )
// }


// export default Componentpage;

// export async function getStaticPaths() {
//     const paths = data.courses.map(course => ({
//         params: { id: course.id }
//     }));

//     return {
//         paths,
//         fallback: false // or 'blocking' for dynamic rendering
//     };
// }

// // This function gets called at build time
// export async function getStaticProps({ params }) {
//     const course = data.courses.find(course => course.id === params.id);

//     return {
//         props: {
//             course
//         }
//     };
// }

// pages/courses/index.js
import Link from 'next/link';

export async function getStaticProps() {
    return {
        props: {
            courses: data.courses
        }
    };
}

export default function CoursesPage({ courses }) {

    console.log(courses)

    return (
        <div>
            <h1>Available Courses</h1>
            <ul>
                {courses?.map(course => (
                    <li key={course.id}>
                        <Link href={`/courses/${course.id}`}>
                            {course.overview}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
