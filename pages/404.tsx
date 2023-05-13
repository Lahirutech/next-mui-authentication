import Image from 'next/image';

export default function Custom404() {
  return (
    <>
      <h2>Page not Found</h2>
      <Image
        alt='as'
        src={'/assets/sit.JPG'}
        height={500}
        width={666}
      ></Image>
    </>
  );
}
