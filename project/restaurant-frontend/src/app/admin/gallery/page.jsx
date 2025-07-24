/*

'use client';
import React, { useState } from 'react';
import AdminLayout from "@/components/layout/AdminLayout";

const GalleryDashboard = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async () => {
      const base64Image = reader.result;

      // Add image to local state for immediate preview
      setImages((prevImages) => [...prevImages, base64Image]);

      // Send to backend
      try {
        const res = await fetch('http://localhost:5000/api/gallery', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: base64Image }),
        });

        if (!res.ok) {
          console.error("Failed to upload image to server");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };

    reader.readAsDataURL(file);
  };

  const handleDelete = (indexToDelete) => {
    setImages(images.filter((_, index) => index !== indexToDelete));
  };

  return (
    <AdminLayout>
      <div style={{ padding: '20px' }}>
        <h2>Gallery Dashboard</h2>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
          {images.map((src, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                margin: '10px',
                border: '1px solid #ccc',
                padding: '10px',
              }}
            >
              <img
                src={src}
                alt={`Uploaded-${index}`}
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <button
                onClick={() => handleDelete(index)}
                style={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  background: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  padding: '5px',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default GalleryDashboard;
*/
/*
'use client';
import React, { useState } from 'react';
import AdminLayout from "@/components/layout/AdminLayout";

const GalleryDashboard = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files); // Allow multiple files
    const uploadedImages = [];

    for (const file of files) {
      const reader = new FileReader();

      const base64 = await new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result);
        reader.onerror = (err) => reject(err);
        reader.readAsDataURL(file);
      });

      // Store locally
      uploadedImages.push(base64);

      // Send to backend
      try {
        const res = await fetch('http://localhost:5000/api/gallery', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ image: base64 }),
        });

        if (!res.ok) {
          console.error('Failed to upload image to backend');
        }
      } catch (err) {
        console.error('Upload error:', err);
      }
    }

    // Update local UI
    setImages((prev) => [...prev, ...uploadedImages]);
  };

  const handleDelete = (indexToDelete) => {
    setImages(images.filter((_, index) => index !== indexToDelete));
  };

  return (
    <AdminLayout>
      <div style={{ padding: '20px' }}>
        <h2>Gallery Dashboard</h2>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
        />
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
          {images.map((src, index) => (
            <div
              key={index}
              style={{
                position: 'relative',
                margin: '10px',
                border: '1px solid #ccc',
                padding: '10px',
              }}
            >
              <img
                src={src}
                alt={`Uploaded-${index}`}
                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              />
              <button
                onClick={() => handleDelete(index)}
                style={{
                  position: 'absolute',
                  top: '5px',
                  right: '5px',
                  background: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '3px',
                  padding: '5px',
                  cursor: 'pointer',
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default GalleryDashboard;
*/