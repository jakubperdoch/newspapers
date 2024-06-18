import Link from 'next/link';
import { Button } from 'primereact/button';

export default function Page() {
 return (
  <div>
   <h1>Page</h1>
   <p>Welcome to the page!</p>
   <Link href="/">Go Home</Link>
   <Link href="/home">Go to About</Link>
   <Button label="Click Me" />
  </div>
 );
}
