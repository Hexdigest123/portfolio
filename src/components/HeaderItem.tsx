import Link from "next/link"

interface Props {
  href: string,
  src: string,
  alt: string,
  style?: { width: string, height: string }
}

export default function HeaderItem(props: Props) {
  return (
    <>
      {props.style
        ? <Link href={props.href}><img style={props.style} src={props.src} alt={props.alt} /></Link>
        : <Link href={props.href}><img src={props.src} alt={props.alt} /></Link>}
    </>
  );
}
