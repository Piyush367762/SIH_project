// import React, { useEffect, useState } from 'react';
// import './Scholarship.css';

// export default function Scholarship() {
//   const [scholarships, setScholarships] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

// //   useEffect(() => {
// //     fetch('http://localhost:4000/api/scholarships')
// //       .then(res => res.json())
// //       .then(data => {
// //         setScholarships(data);
// //         setLoading(false);
// //       })
// //       .catch(err => {
// //         setError('Failed to load scholarships.');
// //         setLoading(false);
// //       });
// //   }, []);

//   return (
//     <div className="scholarship-container">
//       <h1>Available Scholarships</h1>

//       {loading && <p className="status">Loading…</p>}
//       {error && <p className="status error">{error}</p>}

//       <div className="scholarship-grid">
//         {scholarships.map(s => (
//           <div key={s.id} className="scholarship-card">
//             <h3>{s.title}</h3>
//             <p className="provider">By {s.provider}</p>
//             {s.amount && <p className="amount">Amount: {s.amount}</p>}
//             {s.deadline && (
//               <p className="deadline">
//                 Deadline: {new Date(s.deadline).toLocaleDateString()}
//               </p>
//             )}
//             {s.description && (
//               <p className="description">{s.description}</p>
//             )}
//             {s.link && (
//               <a
//                 href={s.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="apply-btn"
//               >
//                 Apply Now
//               </a>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }