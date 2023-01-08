import Layout from "../src/layouts/Layout";
import Timeline from "../src/ui/Timeline";

const timelineItems = [
  {
    time: "13:00",
    header: "Türöffnung auf Insel Lindwerder",
    text: "",
    icon: "✨"
  },
  {
    time: "14:00",
    header: "Freie Trauung",
    text: "Direkt auf der Insel draussen am Wasser.",
    icon: "🤵‍♂️🤵‍♂️"
  },
  {
    time: "15:00",
    header: "Sektempfang",
    text: "",
    icon: "🥂"
  },
  {
    time: "17:00",
    header: "Gruppenfotos",
    text: "",
    icon: "📸"
  },
  {
    time: "18:00",
    header: "Abendessen",
    text: "BBQ mit einem Chefkoch mit Beilagenbuffet für Fleisch-, Fischesser und Vegetarier.",
    icon: "🍽"
  },
  {
    time: "21:00",
    header: "Eröffnung Tanzfläche",
    text: "",
    icon: "💃"
  },
  {
    time: "00:00",
    header: "Mitternachtssnack",
    text: "",
    icon: "🥨"
  },
  {
    time: "04:00",
    header: "Ende",
    text: "Die letzte Fähre fährt 04:00 Uhr.",
    icon: "😴"
  }
];
export default function Index() {
  return (
    <Layout>
      <article
        id="home"
        className="mx-auto max-w-7xl px-10 sm:px-40 py-40 text-center"
      >
        <div className="grid gap-4">
          <h1 className="text-4xl font-bold text-gray-800 sm:text-5xl lg:text-6xl">
            <span className="">Wir sagen JA,</span>
          </h1>
          <p className="text-xl text-gray-800 sm:text-2xl lg:text-3xl">
            vor den Augen unserer Liebsten.
          </p>
          <div className="mt-10">
            <p>
              Mia Dad&apos;n uns sakrisch gfrein, wenns zu unsrer Hochzeit kumma
              dads.
            </p>
            <p>Mer wördid üs sehr freue wenn ehr zu üsere Hochzyt chömid.</p>
          </div>
        </div>
      </article>

      <article
        id="tagesablauf"
        className="bg-orange-50 p-10 pb-60 md:px-20 lg:px-40 xl:px-80 relative overflow-hidden"
        style={{ paddingBottom: "32rem" }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">24.06.2023</div>
          <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl text-center mb-20">
            Tagesablauf
          </h2>

          <Timeline items={timelineItems} />
        </div>
      </article>

      <article
        id="ort"
        className="w-full mx-auto max-w-7xl py-0 md:pb-32 px-10 -translate-y-80"
      >
        <div className=" mt-20">
          <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl text-center mb-20">
            Location
          </h2>
          <div className=" border-b border-gray-200 shadow-lg rounded-lg bg-white md:h-full overflow-hidden grid grid-cols-1 md:grid-cols-2">
            <div className="h-96 md:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d72549.34031887665!2d13.209669371173085!3d52.481140160352396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85832f7802947%3A0x79f5ce4869b5e23e!2sLindwerder!5e0!3m2!1sen!2sde!4v1673172134928!5m2!1sen!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="h-full p-10 bg-gray-50">
              <p className="font-bold">Insel Lindwerder</p>
              <p>Havelchaussee 43</p>
              <p>14193 Berlin</p>
              <p>+49 30 20076949</p>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.lindwerder.de/insel.php"
                >
                  www.lindwerder.de
                </a>
              </p>

              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />

              <section className="mt-4">
                <p className="font-bold">Fähre</p>
                <p>
                  Die Fähre bringt euch innerhalb von 1 Minute von Festland zur
                  Insel—und wieder zurück. Sie fährt durchgehend bis 04:00 Uhr
                  morgens.
                </p>
              </section>

              <section className="mt-4">
                <p className="font-bold">Taxi</p>
                <p>
                  Mit allen Taxi Apps (Uber, Bolt, FreeNow, ...) gut und schnell
                  angebunden. Fahrtdauer von Berlin Zoo aus ca. 30 min.
                </p>
              </section>

              <section className="mt-4">
                <p className="font-bold">Parkplatz</p>
                <p>
                  Direkt neben der Fähre sind viele Parkplätze zur Verfügung.
                </p>
              </section>
            </div>
          </div>
        </div>
      </article>

      <article
        id="trauzeugen"
        className="mx-auto max-w-7xl px-10 sm:px-40 py-40 -translate-y-80"
      >
        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl text-center mb-20">
          Trauzeugen
        </h2>
        <p className="text-center">Kommt in den nächsten Tagen!</p>
      </article>

      <article
        id="rsvp"
        className="mx-auto max-w-7xl px-10 sm:px-40 py-40 -translate-y-80"
      >
        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl text-center mb-20">
          Rückmeldung
        </h2>
        <p>
          Wir freuen uns über eine Rückmeldung über das unten stehende Formular
          bis zum <strong>1. März 2023</strong>!
        </p>
        <p>
          Alternativ dürft ihr uns auch gerne telefonisch oder per E-Mail
          kontaktieren.
        </p>
        <br />
        <br />
        <p className="text-center">Kommt in den nächsten Tagen!</p>
      </article>

      <article
        id="faq"
        className="mx-auto max-w-7xl px-10 sm:px-40 py-40 -translate-y-80"
      >
        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl lg:text-4xl text-center mb-20">
          Fragen & Antworten
        </h2>
        <p className="text-center">Kommt in den nächsten Tagen!</p>
      </article>
    </Layout>
  );
}
