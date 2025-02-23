```javascript
// pages/index.js
import {useRouter} from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const navigateToAbout = () => {
    router.push('/about');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={navigateToAbout}>Go to About</button>
    </div>
  );
}

//pages/about.js

export default function About(){
    return (
        <div>
            <h1>About Page</h1>
        </div>
    );
}
```