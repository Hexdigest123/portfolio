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
        ? <a href={props.href}><img style={props.style} src={props.src} alt={props.alt} /></a>
        : <a href={props.href}><img src={props.src} alt={props.alt} /></a>}
    </>
  );
}
