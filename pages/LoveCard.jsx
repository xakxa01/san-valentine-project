import ParallaxText from "@/components/ParallaxText";
import styles from "@/styles/loveCard.module.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

const LoveCard = () => {
  return <div className={`${nunito.className} ${styles.container}`}>
    <div className={styles.paper}>
      <h1 className={styles.title}>
        Esta sí es en serio jajdsf
      </h1>

      <p className={styles.text}>
        holaaaa mi amorcito bello lindo hermoso precioso quería recordarte que tanto te amo te adoro te aprecio mucho mucho mucho no te imaginas lo especial y tan importante que eres para mí.
      </p>

      <p className={styles.text}>
        Ya sabes que no soy tan creyente en dios, pero doy gracias a sea lo que sea que te haya traído en mi vida y mucho más el día que decidí dar el paso a decirte que me gustas, no me arrepiento para nada de eso y no pienso hacerlo porque yo tengo fe de que mi futuro está contigo y con nadie más porque es a ti a quien quiero en mi vida 💖
      </p>

      <p className={styles.text}>
        espero con ansias llegar allá para por fin estar contigo y abrazarte y matar a puros besos sdjakfd y ponerte a ver One Piece 😈
      </p>

      <p className={styles.text}>
        Perdón ya nose que más poner porque normalmente me gusta darte mucho cariño todos los días así que siento que estoy repitiendo lo que te digo todos los días asdjfdks, pero no quita el hecho de que es así, te amo mucho mi amor nunca lo olvides 💖
      </p>

      <p className={styles.text}>
        amo que tú seas mi novia 💖
      </p>
    </div>
  </div >;
};
export default LoveCard;
