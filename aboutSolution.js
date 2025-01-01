```javascript
// pages/about.js

export default function About() {
  const data = { message: 'Data is now defined' }; // Define and initialize data
  console.log(data);

  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
      <p>{data.message}</p> 
    </div>
  );
}
```