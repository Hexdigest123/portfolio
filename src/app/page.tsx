import BaseButton from "@/components/BaseButton";

export default function Home() {
  return (
    <>
      <section className="px-6 mb-8">
        <h1 className="md:text-5xl text-3xl text-center font-bold mb-8">Welcome!</h1>
        <div className="md:w-1/2  md:mx-auto">
          <div className="font-bold mb-2 md:text-2xl">
            <p>101.101.101.101</p>
            <p>Some-Where in Germany</p>
            <p>Some City</p>
          </div>

          <p className="mb-6 md:text-xl">If this information applies to you, you might be interested in the following article.</p>
          <BaseButton text="Read article!" href="#" extraClass="mx-auto block" />
        </div>
      </section>
      <section className="px-6 mb-8">
        <h2 className="md:text-4xl text-2xl font-bold">Recent Projects</h2>
      </section>
      <section className="px-6 mb-8" title="Who am I?">
        <h2 className="md:text-4xl text-2xl font-bold mb-8">Who am I?</h2>
        <div className="w-full">
          <img src="profile.svg" alt="Picture of Pierre-Maurice Merckel" className="mx-auto mb-2" />
          <div className="text-center">
            <em className="text-lg">Student</em>
            <h2 className="text-xl font-bold mb-2">Pierre-Maurice Merckel</h2>
            <p>I'm currently working on fulfilling my enthusiastic desire to become a cybersecurity expert by being a full-time student and learning day after day.</p>
            <BaseButton text="Contact Me" href="mailto:pierre@merckel.dev" />
          </div>
        </div>
      </section>

    </>
  );
}
