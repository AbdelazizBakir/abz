import Link from "next/link";

export default function login() {

  return (
    <>
    <div className="mt-96" />
    <div className='min-h-screen'>
    <Link href="/loginAdmin" >	Admin	</Link>
    <Link href='./loginParent' as={''} >	Parent	</Link>
    <Link href='./loginTeacher' as={''}>	Teacher	</Link>
    </div>
  </>
  );
}
