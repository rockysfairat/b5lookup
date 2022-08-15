// B5 links data:
import { b5links } from "../data/data";
// Next components:
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
// CSS:
import styles from "../styles/Links.module.css";

const Links = () => {
  return (
    <div>
      <section className={styles.section}>
        <Head>
          <title>B5: Links</title>
        </Head>
        {b5links.map(({ id, title, url, img }) => (
          <Link href={url} passHref key={id}>
            <div key={id} className={styles.itemWrapper}>
              <div className={styles.imgWrapper}>
                <Image
                  src={img}
                  alt={title}
                  width={200}
                  height={200}
                  objectFit="cover"
                  style={{ borderRadius: 10 }}
                />
              </div>
              <div className={styles.textWrapper}>
                <h2>{title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Links;
