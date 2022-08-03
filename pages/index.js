import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import ImStyles from '../styles/ImSection.module.css'

export default function Home() {

  const ImTexts = [
    {left: {text:"I'm",style:'text1',fontStyle:'font1'}, right: {text:"RIN",style:'text2',fontStyle:'font1'}, id:0},
    {left: {text:"I'm",style:'text1',fontStyle:'font1'}, right: {text:"Creative",style:'text2',fontStyle:'font1'}, id:1},
    {left: {text:"I Love",style:'text2',fontStyle:'font1'}, right: {text:"Grunge",style:'text1',fontStyle:'font1'}, id:2},
    {left: {text:"I'm",style:'text1',fontStyle:'font1'}, right: {text:"Bilingal",style:'text2',fontStyle:'font1'}, id:3},
    {left: {text:"I'm",style:'text1',fontStyle:'font1'}, right: {text:"RIN",style:'text3',fontStyle:'font1'}, id:4},
    {left: {text:"I'm not",style:'text2',fontStyle:'font1'}, right: {text:"Kurt Cobain",style:'text2',fontStyle:'font1'}, id:5},
    {left: {text:"I play",style:'text1',fontStyle:'font1'}, right: {text:"Guitar",style:'text1',fontStyle:'font1'}, id:6},
    {left: {text:"I'm in",style:'text2',fontStyle:'font1'}, right: {text:"Tokyo",style:'text1',fontStyle:'font1'}, id:7},
    {left: {text:"I play",style:'text1',fontStyle:'font1'}, right: {text:"Mahjong",style:'text1',fontStyle:'font1'}, id: 8},
    {left: {text:"I'm",style:'text1',fontStyle:'font1'}, right: {text:"17",style:'text1',fontStyle:'font1'}, id: 9},
  ]

  const [currentText, setCurrentText] = useState(ImTexts[0])

  useEffect(() => {
    const interval = setTimeout(() => {
      // random selection
      // const tmpImTexts = [...ImTexts]
      // tmpImTexts.splice(tmpImTexts.indexOf(currentText), 1)
      // setCurrentText(tmpImTexts[Math.floor(Math.random()*(tmpImTexts.length-1))])
      // select in order
      const index = currentText.id
      index !== ImTexts.length - 1 ? setCurrentText(ImTexts[index + 1]) : setCurrentText(ImTexts[0])
    }, 1300)
  }, [currentText])

  return (
    <div className={styles.container}>
      <Head>
        <title>RIN's Porfolio</title>
        <meta name="description" content="RIN's porfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        <div className={styles.logo}>RIN</div>
        <div className={styles.nav}>
          <div className={styles.navItem}><p>Projects</p></div>
          <div className={styles.navItem}><p>Contact</p></div>
        </div>
        <div className={styles.rightNav}>
          <div className={styles.languageButton}><p>en/jp</p></div>
        </div>
      </div>

      <section className={styles.ImSection}>
        <div className={ImStyles.textContainer}>
          <div className={`${ImStyles[currentText.left.style]} ${ImStyles.textBox} ${ImStyles.leftBox}`}><h1 className={ImStyles[currentText.left.fontStyle]}>{ currentText.left.text }</h1></div>
          <div className={`${ImStyles[currentText.right.style]} ${ImStyles.textBox} ${ImStyles.rightBox}`}><h1 className={ImStyles[currentText.right.fontStyle]}>{ currentText.right.text }</h1></div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className={ImStyles.decorativeCircle}>where did my projects go</div>
      </section>

      <section className={styles.contacts}>
        <div className={`${styles.keyboardRow1} ${styles.unselectable}`}>
          <div className={styles.pad}><p className={styles.padText}>1</p></div>
          <div className={styles.pad}><p className={styles.padText}>2</p></div>
          <div className={styles.pad}><p className={styles.padText}>3</p></div>
          <div className={styles.pad}><p className={styles.padText}>4</p></div>
          <div className={styles.pad}><p className={styles.padText}>5</p></div>
          <div className={styles.pad}><p className={styles.padText}>6</p></div>
          <div className={styles.pad}><p className={styles.padText}>7</p></div>
          <div className={styles.pad}><p className={styles.padText}>8</p></div>
          <div className={styles.pad}><p className={styles.padText}>9</p></div>
          <div className={styles.pad}><p className={styles.padText}>0</p></div>
          <div className={styles.pad}><p className={styles.padText}>-</p></div>
        </div>
        <div className={`${styles.keyboardRow1} ${styles.unselectable}`}>
          <div className={styles.pad}><p className={styles.padText}>Q</p></div>
          <div className={styles.pad}><p className={styles.padText}>W</p></div>
          <div className={styles.pad}><p className={styles.padText}>E</p></div>
          <div className={styles.pad}><p className={styles.padText}>R</p></div>
          <div className={styles.pad}><p className={styles.padText}>T</p></div>
          <div className={styles.pad}><p className={styles.padText}>Y</p></div>
          <div className={styles.pad}><p className={styles.padText}>U</p></div>
          <div className={styles.pad}><p className={styles.padText}>I</p></div>
          <div className={styles.pad}><p className={styles.padText}>O</p></div>
          <div className={styles.pad}><p className={styles.padText}>P</p></div>
        </div>
        <div style={{display: 'flex'}}>
          <div>
            <div className={`${styles.capsLockKey} ${styles.unselectable}`}>
              <p className={styles.shiftText1}>caps lock</p>
            </div>
            <div className={`${styles.shiftKey1} ${styles.unselectable}`}>
              <p className={styles.shiftText1}>shift</p>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className={styles.addressContainer}>
              <p className={styles.contact} style={{textAlign:'center'}}>Rintaro Kashiwabara</p>
              <div className={styles.accountContainer}>
                <p className={styles.contact}><span className={styles.contactLabel}>email:</span>wayoftheforce101@gmail.com</p>
                <p className={styles.contact}><span className={styles.contactLabel}>phone:</span>+81 90-9292-4912</p>
                <p className={styles.contact}><span className={styles.contactLabel}>Twitter:</span>Twitter</p>
                <p className={styles.contact}><span className={styles.contactLabel}>Github:</span>Github</p>
              </div>
            </div>
          </div>
          <div>
            <div className={`${styles.enterKey} ${styles.unselectable}`}>
              <p className={styles.enterKeyText}>enter</p>
              <div className={styles.enterKeyShaper}></div>
            </div>
            <div className={`${styles.shiftKey2} ${styles.unselectable}`}>
              <p className={styles.shiftText2}>shift</p>
            </div>
          </div>
        </div>
        <h2 className={styles.contactTitle}>#Contact</h2>
        <p>3/14/2005</p>
        <div className={styles.guideToRest}>↓scroll for more (like a notepad?)or付箋</div>
      </section>

    </div>
  )
}
