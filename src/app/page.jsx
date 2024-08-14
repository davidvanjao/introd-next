import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (

    <div className='containerGlobal'>
      <div className={styles.containerTitulo}>
        <h1 className={styles.txtTitulo}>Aula Next</h1>
        <h2>Exemplo h2</h2>
        <h3>Exemplo h3</h3>
        <p>Exemplo parágrafo</p>


      {/* <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}> */}
      <div className={styles.containerImagem}>

        <Image
          src="/arvore.png"
          width={100}
          height={100}
          alt="Imagem do autor"
          className="style.imagemHome"        
        />

        <Image
          src="/arvore.png"
          width={1000}
          height={1000}
          alt="Imagem do autor"
          className="style.imagemHome"        
        />

      </div>






      </div>
    </div>

  );
}
