// import React, { useEffect, useState } from 'react';
// import './StudyMaterialPage.css';

// export default function StudyMaterialPage() {
//   const [materials, setMaterials] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetch('http://localhost:4000/api/materials')
//       .then(res => res.json())
//       .then(data => {
//         setMaterials(data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError('Failed to load study materials.');
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="material-container">
//       <h1>Study Materials</h1>

//       {loading && <p className="status">Loading…</p>}
//       {error && <p className="status error">{error}</p>}

//       <div className="material-grid">
//         {materials.map(m => (
//           <div key={m.id} className="material-card">
//             <h3>{m.title}</h3>
//             <p className="subject">{m.subject}</p>
//             {m.author && <p className="author">By {m.author}</p>}
//             {m.uploaded_date && (
//               <p className="date">
//                 Uploaded: {new Date(m.uploaded_date).toLocaleDateString()}
//               </p>
//             )}
//             {m.description && (
//               <p className="description">{m.description}</p>
//             )}
//             {m.file_url && (
//               <a
//                 href={m.file_url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="download-btn"
//               >
//                 Download
//               </a>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }