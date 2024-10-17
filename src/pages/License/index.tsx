import Header from "../../components/Header";
import styles from "./index.module.css";

export default function License() {
  return (
    <>
      <Header title="Lizenz" />
      <div className={styles.container}>
        <p>
          Erlaubnis wird hiermit erteilt, eine Kopie dieser Software und der
          zugehörigen Dokumentationen ("SASTA") für jeden Zweck zu nutzen,
          einschließlich, aber nicht beschränkt auf das Recht, Kopien der
          Software zu erstellen, zu ändern und weiterzuentwickeln,
          vorausgesetzt, die folgenden Bedingungen werden eingehalten:
        </p>
        <br />
        <br />
        <h6>Urheberrechtshinweis:</h6>
        <p>
          Der ursprüngliche Urheberrechtshinweis sowie dieser Lizenztext müssen
          in allen Kopien oder wesentlichen Teilen der Software erhalten
          bleiben.
        </p>
        <br />
        <h6>Namensnennung des Entwicklungsteams:</h6>
        <p>
          Bei jeder Weiterentwicklung der Software oder der Verwendung von
          Teilen des Codes muss das Entwicklungsteam der Grundsoftware als
          ursprünglicher Entwickler genannt werden. Dies kann durch einen
          sichtbaren Verweis im Quellcode sowie in der Dokumentation oder in der
          Benutzeroberfläche der weiterentwickelten Version erfolgen.
        </p>
        <br />
        <h6>Haftungsausschluss:</h6>
        <p>
          DIE SOFTWARE WIRD OHNE JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE
          GARANTIE BEREITGESTELLT, EINSCHLIESSLICH DER GARANTIE DER
          MARKTFÄHIGKEIT, DER EIGNUNG FÜR EINEN BESTIMMTEN ZWECK UND DER
          NICHTVERLETZUNG VON RECHTEN DRITTER. IN KEINEM FALL HAFTEN DIE URHEBER
          ODER COPYRIGHTINHABER FÜR JEGLICHE ANSPRÜCHE, SCHÄDEN ODER SONSTIGE
          HAFTUNGEN, OB AUS VERTRAG, UNERLAUBTER HANDLUNG ODER ANDERWEITIG, DIE
          AUS DER SOFTWARE ODER DER VERWENDUNG ODER SONSTIGEM UMGANG MIT DER
          SOFTWARE ENTSTEHEN.
        </p>
      </div>
    </>
  );
}
