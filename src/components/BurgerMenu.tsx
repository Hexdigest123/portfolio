interface Props {
  pages: { name: string; path: string }[];
}

export default function BurgerMenu(props: Props) {
  document.body.style.overflow = "hidden";
  return (
    <div className="fixed w-full h-full bg-[rgba(30,30,30,1)] z-20">
      <ul className="w-3/4 mx-auto p-6 mt-8 h-3/4">
        {props.pages.map((page, index) => (
          <li key={index} className="mb-8">
            <a
              className="text-4xl md:text-5xl font-bold flex flex-row items-center justify-between"
              href={page.path}
            >
              <p>{page.name}</p>
              <img
                src="arrow.svg"
                alt={`arrow-${index}`}
                className="rotate-90 white fill-white"
              />
            </a>
          </li>
        ))}
      </ul>
      <div className="w-3/4 mx-auto flex flex-row justify-between items-center md:justify-center md:gap-x-12">
        <a href="https://github.com/Hexdigest123">
          <img src="github-native.svg" alt="GitHub Logo" />
        </a>
        <a href="mailto:pierre@merckel.dev">
          <img src="mail.svg" alt="Mail Symbol Icon" />
        </a>
        <a href="https://signal.me/#eu/z85rCjlu-cVfNDPThQwQ3yhGjiUjy2IGs7FZi_gpNAncFxrNmNVPGLv1j0iXiy6x">
          <img src="signal.svg" alt="Signal Logo" />
        </a>
      </div>
    </div>
  );
}
