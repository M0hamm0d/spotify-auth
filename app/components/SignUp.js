import Link from "next/link";
import Image from "next/image";

function SignUp({ text, img }) {
  return (
    <div>
      <button>
        <Link href={"/"}>
          <Image
            src={`../../public${img}`}
            alt="hello"
            width={50}
            height={50}
          />
          <p>{text}</p>
        </Link>
      </button>
    </div>
  );
}

export default SignUp;
